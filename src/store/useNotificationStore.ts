import { create } from 'zustand';
import { AppNotification, Issue, IssueStatus } from '../types';

const STORAGE_KEY = 'civicpulse-read-notifications';

function loadReadIds(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? JSON.parse(raw) as string[] : []);
  } catch {
    return new Set();
  }
}

function saveReadIds(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

function statusMessage(issue: Issue, status: IssueStatus): string {
  const label = issue.aiAnalysis?.issueLabel || `Issue #${issue.issueId.slice(-6)}`;
  
  if (issue.acceptedAIPlan && status === 'Verified') {
    const committee = issue.assignedCommittee || issue.aiAnalysis?.suggestedCommittee || 'Maintenance Committee';
    return `${committee} has accepted the AI Resolution Plan for ${label}.`;
  }

  return `"${label}" status updated to ${status}`;
}

interface NotificationState {
  notifications: AppNotification[];
  syncFromIssues: (issues: Issue[], userId: string) => void;
  markAllRead: () => void;
  unreadCount: () => number;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: [],

  syncFromIssues: (issues, userId) => {
    const readIds = loadReadIds();
    const relevant = issues.filter(i => i.reportedBy === userId && i.status !== 'Reported');
    const notifications: AppNotification[] = relevant.map(issue => ({
      id: `${issue.issueId}-${issue.status}`,
      issueId: issue.issueId,
      message: statusMessage(issue, issue.status),
      createdAt: issue.reportedAt,
      read: readIds.has(`${issue.issueId}-${issue.status}`),
    }));
    set({ notifications: notifications.sort((a, b) => b.createdAt.localeCompare(a.createdAt)) });
  },

  markAllRead: () => {
    const readIds = loadReadIds();
    get().notifications.forEach(n => readIds.add(n.id));
    saveReadIds(readIds);
    set(state => ({
      notifications: state.notifications.map(n => ({ ...n, read: true })),
    }));
  },

  unreadCount: () => get().notifications.filter(n => !n.read).length,
}));
