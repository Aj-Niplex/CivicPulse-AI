import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useIssueStore } from '../store/useIssueStore';
import { useAuthStore } from '../store/useAuthStore';
import { issueService } from '../services/issueService';
import { AIAnalysisCard } from '../components/ai/AIAnalysisCard';
import { StatusTimeline } from '../components/issues/StatusTimeline';
import { CommentsPanel } from '../components/issues/CommentsPanel';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MapPin, Clock, ArrowLeft, ThumbsUp, MessageSquare, CheckCircle } from 'lucide-react';
import { Spinner } from '../components/ui/Loading';
import { Issue, IssueStatus } from '../types';

export const IssueDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { voteIssue, updateIssueStatus } = useIssueStore();
  const { user } = useAuthStore();
  const [issue, setIssue] = useState<Issue | undefined>(undefined);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteError, setVoteError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isAcceptingPlan, setIsAcceptingPlan] = useState(false);

  useEffect(() => {
    if (!id) return;

    const unsubscribe = issueService.subscribeToIssue(id, (data) => {
      if (data) {
        setIssue(data);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    });

    return () => unsubscribe();
  }, [id]);

  useEffect(() => {
    if (!id || !user) return;
    issueService.hasVoted(id, user.userId).then(setHasVoted);
  }, [id, user, issue?.voteCount]);

  const handleVote = async () => {
    if (!issue || !user || isVoting || hasVoted) return;
    setIsVoting(true);
    setVoteError(null);
    try {
      await voteIssue(issue.issueId, user.userId);
      setHasVoted(true);
    } catch (err: unknown) {
      setVoteError(err instanceof Error ? err.message : 'Vote failed');
    } finally {
      setIsVoting(false);
    }
  };

  const handleAcceptAIPlan = async () => {
    if (!issue || !user) return;
    setIsAcceptingPlan(true);
    try {
      const assignedCommittee = issue.aiAnalysis?.suggestedCommittee || 'Maintenance';
      await issueService.acceptAIPlan(issue.issueId, user.userId, assignedCommittee);
    } catch (err) {
      console.error('Failed to accept AI plan:', err);
    } finally {
      setIsAcceptingPlan(false);
    }
  };

  if (notFound) {
    return (
      <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg font-medium">Issue not found.</p>
        <Link to="/" className="text-primary text-sm hover:underline">← Back to Feed</Link>
      </div>
    );
  }

  if (!issue) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  const analysisLoading =
    !issue.aiAnalysis ||
    issue.aiAnalysis.analysisStatus === 'processing' ||
    issue.aiAnalysis.analysisStatus === 'pending';

  const homePath = user?.role === 'admin' ? '/admin' : '/';
  const statusOptions: IssueStatus[] = ['Reported', 'Verified', 'Assigned', 'In Progress', 'Resolved', 'Rejected', 'Closed'];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 pb-20">
      <Link to={homePath} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6">
        <ArrowLeft className="mr-1 w-4 h-4" /> Back to Feed
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img src={issue.imageUrl} alt="Issue" className="w-full h-auto object-cover max-h-[500px]" />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Issue Tracking</h2>
              <StatusTimeline currentStatus={issue.status} />
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{issue.description || 'No additional description provided.'}</p>
            </div>

            <div className="border-t border-gray-100 pt-6 flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={handleVote}
                  isLoading={isVoting}
                  disabled={hasVoted}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="w-4 h-4" />
                  {hasVoted ? 'Upvoted' : 'Upvote'} ({issue.voteCount || 0})
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowComments(true)}
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Comments ({issue.commentCount || 0})
                </Button>
              </div>
              {voteError && <p className="text-sm text-red-600">{voteError}</p>}
            </div>
          </div>

          {issue.feedbackSummary && (
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <h3 className="font-semibold text-indigo-900 mb-2">Community Feedback Summary</h3>
              <p className="text-indigo-800 text-sm">{issue.feedbackSummary}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <AIAnalysisCard analysis={issue.aiAnalysis} isLoading={analysisLoading} />

          {user?.role === 'admin' && issue.aiAnalysis?.analysisStatus === 'completed' && issue.status === 'Reported' && !issue.acceptedAIPlan && (
            <Button
              onClick={handleAcceptAIPlan}
              disabled={isAcceptingPlan}
              className="w-full"
            >
              {isAcceptingPlan ? 'Accepting...' : 'Accept AI Plan'}
            </Button>
          )}

          {issue.acceptedAIPlan && (
            <div className="flex items-center justify-center p-3 bg-green-50 border border-green-200 rounded-lg">
              <span className="text-green-700 font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> AI Plan Accepted
              </span>
            </div>
          )}

          <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 space-y-4">
            <h3 className="font-semibold text-gray-900">Details</h3>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
              <span>{issue.locationLabel || 'Location not specified'}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Clock className="w-5 h-5 text-gray-400 shrink-0" />
              <span>Reported on {new Date(issue.reportedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Badge>{issue.status}</Badge>
            </div>
            {user?.role === 'admin' && (
              <div className="pt-2 border-t border-gray-200">
                <label className="block text-xs font-medium text-gray-500 mb-1">Update Status</label>
                <select
                  value={issue.status}
                  onChange={(e) => updateIssueStatus(issue.issueId, e.target.value as IssueStatus, issue.assignedCommittee)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-primary"
                >
                  {statusOptions.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {showComments && id && (
        <CommentsPanel issueId={id} onClose={() => setShowComments(false)} />
      )}
    </div>
  );
};
