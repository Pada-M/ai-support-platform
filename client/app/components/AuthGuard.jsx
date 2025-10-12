'use client';

import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }) {
  const { token, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !token) router.replace('/login');
  }, [loading, token, router]);

  if (loading) return <div className="p-6 text-sm">Loading...</div>;
  if (!token) return <div className="p-6 text-sm">Unauthorized</div>;

  return children;
}
