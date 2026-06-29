import React, { useEffect, useState } from 'react';
import { Comment } from '../../types';
import { commentService } from '../../services/commentService';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';
import { Spinner } from '../ui/Loading';

interface CommentsPanelProps {
  issueId: string;
  onClose: () => void;
}

export const CommentsPanel: React.FC<CommentsPanelProps> = ({ issueId, onClose }) => {
  const { user } = useAuthStore();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = commentService.subscribeToComments(issueId, (data) => {
      setComments(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [issueId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("========== COMMENT DEBUG ==========");
    console.log("User:", user);
    console.log("Issue ID:", issueId);
    console.log("Text:", text);
    if (!user || !text.trim()) {
      console.log("Comment blocked because user/text missing");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      await commentService.addComment(issueId, user.userId, user.displayName, text);
      console.log("Comment Added Successfully");
      setText('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to post comment');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-xl max-h-[80vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Community Comments</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
          {loading ? (
            <div className="flex justify-center py-8"><Spinner className="w-6 h-6" /></div>
          ) : comments.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-8">No comments yet. Be the first!</p>
          ) : (
            comments.map(c => (
              <div key={c.commentId} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">{c.displayName}</span>
                  <span className="text-xs text-gray-400">{new Date(c.createdAt).toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-700">{c.text}</p>
              </div>
            ))
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 space-y-2">
          {error && <p className="text-sm text-red-600">{error}</p>}
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Share your thoughts..."
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
          />
          <Button type="submit" isLoading={submitting} disabled={!text.trim()} className="w-full">
            Post Comment
          </Button>
        </form>
      </div>
    </div>
  );
};
