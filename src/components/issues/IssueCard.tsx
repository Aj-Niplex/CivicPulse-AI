import React from 'react';
import { Issue } from '../../types';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const getSeverityBadge = (severity?: string) => {
  switch (severity) {
    case 'Critical': return 'danger';
    case 'High': return 'warning';
    case 'Medium': return 'info';
    default: return 'default';
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Resolved': return 'success';
    case 'In Progress': return 'info';
    case 'Reported': return 'default';
    default: return 'default';
  }
};

export const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
  const timeAgo = new Date(issue.reportedAt).toLocaleDateString(); // Simplified

  return (
    <Link to={`/issue/${issue.issueId}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md hover:border-gray-300">
        <div className="flex flex-col sm:flex-row">
          <div className="h-48 w-full sm:h-auto sm:w-48 shrink-0">
            <img src={issue.imageUrl} alt="Issue" className="h-full w-full object-cover" />
          </div>
          <CardContent className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between mb-2">
              <div className="flex gap-2">
                <Badge variant={getStatusBadge(issue.status)}>{issue.status}</Badge>
                {issue.aiAnalysis && (
                  <Badge variant={getSeverityBadge(issue.aiAnalysis.severity)}>{issue.aiAnalysis.severity}</Badge>
                )}
              </div>
              <span className="flex items-center text-xs text-gray-500">
                <Clock className="mr-1 h-3 w-3" /> {timeAgo}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
              {issue.aiAnalysis?.issueLabel || 'Pending AI Analysis...'}
            </h3>
            
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {issue.description || issue.aiAnalysis?.issueType || 'No description provided.'}
            </p>

            <div className="mt-auto flex items-center justify-between text-sm text-gray-500 border-t pt-3">
              <span className="flex items-center">
                <MapPin className="mr-1 h-4 w-4 text-gray-400" />
                {issue.locationLabel}
              </span>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
