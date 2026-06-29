import React, { useEffect } from 'react';
import { useIssueStore } from '../store/useIssueStore';
import { useAuthStore } from '../store/useAuthStore';
import { useNotificationStore } from '../store/useNotificationStore';
import { IssueCard } from '../components/issues/IssueCard';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Spinner } from '../components/ui/Loading';

export const ResidentDashboard: React.FC = () => {
  const { issues, loading, subscribeToIssues } = useIssueStore();
  const { user } = useAuthStore();
  const syncFromIssues = useNotificationStore(s => s.syncFromIssues);

  useEffect(() => {
    if (user?.societyId) {
      const unsubscribe = subscribeToIssues(user.societyId);
      return () => unsubscribe();
    }
  }, [subscribeToIssues, user?.societyId]);

  useEffect(() => {
    if (user && issues.length > 0) {
      syncFromIssues(issues, user.userId);
    }
  }, [issues, user, syncFromIssues]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Community Feed</h1>
          <p className="mt-1 text-sm text-gray-500">Recent issues reported in your society.</p>
        </div>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <Spinner className="w-8 h-8" />
        </div>
      ) : issues.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No issues</h3>
          <p className="mt-1 text-sm text-gray-500">Your community is looking great!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {issues.map((issue) => (
            <IssueCard key={issue.issueId} issue={issue} />
          ))}
        </div>
      )}

      <Link
        to="/report"
        className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700"
      >
        <Plus className="h-6 w-6" />
      </Link>
    </div>
  );
};
