import React, { useState, useEffect } from 'react';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { useAuthStore } from '../store/useAuthStore';
import { Button } from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const Settings: React.FC = () => {
  const { user, updateUser } = useAuthStore();
  const [displayName, setDisplayName] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Populate fields from live auth store once user is available
  useEffect(() => {
    if (user?.displayName) {
      setDisplayName(user.displayName);
    }
  }, [user]);

  const handleSave = async () => {
    if (!auth.currentUser || !user) return;
    if (!displayName.trim()) {
      setError('Display name cannot be empty.');
      return;
    }
    setSaving(true);
    setError(null);
    try {
      // Update Firebase Auth profile
      await updateProfile(auth.currentUser, { displayName: displayName.trim() });
      // Update Firestore user document so the auth store stays consistent on next login
      await updateDoc(doc(db, 'users', user.userId), { displayName: displayName.trim() });
      updateUser({ displayName: displayName.trim() });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e: any) {
      setError(e.message || 'Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-1">Profile Information</h2>
        <p className="text-sm text-gray-600 mb-4">Changes are saved to Firebase and persist across sessions.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              disabled
              value={user?.email || ''}
              className="w-full max-w-md px-3 py-2 border border-gray-200 bg-gray-50 rounded-md text-gray-500 cursor-not-allowed"
            />
            <p className="text-xs text-gray-400 mt-1">Email cannot be changed (Google Sign-In).</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <input
              type="text"
              disabled
              value={user?.role || ''}
              className="w-full max-w-md px-3 py-2 border border-gray-200 bg-gray-50 rounded-md text-gray-500 cursor-not-allowed capitalize"
            />
          </div>
        </div>

        {error && (
          <p className="mt-3 text-sm text-red-600">{error}</p>
        )}

        <div className="mt-5 flex items-center gap-3">
          <Button onClick={handleSave} isLoading={saving} className="min-w-[120px]">
            {saved ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Saved!
              </span>
            ) : 'Save Changes'}
          </Button>
          {saved && (
            <span className="text-sm text-green-600 font-medium">Profile updated successfully.</span>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Society Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-900">Push Notifications</p>
              <p className="text-sm text-gray-500">Receive updates when your issue status changes.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
