import { z } from 'zod';

export const aiAnalysisSchema = z.object({
  issueType: z.enum(['Plumbing', 'Electrical', 'Security', 'Sanitation', 'Structural', 'Common Area', 'Other']),
  issueLabel: z.string(),
  severity: z.enum(['Critical', 'High', 'Medium', 'Low']),
  priority: z.enum(['Urgent', 'High', 'Normal', 'Low']),
  confidence: z.number().min(0).max(100),
  suggestedCommittee: z.enum(['Maintenance', 'Security', 'Sanitation', 'Works', 'General Administration']),
  temporaryActions: z.array(z.string()).max(3),
  actionPlan: z.array(z.object({
    step: z.string(),
    timeline: z.string(),
    responsibility: z.string()
  })).max(5),
  estimatedCost: z.string().optional(),
  estimatedResolutionTime: z.string().optional(),
  reasoning: z.string(),
  nextSteps: z.string()
});

export type AIAnalysisResponse = z.infer<typeof aiAnalysisSchema>;
