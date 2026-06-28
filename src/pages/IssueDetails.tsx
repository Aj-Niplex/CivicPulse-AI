import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useIssueStore } from '../store/useIssueStore';
import { useAuthStore } from '../store/useAuthStore';
import { AIAnalysisCard } from '../components/ai/AIAnalysisCard';
import { StatusTimeline } from '../components/issues/StatusTimeline';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MapPin, Clock, ArrowLeft, ThumbsUp, MessageSquare } from 'lucide-react';
import { Spinner } from '../components/ui/Loading';

export const IssueDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { issues, voteIssue } = useIssueStore();
  const { user } = useAuthStore();
  const [issue, setIssue] = useState(issues.find(i => i.issueId === id));
  const [isVoting, setIsVoting] = useState(false);

  useEffect(() => {
    setIssue(issues.find(i => i.issueId === id));
  }, [id, issues]);

  const handleVote = async () => {
    if (!issue || !user || isVoting) return;
    setIsVoting(true);
    await voteIssue(issue.issueId, user.userId);
    setIsVoting(false);
  };

  if (!issue) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 pb-20">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6">
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

            <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
              <Button variant="outline" onClick={handleVote} isLoading={isVoting} className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                Upvote ({issue.voteCount || 0})
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Comments ({issue.commentCount || 0})
              </Button>
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
          <AIAnalysisCard analysis={issue.aiAnalysis} isLoading={!issue.aiAnalysis} />

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
          </div>
        </div>
      </div>
    </div>
  );
};
