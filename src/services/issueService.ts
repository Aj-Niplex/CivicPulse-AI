import { collection, doc, setDoc, updateDoc, query, orderBy, onSnapshot, increment, where } from 'firebase/firestore';
import { db } from './firebase';
import { Issue, IssueStatus } from '../types';

export const issueService = {
  subscribeToIssues: (societyId: string, callback: (issues: Issue[]) => void) => {
    const q = query(collection(db, 'issues'), where('societyId', '==', societyId), orderBy('reportedAt', 'desc'));
    // Note: Real app would filter by societyId: where('societyId', '==', societyId)

    return onSnapshot(q, (snapshot) => {
      const issues = snapshot.docs.map(doc => doc.data() as Issue);
      callback(issues);
    },
      (error) => {
        console.error("Firestore Error:", error);
        callback([]);
      });
  },

  createIssue: async (issueData: Partial<Issue>): Promise<string> => {
    if (!issueData.societyId) {
      throw new Error("Society ID is required");
    }

    const issueRef = doc(collection(db, 'issues'));
    const issueId = issueRef.id;

    const newIssue: Issue = {
      issueId,
      societyId: issueData.societyId,
      reportedBy: issueData.reportedBy || 'unknown',
      reportedAt: new Date().toISOString(),
      status: 'Reported',
      imageUrl: issueData.imageUrl || '',
      description: issueData.description || '',
      locationLabel: issueData.locationLabel || 'Unknown Location',
      voteCount: 0,
      commentCount: 0
    };

    await setDoc(issueRef, newIssue);
    return issueId;
  },

  updateIssueStatus: async (issueId: string, status: IssueStatus, assignedCommittee?: string): Promise<void> => {
    const issueRef = doc(db, 'issues', issueId);
    const updates: any = { status };
    if (assignedCommittee) updates.assignedCommittee = assignedCommittee;
    await updateDoc(issueRef, updates);
  },

  voteIssue: async (issueId: string, userId: string): Promise<void> => {
    const issueRef = doc(db, 'issues', issueId);
    const voteRef = doc(db, 'issues', issueId, 'votes', userId);

    // Simplistic voting without transaction for hackathon MVP
    await setDoc(voteRef, { votedAt: new Date().toISOString() });
    await updateDoc(issueRef, { voteCount: increment(1) });
  }
};
