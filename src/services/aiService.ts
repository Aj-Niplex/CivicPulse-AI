import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';
import { AIAnalysis } from '../types';

export const aiService = {
  analyzeIssue: async (issueId: string, imageBase64: string, description?: string): Promise<AIAnalysis> => {
    const analyzeCall = httpsCallable(functions, 'analyzeIssue');
    const result = await analyzeCall({ issueId, imageBase64, description });
    return (result.data as any).analysis;
  }
};
