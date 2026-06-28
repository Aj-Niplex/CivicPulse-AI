import { create } from 'zustand';
import { Issue, IssueStatus } from '../types';
import { issueService } from '../services/issueService';

interface IssueState {
  issues: Issue[];
  loading: boolean;
  subscribeToIssues: (societyId: string) => () => void;
  updateIssueStatus: (issueId: string, status: IssueStatus) => Promise<void>;
  voteIssue: (issueId: string, userId: string) => Promise<void>;
}

export const useIssueStore = create<IssueState>((set) => ({
  issues: [],
  loading: false,
  subscribeToIssues: (societyId: string) => {
    set({ loading: true });
    return issueService.subscribeToIssues(societyId, (issues) => {
      set({ issues, loading: false });
    });
  },
  updateIssueStatus: async (issueId, status) => {
    await issueService.updateIssueStatus(issueId, status);
  },
  voteIssue: async (issueId, userId) => {
    await issueService.voteIssue(issueId, userId);
  }
}));
