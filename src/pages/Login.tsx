import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Navigate } from 'react-router-dom';
import { Building, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Login: React.FC = () => {
  const { user, loginAsResident, loginAsAdmin, loading } = useAuthStore();
  const [error, setError] = useState<string | null>(null);

  if (user) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/"} replace />;
  }

  const handleResidentLogin = async () => {
    setError(null);
    try {
      await loginAsResident();
    } catch {
      setError('Sign-in failed. Please try again.');
    }
  };

  const handleAdminLogin = async () => {
    setError(null);
    try {
      await loginAsAdmin();
    } catch {
      setError('Sign-in failed. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-surface px-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-soft text-center border border-gray-100">
        <div>
          <Building className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900">
            CivicPulse AI
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Your AI Community Operations Assistant.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
          )}
          <Button
            onClick={handleResidentLogin}
            isLoading={loading}
            className="w-full h-12 text-base font-medium"
          >
            Sign in as Resident
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Admin Access</span>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={handleAdminLogin}
            isLoading={loading}
            className="w-full h-12 text-base font-medium flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-5 h-5 text-gray-500" />
            Sign in as Admin
          </Button>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};
