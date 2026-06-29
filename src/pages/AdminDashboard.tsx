import React, { useEffect } from 'react';
import { useIssueStore } from '../store/useIssueStore';
import { useAuthStore } from '../store/useAuthStore';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ShieldAlert, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Spinner } from '../components/ui/Loading';

export const AdminDashboard: React.FC = () => {
  const { issues, loading, subscribeToIssues, updateIssueStatus } = useIssueStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user?.societyId) {
      const unsubscribe = subscribeToIssues(user.societyId);
      return () => unsubscribe();
    }
  }, [subscribeToIssues, user?.societyId]);

  const needsReview = issues.filter(i => i.status === 'Reported');
  const critical = issues.filter(i => i.aiAnalysis?.severity === 'Critical' && i.status !== 'Resolved');
  const assigned = issues.filter(i => i.status === 'Assigned' || i.status === 'In Progress');
  const resolved = issues.filter(i => i.status === 'Resolved' || i.status === 'Closed');

  const handleAcceptPlan = (issueId: string, committee?: string) => {
    updateIssueStatus(issueId, 'Assigned', committee);
  };

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Society Command Center</h1>
        <p className="mt-1 text-sm text-gray-500">Manage community operations and track issue resolution.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 text-amber-600 mb-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold text-sm">Needs Review</span>
          </div>
          <span className="text-3xl font-bold">{needsReview.length}</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <ShieldAlert className="w-5 h-5" />
            <span className="font-semibold text-sm">Critical Issues</span>
          </div>
          <span className="text-3xl font-bold">{critical.length}</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold text-sm">Assigned</span>
          </div>
          <span className="text-3xl font-bold">{assigned.length}</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold text-sm">Resolved</span>
          </div>
          <span className="text-3xl font-bold">{resolved.length}</span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <h2 className="font-semibold text-gray-900">Issue Queue</h2>
        </div>
        <div className="overflow-x-auto">
          {issues.length === 0 ? (
            <p className="p-8 text-center text-sm text-gray-500">No issues reported yet.</p>
          ) : (
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3">ID / Date</th>
                  <th className="px-6 py-3">Issue Details</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">AI Resolution</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue.issueId} className="bg-white border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-mono text-xs text-gray-500">#{issue.issueId.slice(-6)}</div>
                      <div className="text-gray-900">{new Date(issue.reportedAt).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{issue.aiAnalysis?.issueLabel || 'Pending'}</div>
                      <div className="text-gray-500 text-xs mt-1">{issue.locationLabel}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={issue.status === 'Reported' ? 'default' : issue.status === 'Resolved' ? 'success' : 'info'}>
                        {issue.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      {issue.aiAnalysis?.analysisStatus === 'completed' ? (
                        <div className="flex flex-col gap-1">
                          <Badge variant={issue.aiAnalysis.severity === 'Critical' ? 'danger' : 'warning'}>{issue.aiAnalysis.severity}</Badge>
                          <span className="text-xs text-gray-500">{issue.aiAnalysis.suggestedCommittee}</span>
                        </div>
                      ) : issue.aiAnalysis?.analysisStatus === 'failed' ? (
                        <span className="text-red-500 text-xs">Analysis failed</span>
                      ) : (
                        <span className="text-gray-400 text-xs">Analyzing...</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link to={`/issue/${issue.issueId}`}>
                          <Button variant="outline" size="sm">Review</Button>
                        </Link>
                        {issue.status === 'Reported' && issue.aiAnalysis?.analysisStatus === 'completed' && (
                          <Button
                            size="sm"
                            onClick={() => handleAcceptPlan(issue.issueId, issue.aiAnalysis?.suggestedCommittee)}
                          >
                            Accept AI Plan
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
