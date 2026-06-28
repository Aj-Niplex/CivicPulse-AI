import React from 'react';
import { IssueStatus } from '../../types';
import { CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export const StatusTimeline: React.FC<{ currentStatus: IssueStatus }> = ({ currentStatus }) => {
  const statuses: IssueStatus[] = ['Reported', 'Verified', 'Assigned', 'In Progress', 'Resolved'];
  const currentIndex = statuses.indexOf(currentStatus);
  const actualIndex = currentIndex === -1 && currentStatus === 'Closed' ? statuses.length - 1 : currentIndex;

  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full z-0"></div>
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-500"
          style={{ width: `${(Math.max(0, actualIndex) / (statuses.length - 1)) * 100}%` }}
        ></div>

        {statuses.map((status, index) => {
          const isCompleted = index <= actualIndex;
          const isCurrent = index === actualIndex;

          return (
            <div key={status} className="relative z-10 flex flex-col items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                isCompleted ? "bg-primary text-white ring-4 ring-blue-50" : "bg-white border-2 border-gray-300 text-gray-400"
              )}>
                {isCompleted ? <CheckCircle className="w-5 h-5" /> : <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />}
              </div>
              <span className={cn(
                "text-xs font-medium absolute -bottom-6 w-20 text-center",
                isCurrent ? "text-primary font-semibold" : isCompleted ? "text-gray-900" : "text-gray-400"
              )}>
                {status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
