# Security Policy for CivicPulse-AI

## 1. Overview

CivicPulse-AI is an AI-powered community issue reporting and management platform built on Firebase and Google Cloud. This document outlines security practices, vulnerability disclosure procedures, and security considerations for developers and deployers.

**Project**: AI-powered civic infrastructure reporting platform  
**Stack**: React 18 + TypeScript + Firebase 10 + Google Gemini AI  
**Status**: Hackathon MVP (Coding Ninjas Vibe2Ship)

---

## 2. Security Architecture

### 2.1 Authentication & Authorization

**Framework**: Firebase Authentication

**Implementation Details**:
- **Methods Supported**: 
  - Google OAuth sign-in via `GoogleAuthProvider`
  - Email/password authentication (Firebase default)
- **Client-side Auth Flow** (see `src/services/authService.ts`):
  - Users sign in via `signInWithPopup()`
  - User document created in Firestore with structure:
    ```typescript
    {
      userId: string;
      email: string;
      displayName: string;
      photoURL: string;
      role: 'resident' | 'admin';
      societyId: string;
    }
    ```

**Current Security Concerns**:
- ⚠️ **CRITICAL**: Role assignment is client-controlled via `requestedRole` parameter in `authService.ts` (line 7-22). Users can request the 'admin' role on signup. This is documented as an MVP limitation ("In a real app with strict security, the backend assigns the admin custom claim").
- ✅ **Mitigation**: In production, implement Firebase Custom Claims for role assignment. Admins should be assigned roles server-side only via Firebase Admin SDK with verification of manual approval.

**Recommended Fix**:
```typescript
// Instead of client-side role assignment, use Firebase Custom Claims
// Set via backend/Admin SDK only after manual verification
// Claims persist in JWT tokens and cannot be spoofed by client

// In production admin setup (Cloud Function):
await admin.auth().setCustomUserClaims(uid, { admin: true });
```

---

### 2.2 Firestore Security Rules

**File**: `firestore.rules`

**Current Rules**:
```
match /users/{userId} {
  allow read, write: if request.auth != null;
}

match /issues/{issueId} {
  allow read, write: if request.auth != null;
  
  match /votes/{voteId} {
    allow read, write: if request.auth != null;
  }
  
  match /comments/{commentId} {
    allow read, write: if request.auth != null;
  }
}
```

**Security Issues**:
- ⚠️ **OVERLY PERMISSIVE**: Any authenticated user can:
  - Read/write all user documents (privacy violation)
  - Read/write all issues (data corruption risk)
  - Modify votes and comments created by other users
  
- ⚠️ **NO DOCUMENT-LEVEL OWNERSHIP**: Users can modify issues they didn't create

**Recommended Enhanced Rules**:
```firestore security rules
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users can only read/write their own document
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
      allow read: if hasAdminRole();
    }
    
    // All authenticated users can read issues
    // Only issue creator can update details
    // Admins have full control
    match /issues/{issueId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update: if isIssueCreator(issueId) || hasAdminRole();
      allow delete: if hasAdminRole();
      
      // Votes: prevent duplicate voting
      match /votes/{voteId} {
        allow read: if request.auth != null;
        allow create: if request.auth.uid == voteId && canVote(issueId);
        allow delete: if request.auth.uid == voteId;
      }
      
      // Comments: creator can edit/delete own comments
      match /comments/{commentId} {
        allow read: if request.auth != null;
        allow create: if request.auth != null;
        allow update, delete: if isCommentCreator(commentId) || hasAdminRole();
      }
    }
    
    // Helper functions
    function hasAdminRole() {
      return request.auth.token.admin == true;
    }
    
    function isIssueCreator(issueId) {
      return get(/databases/$(database)/documents/issues/$(issueId)).data.reportedBy == request.auth.uid;
    }
    
    function isCommentCreator(commentId) {
      return get(/databases/$(database)/documents/issues/$(issueId)/comments/$(commentId)).data.createdBy == request.auth.uid;
    }
    
    function canVote(issueId) {
      return !exists(/databases/$(database)/documents/issues/$(issueId)/votes/$(request.auth.uid));
    }
  }
}
```

---

### 2.3 Firebase Storage Security

**File**: `storage.rules`

**Current Rules**:
```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

**Security Issues**:
- ⚠️ **OVERLY PERMISSIVE**: Any authenticated user can:
  - Read all uploaded images
  - Modify/delete all issue photos
  - Upload arbitrary content

- ✅ **Partial Mitigation**: Storage path includes `societyId` and `issueId` (`issues/{societyId}/{issueId}/original.{ext}`), but rules don't enforce this structure.

**Recommended Enhanced Rules**:
```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    
    // Issue photos: creator can write, all authenticated users can read
    match /issues/{societyId}/{issueId}/{allFiles=**} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && 
                       request.resource.size <= 10 * 1024 * 1024 &&
                       request.resource.contentType.matches('image/.*');
      allow delete, update: if isIssueCreator(societyId, issueId) || hasAdminRole();
    }
    
    function isIssueCreator(societyId, issueId) {
      return firestore.get(/databases/(default)/documents/issues/$(issueId)).data.reportedBy == request.auth.uid;
    }
    
    function hasAdminRole() {
      return request.auth.token.admin == true;
    }
  }
}
```

---

### 2.4 Cloud Functions Security

**Location**: `functions/src/handlers/`

#### analyzeIssue Function

**File**: `functions/src/handlers/analyzeIssue.ts`

**Security Strengths**:
- ✅ **Authentication Check** (line 10): Function verifies `request.auth != null`
- ✅ **Secret Management**: Uses `defineSecret('GEMINI_API_KEY')` — API key stored in Google Cloud Secret Manager, not hardcoded
- ✅ **Input Validation**: Checks for required parameters `imageBase64` and `issueId`
- ✅ **Timeout**: 30-second timeout prevents long-running exploits

**Security Issues**:
- ⚠️ **INSUFFICIENT INPUT VALIDATION**: 
  - No validation of `imageBase64` size before processing (DoS risk)
  - `description` parameter not sanitized
  - `mimeType` not validated against whitelist
  
- ⚠️ **INSUFFICIENT OUTPUT VALIDATION**:
  - JSON parsing at line 70 catches invalid JSON but no schema validation before line 76
  - Zod schema validation happens, but error message at line 72 leaks error details to client

- ⚠️ **BLIND FIRESTORE WRITE**: 
  - Line 87-89 writes `aiAnalysis: { analysisStatus: 'failed' }` on error
  - No verification that the issueId document exists or was created by the calling user

**Recommended Improvements**:
```typescript
// Add input validation
const MAX_BASE64_SIZE = 5 * 1024 * 1024; // 5MB base64
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

if (imageBase64.length > MAX_BASE64_SIZE) {
  throw new HttpsError('invalid-argument', 'Image too large');
}

if (!ALLOWED_MIME_TYPES.includes(imageMime)) {
  throw new HttpsError('invalid-argument', 'Invalid image format');
}

if (description && description.length > 1000) {
  throw new HttpsError('invalid-argument', 'Description too long');
}

// Verify ownership before writing
const issueDoc = await db.collection('issues').doc(issueId).get();
if (!issueDoc.exists()) {
  throw new HttpsError('not-found', 'Issue not found');
}

// Verify the caller is the issue creator or admin
if (issueDoc.data().reportedBy !== request.auth.uid && 
    !request.auth.token.admin) {
  throw new HttpsError('permission-denied', 'Not authorized');
}

// Generic error message (don't leak schema details)
catch (error) {
  console.error('AI Analysis Error:', error);
  throw new HttpsError('internal', 'Analysis failed. Please try again.');
}
```

#### summarizeFeedback Function

**File**: `functions/src/handlers/summarizeFeedback.ts`

**Security Strengths**:
- ✅ **No Direct Input**: Triggered on document creation, data comes from Firestore
- ✅ **Cost Control**: Throttles AI calls (only every 5 comments, line 28)

**Security Issues**:
- ⚠️ **NO PERMISSION CHECKS**: Firestore trigger doesn't verify who created the comment before triggering AI
- ⚠️ **UNVALIDATED DATA INJECTION**: Comment text from line 31 is directly injected into AI prompt without sanitization
- ⚠️ **ERROR HANDLING**: Catches error but silently fails (line 51) — could hide issues

**Recommended Improvements**:
```typescript
// Validate comment data before using
const comment = snapshot.data();
if (!comment || !comment.text) {
  console.warn('Invalid comment data');
  return;
}

// Sanitize text before AI prompt
const sanitizedComments = commentsList
  .split('\n- ')
  .map((text: string) => text.slice(0, 500)) // Truncate long comments
  .join('\n- ');

// Handle errors explicitly
catch (err) {
  console.error('Summarization failed for issue:', issueId, err);
  // Optionally: mark issue with summarization error
  await issueRef.update({ 
    summarizationStatus: 'failed',
    summarizationError: (err as Error).message 
  });
}
```

---

### 2.5 API Configuration

**Firebase Configuration** (`src/services/firebase.ts`):
- ✅ Uses environment variables for all sensitive config:
  ```typescript
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
  ```

**Security Considerations**:
- ⚠️ **API Key Exposure**: The Firebase API key is publicly visible in environment files and client code (this is expected for Firebase SDKs, but it's not a secret)
- ✅ **Region Specified**: Functions region set to `asia-south2` (line 20) — ensures data residency

---

### 2.6 CORS Configuration (Functions)

**File**: `firebase.json`

**Current Config**:
Functions don't explicitly define CORS origins. Firebase Functions default to allowing all origins for CORS (`*`).

**Recommended Enhancement**:
```typescript
// In analyzeIssue and summarizeFeedback:
export const analyzeIssue = onCall({
  secrets: [GEMINI_API_KEY],
  timeoutSeconds: 30,
  region: 'asia-south2',
  cors: ['https://civicpulse-ai-e8baf.web.app'] // Whitelist production domain
}, async (request) => { ... });
```

---

## 3. Sensitive Data Handling

### 3.1 Image Processing

**File**: `src/services/storageService.ts`

**Current Implementation**:
```typescript
// File validation (lines 12-18)
if (!file.type.startsWith("image/")) {
  throw new Error("Only image files are allowed");
}

if (file.size > 10 * 1024 * 1024) {
  throw new Error("Image size must be less than 10MB");
}
```

**Security Strengths**:
- ✅ Client-side MIME type check
- ✅ File size limit enforced

**Security Issues**:
- ⚠️ **CLIENT-SIDE VALIDATION ONLY**: MIME type and size checks can be bypassed
- ⚠️ **NO METADATA STRIPPING**: Uploaded images retain EXIF data, which may contain:
  - GPS coordinates
  - Device information
  - Timestamp metadata

**Recommended Improvements**:
```typescript
// Add server-side validation in Cloud Function
// Strip EXIF metadata before storage

// Option 1: Use Cloud Functions with image library
import * as sharp from 'sharp';

const imageBuffer = Buffer.from(imageBase64, 'base64');
const cleanedImage = await sharp(imageBuffer)
  .rotate() // Auto-rotate
  .withMetadata(false) // Strip EXIF
  .toBuffer();

// Option 2: Use Cloud Storage image transformation
// Specify transformations in storage path
// E.g., /issues/{societyId}/{issueId}/original-clean.jpg
```

### 3.2 User Data

**Firestore User Documents**:
```typescript
{
  userId: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: 'resident' | 'admin';
  societyId: string;
}
```

**Security Considerations**:
- ⚠️ **NO ENCRYPTION AT REST**: Firestore uses Google's managed encryption, but consider application-level encryption for sensitive PII
- ✅ **AUTHENTICATION GATED**: User data requires Firebase Auth
- ⚠️ **ACCESSIBLE TO RESIDENTS**: Current rules allow residents to read all user emails/names

**Recommended**: Update Firestore rules to restrict user document reads to self + admins.

### 3.3 API Keys

**Gemini API Key Management**:
- ✅ **SECURE**: Stored in Google Cloud Secret Manager
- ✅ **NOT EXPOSED**: Never sent to client
- ✅ **SCOPED**: Used only within Cloud Functions

**Best Practices**:
- Cloud Function retrieves key via `GEMINI_API_KEY.value()` at runtime
- Key is never logged or exposed in error messages
- Consider adding API key rate limiting and quota management in Google Cloud Console

---

## 4. Input Validation & Sanitization

### 4.1 Current Validation

**Issue Creation** (`src/services/issueService.ts`, lines 28-31):
```typescript
if (!issueData.societyId) {
  throw new Error("Society ID is required");
}
```

**Issues**:
- ⚠️ **MINIMAL VALIDATION**: Only checks for societyId presence
- ⚠️ **NO LENGTH LIMITS**: Description, locationLabel not validated
- ⚠️ **NO INJECTION PROTECTION**: Data directly stored in Firestore

### 4.2 Recommended Validation Schema

Use Zod (already in `functions/package.json`) for consistent validation:

```typescript
import { z } from 'zod';

const CreateIssueSchema = z.object({
  societyId: z.string().min(1).max(100),
  reportedBy: z.string().min(1).max(100),
  description: z.string().min(5).max(1000),
  locationLabel: z.string().min(1).max(200),
  imageUrl: z.string().url().optional(),
  category: z.enum(['Pothole', 'Drainage', 'Lighting', 'Sanitation', 'Structural', 'Other']),
});

export const issueService = {
  createIssue: async (issueData: Partial<Issue>): Promise<string> => {
    const validated = CreateIssueSchema.parse(issueData);
    // ... proceed with validated data
  }
};
```

---

## 5. Third-Party Dependencies

### 5.1 Frontend Dependencies (`package.json`)

| Package | Version | Security Notes |
|---------|---------|-----------------|
| `firebase` | ^10.12.2 | ✅ Official Google package, actively maintained |
| `react` | ^18.3.1 | ✅ Latest major version |
| `react-router-dom` | ^6.24.0 | ✅ Latest v6 |
| `zustand` | ^4.5.2 | ✅ Lightweight, low attack surface |
| `tailwind-merge` | ^2.3.0 | ✅ Utility-focused |
| `lucide-react` | ^0.394.0 | ✅ Icon library, safe |

**Recommendation**: Run `npm audit` and `npm audit fix` regularly.

### 5.2 Backend Dependencies (`functions/package.json`)

| Package | Version | Security Notes |
|---------|---------|-----------------|
| `@google/genai` | ^1.16.0 | ⚠️ Monitor for updates |
| `firebase-admin` | ^12.1.1 | ✅ Official package |
| `firebase-functions` | ^5.0.1 | ✅ Official package |
| `@modelcontextprotocol/sdk` | ^1.29.0 | ⚠️ Verify usage context |
| `zod` | ^3.23.8 | ✅ Runtime schema validation |

**Recommendation**: Use `npm audit` and consider `snyk` for continuous monitoring.

---

## 6. Deployment & Environment Security

### 6.1 Environment Variables

**Frontend** (`.env` variables):
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=civicpulse-ai-e8baf
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

**Security**:
- ⚠️ API key is public (expected for Firebase, but restricts API key scope)
- ✅ `.env` files should never be committed (check `.gitignore`)
- ✅ `.gitignore` includes `.env` (line 66)

**Backend Secrets** (`functions/`):
- ✅ `GEMINI_API_KEY` stored in Google Cloud Secret Manager
- ✅ Deployed via `defineSecret()` 
- ✅ Never exposed in code

### 6.2 Firebase Hosting Configuration

**File**: `firebase.json`

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

**Security Considerations**:
- ✅ SPA rewrite rule configured (prevents 404 on client routes)
- ⚠️ No explicit security headers configured (add headers in `firebase.json`):

```json
{
  "hosting": {
    "headers": [
      {
        "source": "/**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "SAMEORIGIN"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          },
          {
            "key": "Strict-Transport-Security",
            "value": "max-age=31536000; includeSubDomains"
          }
        ]
      }
    ]
  }
}
```

---

## 7. Common Vulnerabilities & Mitigations

### 7.1 Cross-Site Scripting (XSS)

**Risk**: User-supplied text (comments, descriptions) rendered in UI.

**Current Mitigation**:
- ✅ React auto-escapes by default
- ✅ Using `textContent`-based rendering

**Recommendation**: 
- Validate all user input on backend
- Consider sanitizing library (`DOMPurify`) if rendering rich HTML is needed
- Content Security Policy header in Firebase Hosting config

### 7.2 Cross-Site Request Forgery (CSRF)

**Risk**: Malicious sites could trigger actions on behalf of users.

**Current Mitigation**:
- ✅ Firebase Auth uses HTTPS-only tokens
- ✅ Callable functions validate `request.auth`
- ✅ Same-origin policy enforced by browsers

**Recommendation**: Add explicit CSRF token validation for critical operations if moving to REST APIs.

### 7.3 Privilege Escalation

**Risk**: Users can claim admin role; unauthorized operations on issues.

**Current Severity**: 🔴 **HIGH**

**Mitigations Implemented**:
- ⚠️ Client-side role claim in MVP (not secure)

**Required Fixes**:
- Use Firebase Custom Claims (set server-side only)
- Restrict `adminDashboard` route to users with `admin` claim
- Enforce Firestore rules for admin-only operations

### 7.4 SQL Injection / NoSQL Injection

**Risk**: Firestore query parameters could be manipulated.

**Current Mitigation**:
- ✅ Firestore SDKs use parameterized queries
- ✅ No raw query strings constructed
- ⚠️ Firestore rules don't prevent collectionGroup queries

**Recommendation**: Limit Firestore security rules for `collectionGroup('issues')` queries.

### 7.5 Insecure Deserialization

**Risk**: Parsing untrusted JSON from AI responses.

**Current Mitigation**:
- ✅ Zod schema validation in `analyzeIssue` (line 76)

**Recommendation**: Ensure schema validation is comprehensive; don't trust AI output.

### 7.6 Denial of Service (DoS)

**Risk**: Large image uploads, excessive Cloud Function calls.

**Current Mitigations**:
- ✅ 10MB file size limit (storageService.ts, line 16)
- ✅ 30-second timeout on analyzeIssue function
- ✅ Rate limiting via Firebase (comment throttle every 5 comments)

**Recommendations**:
- Add rate limiting on `createIssue` function (e.g., 5 issues per user per hour)
- Monitor Cloud Functions invocation costs in Google Cloud Console
- Add quota in Firebase Hosting

---

## 8. Incident Response & Vulnerability Disclosure

### 8.1 Reporting Security Issues

If you discover a security vulnerability, please **DO NOT** open a public GitHub issue.

Instead, **contact** the project maintainers:
- **Repository**: https://github.com/AdityaJaiswal-07/CivicPulse-AI
- **Subject**: `[SECURITY] Vulnerability in CivicPulse-AI`
- **Disclosure**: Please allow 90 days for a fix before public disclosure

### 8.2 Security Patch Timeline

1. **Days 1-3**: Triage and assess severity
2. **Days 4-14**: Develop and test fix
3. **Days 15-30**: Release patch and notify users
4. **Days 31-90**: Public disclosure (if applicable)

---

## 9. Security Checklist for Development

Before committing code:

- [ ] No hardcoded API keys or secrets
- [ ] All `.env` files in `.gitignore`
- [ ] Firestore rules updated if adding new collections
- [ ] Storage rules updated if adding new upload types
- [ ] Input validation on all user-supplied data
- [ ] Error messages don't leak sensitive details
- [ ] Firebase Cloud Functions authenticated
- [ ] Dependencies checked with `npm audit`
- [ ] TypeScript strict mode enabled
- [ ] No console.log statements with sensitive data

---

## 10. Security Roadmap

### Immediate (Week 1)
- [ ] Fix role assignment via Firebase Custom Claims
- [ ] Update Firestore security rules to enforce ownership
- [ ] Add input validation schema to issue service
- [ ] Review and update Cloud Function error handling

### Short-term (Month 1)
- [ ] Implement EXIF stripping for uploaded images
- [ ] Add rate limiting for issue creation
- [ ] Set up automated security scanning (`npm audit` in CI/CD)
- [ ] Add security headers to Firebase Hosting config
- [ ] Implement audit logging for admin actions

### Medium-term (Quarter 1)
- [ ] Implement end-to-end encryption for sensitive issue data
- [ ] Add two-factor authentication for admin accounts
- [ ] Penetration testing for hosted application
- [ ] Implement Web Application Firewall (WAF) rules
- [ ] Set up SIEM/security monitoring

### Long-term (Year 1)
- [ ] SOC 2 Type II compliance
- [ ] Regular security audits (quarterly)
- [ ] Incident response playbook and drills
- [ ] Security training for all contributors
- [ ] Data retention and deletion policies

---

## 11. References & Resources

- **Firebase Security Best Practices**: https://firebase.google.com/docs/rules
- **OWASP Top 10**: https://owasp.org/www-project-top-ten/
- **Google Cloud Security**: https://cloud.google.com/security
- **Gemini API Documentation**: https://ai.google.dev/
- **Zod Validation Library**: https://zod.dev/

---

## 12. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-06-30 | Initial security policy for MVP release |

---

**Last Updated**: June 30, 2026  
**Maintained By**: Aj-Niplex  
**License**: MIT
