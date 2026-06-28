import { create } from 'zustand';
import { User } from '../types';
import { authService } from '../services/authService';

interface AuthState {
  user: User | null;
  loading: boolean;
  loginAsResident: () => Promise<void>;
  loginAsAdmin: () => Promise<void>;
  logout: () => Promise<void>;
  initAuthListener: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  loginAsResident: async () => {
    set({ loading: true });
    try {
      const user = await authService.signIn('resident');
      set({ user, loading: false });
    } catch (e) {
      set({ loading: false });
    }
  },
  loginAsAdmin: async () => {
    set({ loading: true });
    try {
      const user = await authService.signIn('admin');
      set({ user, loading: false });
    } catch (e) {
      set({ loading: false });
    }
  },
  logout: async () => {
    set({ loading: true });
    await authService.logout();
    set({ user: null, loading: false });
  },
  initAuthListener: () => {
    authService.onAuthStateChange((user) => {
      set({ user, loading: false });

    });
  }
}));
