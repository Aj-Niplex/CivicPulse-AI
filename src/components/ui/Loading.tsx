import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export const Spinner: React.FC<{ className?: string }> = ({ className }) => {
  return <Loader2 className={cn("animate-spin text-primary", className)} />;
};

export const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={cn("animate-pulse rounded-md bg-gray-200", className)} {...props} />;
};
