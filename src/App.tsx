import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Login } from './pages/Login';
import { ResidentDashboard } from './pages/ResidentDashboard';
import { ReportIssue } from './pages/ReportIssue';
import { IssueDetails } from './pages/IssueDetails';
import { AdminDashboard } from './pages/AdminDashboard';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';
import { useAuthStore } from './store/useAuthStore';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (<div className="flex items-center justify-center min-h-screen">
      Loading...
    </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

  return <>{children}</>;
};

function App() {
  const { user, initAuthListener } = useAuthStore();

  useEffect(() => {
    const unsubscribe = initAuthListener();
    return () => unsubscribe();
  }, [initAuthListener]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-surface text-text-primary">
        {user && <Navbar />}
        <main>
          <Routes>
            <Route path="/login" element={user ? (<Navigate to={user.role === "admin" ? "/admin" : "/"} replace />) : (<Login />)} />

            {/* Resident Routes */}
            <Route path="/" element={
              <ProtectedRoute allowedRoles={['resident', 'admin']}>
                {user?.role === 'admin' ? <Navigate to="/admin" replace /> : <ResidentDashboard />}
              </ProtectedRoute>
            } />
            <Route path="/report" element={
              <ProtectedRoute allowedRoles={['resident']}>
                <ReportIssue />
              </ProtectedRoute>
            } />
            <Route path="/issue/:id" element={
              <ProtectedRoute>
                <IssueDetails />
              </ProtectedRoute>
            } />

            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />

            {/* Shared Routes */}
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
