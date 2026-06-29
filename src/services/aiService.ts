import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';
import { AIAnalysis } from '../types';

export const aiService = {
  analyzeIssue: async (issueId: string, imageBase64: string, description?: string, mimeType = 'image/jpeg'): Promise<AIAnalysis> => {
    const analyzeCall = httpsCallable<
      { issueId: string; imageBase64: string; description?: string; mimeType?: string },
      { success: boolean; analysis: AIAnalysis }
    >(functions, 'analyzeIssue');
    const result = await analyzeCall({ issueId, imageBase64, description, mimeType });
    return result.data.analysis;
  }
};