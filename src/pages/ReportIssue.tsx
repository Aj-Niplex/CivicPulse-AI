import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useIssueStore } from '../store/useIssueStore';
import { issueService } from '../services/issueService';
import { aiService } from '../services/aiService';
import { storageService } from '../services/storageService';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Camera, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { AIAnalysisCard } from '../components/ai/AIAnalysisCard';
import { AIAnalysis } from '../types';

export const ReportIssue: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiStatusMessage, setAiStatusMessage] = useState('');
  const [analysisResult, setAnalysisResult] = useState<AIAnalysis | null>(null);
  const [createdIssueId, setCreatedIssueId] = useState<string | null>(null);

  const navigate = useNavigate();
  const { user } = useAuthStore();
  useIssueStore();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setStep(2);
    }
  };

  const handleProcessAI = async () => {
    if (!imageFile || !user) return;
    setIsProcessing(true);
    setStep(3);

    try {
      setAiStatusMessage('Uploading...');
      const imageUrl = await storageService.uploadImage(imageFile, user.societyId, `temp-${Date.now()}`);

      setAiStatusMessage('Analyzing Image...');
      const newIssueId = await issueService.createIssue({
        societyId: user.societyId,
        reportedBy: user.userId,
        imageUrl,
        locationLabel: 'Auto-detected location',
      });
      setCreatedIssueId(newIssueId);

      // Simulate real-time progress while waiting for AI
      const statuses = ['Detecting Issue...', 'Estimating Severity...', 'Generating Resolution Plan...'];
      let i = 0;
      const interval = setInterval(() => {
        if (i < statuses.length) {
          setAiStatusMessage(statuses[i]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 2000);

      const base64 = await storageService.fileToBase64(imageFile);
      const analysis = await aiService.analyzeIssue(newIssueId, base64, '');

      clearInterval(interval);
      setAiStatusMessage('Done');
      setAnalysisResult(analysis);
    } catch (error) {
      console.error("Error processing AI:", error);
      setAiStatusMessage('Failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = () => {
    navigate(`/issue/${createdIssueId}`);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Report an Issue</h1>
        <p className="text-sm text-gray-500">Help keep your community safe and clean.</p>
      </div>

      {step === 1 && (
        <Card className="border-dashed border-2 border-gray-300">
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <div className="rounded-full bg-blue-50 p-4 mb-4">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Take a photo of the issue</h3>
            <p className="text-sm text-gray-500 mb-6 max-w-sm">
              Our AI will analyze the image to determine the severity and suggest a resolution plan.
            </p>

            <div className="flex gap-4 w-full max-w-xs">
              <label className="flex-1">
                <Button className="w-full pointer-events-none">
                  <ImageIcon className="w-4 h-4 mr-2" /> Upload Photo
                </Button>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && previewUrl && (
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-black">
            <img src={previewUrl} alt="Preview" className="w-full h-auto max-h-[60vh] object-contain" />
            <button
              onClick={() => { setStep(1); setImageFile(null); setPreviewUrl(null); }}
              className="absolute top-4 right-4 bg-white/90 text-gray-900 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm hover:bg-white"
            >
              Retake
            </button>
          </div>

          <Button onClick={handleProcessAI} className="w-full h-12 text-lg">
            Analyze Issue with AI <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {isProcessing ? (
            <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100 py-12">
              <CardContent className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <h3 className="text-xl font-semibold text-gray-900">{aiStatusMessage}</h3>
                <p className="text-sm text-gray-500">Please wait while Gemini processes the image.</p>
              </CardContent>
            </Card>
          ) : (
            <AIAnalysisCard analysis={analysisResult || undefined} isLoading={isProcessing} />
          )}

          {!isProcessing && analysisResult && (
            <Button onClick={handleSubmit} className="w-full h-14 text-lg">
              Submit to Society
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
