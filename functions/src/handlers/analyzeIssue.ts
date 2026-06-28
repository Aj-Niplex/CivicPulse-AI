import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import { db } from '../config/firebase';
import { GoogleGenAI } from '@google/genai';
import { aiAnalysisSchema } from '../schema/aiSchema';

const GEMINI_API_KEY = defineSecret('GEMINI_API_KEY');

export const analyzeIssue = onCall({ secrets: [GEMINI_API_KEY], timeoutSeconds: 30 }, async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be logged in.');
  }

  const { imageBase64, issueId, description } = request.data;
  if (!imageBase64 || !issueId) {
    throw new HttpsError('invalid-argument', 'Missing imageBase64 or issueId');
  }

  try {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY.value() });
    const prompt = `You are a civic infrastructure specialist AI assistant for residential apartment societies in India. 
    Analyze this image from a residential apartment society. 
    Resident description (if any): ${description || 'None'}.
    
    Identify the civic issue and respond ONLY with valid JSON.
    Provide an actionable resolution plan for the RWA committee.
    
    Required JSON schema structure (no markdown, just JSON):
    {
      "issueType": "Plumbing|Electrical|Security|Sanitation|Structural|Common Area|Other",
      "issueLabel": "<specific descriptive label>",
      "severity": "Critical|High|Medium|Low",
      "priority": "Urgent|High|Normal|Low",
      "confidence": <0-100 integer>,
      "suggestedCommittee": "Maintenance|Security|Sanitation|Works|General Administration",
      "temporaryActions": ["<action 1>", "<action 2>"],
      "actionPlan": [{"step": "<step>", "timeline": "<time>", "responsibility": "<who>"}],
      "estimatedCost": "<cost range or N/A>",
      "estimatedResolutionTime": "<time>",
      "reasoning": "<why this severity and plan>",
      "nextSteps": "<single most important action for RWA head>"
    }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            { inlineData: { mimeType: 'image/jpeg', data: imageBase64 } }
          ]
        }
      ],
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from Gemini");

    let parsedJson;
    try {
      parsedJson = JSON.parse(text);
    } catch (e) {
      throw new HttpsError('internal', 'AI returned invalid JSON formatting.');
    }

    // Validate with Zod
    const validatedData = aiAnalysisSchema.parse(parsedJson);

    // Write to Firestore inside the function to ensure integrity
    await db.collection('issues').doc(issueId).update({
      aiAnalysis: { ...validatedData, analysisStatus: 'completed' },
      status: 'Reported'
    });

    return { success: true, analysis: validatedData };
  } catch (error: any) {
    console.error('AI Analysis Error:', error);
    await db.collection('issues').doc(issueId).update({
      'aiAnalysis.analysisStatus': 'failed'
    });
    throw new HttpsError('internal', error.message || 'AI analysis failed');
  }
});
