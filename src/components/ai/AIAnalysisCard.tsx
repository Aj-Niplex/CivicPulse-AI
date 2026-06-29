import React from 'react';
import { AIAnalysis } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Sparkles, AlertTriangle, ShieldCheck, ChevronRight, Activity } from 'lucide-react';
import { Spinner } from '../ui/Loading';

interface AIAnalysisCardProps {
  analysis?: AIAnalysis;
  isLoading?: boolean;
}

export const AIAnalysisCard: React.FC<AIAnalysisCardProps> = ({ analysis, isLoading }) => {
  if (analysis?.analysisStatus === 'failed') {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6 text-center space-y-2">
          <AlertTriangle className="w-8 h-8 text-red-500 mx-auto" />
          <h3 className="text-lg font-semibold text-red-900">AI Analysis Failed</h3>
          <p className="text-sm text-red-600">Unable to analyze this issue. Please try reporting again.</p>
        </CardContent>
      </Card>
    );
  }

  if (isLoading || !analysis || analysis.analysisStatus === 'pending' || analysis.analysisStatus === 'processing') {
    return (
      <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles className="w-24 h-24 text-primary" />
        </div>
        <CardContent className="p-8 flex flex-col items-center justify-center text-center space-y-4">
          <Spinner className="w-8 h-8" />
          <div>
            <h3 className="text-lg font-medium text-gray-900">Google Gemini is analyzing the issue...</h3>
            <p className="text-sm text-gray-500 mt-1">Extracting issue type, severity, and action plan.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const isCritical = analysis.severity === 'Critical';

  return (
    <Card className="bg-gradient-to-br from-indigo-50/50 to-white border-indigo-100 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide uppercase">AI Resolution Engine</span>
          </div>
          <Badge variant={isCritical ? 'danger' : analysis.severity === 'High' ? 'warning' : 'info'}>
            {analysis.severity} Severity
          </Badge>
        </div>
        <CardTitle className="text-2xl mt-4">{analysis.issueLabel}</CardTitle>
        <div className="flex items-center gap-4 text-sm mt-2 text-gray-600">
          <span className="flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> {analysis.issueType}</span>
          <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> {analysis.confidence}% Confidence</span>
          <span className="flex items-center gap-1"><Activity className="w-4 h-4" /> Priority: {analysis.priority}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {analysis.temporaryActions.length > 0 && (
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <h4 className="font-semibold text-orange-800 text-sm mb-2 flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" /> Immediate Actions Required
            </h4>
            <ul className="space-y-2">
              {analysis.temporaryActions.map((action, i) => (
                <li key={i} className="text-sm text-orange-900 flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {action}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-3 uppercase tracking-wide">Recommended Action Plan</h4>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {analysis.actionPlan.map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-indigo-100 text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900 text-sm">{step.responsibility}</span>
                    <span className="text-xs text-gray-500 font-medium">{step.timeline}</span>
                  </div>
                  <p className="text-sm text-gray-600">{step.step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Suggested Committee</h4>
            <p className="font-semibold text-gray-900">{analysis.suggestedCommittee}</p>
          </div>
          <div className="text-left sm:text-right">
            <h4 className="text-sm font-medium text-gray-500">Next Step for RWA</h4>
            <p className="font-medium text-primary text-sm flex items-center sm:justify-end gap-1">
              {analysis.nextSteps} <ChevronRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
