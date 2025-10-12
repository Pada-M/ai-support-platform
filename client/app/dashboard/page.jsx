'use client';

import AuthGuard from '../components/AuthGuard';
import { useAuth } from '../../context/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <AuthGuard>
      <main className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button
            onClick={logout}
            className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Logout
          </button>
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-sm text-gray-600">You are logged in as:</p>
          <pre className="text-xs bg-gray-100 p-3 rounded-xl overflow-x-auto">
{JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </main>
    </AuthGuard>
  );
}
