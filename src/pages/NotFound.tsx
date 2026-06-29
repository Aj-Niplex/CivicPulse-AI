import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuthStore } from '../store/useAuthStore';

export const NotFound: React.FC = () => {
  const { user } = useAuthStore();
  const home = user?.role === 'admin' ? '/admin' : '/';

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <p className="text-lg font-medium text-gray-900">Page not found</p>
      <p className="text-sm text-gray-500">The page you are looking for does not exist.</p>
      <Link to={user ? home : '/login'}>
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};
