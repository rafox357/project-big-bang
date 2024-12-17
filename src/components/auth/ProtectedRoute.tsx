import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AuthForm } from './AuthForm';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  // During SSR or initial load, show a minimal loading state
  if (typeof window === 'undefined' || loading) {
    return null;
  }

  if (!user) {
    return <AuthForm />;
  }

  return <>{children}</>;
}
