import { create } from 'zustand';
import { User } from '../types';
import { authService } from '../services/authService';

interface AuthState {
  user: User | null;
  loading: boolean;
  loginAsResident: () => Promise<void>;
  loginAsAdmin: () => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (updates: Partial<User>) => void;
  initAuthListener: () => () => void;
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
      throw e;
    }
  },
  loginAsAdmin: async () => {
    set({ loading: true });
    try {
      const user = await authService.signIn('admin');
      set({ user, loading: false });
    } catch (e) {
      set({ loading: false });
      throw e;
    }
  },
  logout: async () => {
    set({ loading: true });
    await authService.logout();
    set({ user: null, loading: false });
  },
  updateUser: (updates) => {
    set(state => ({
      user: state.user ? { ...state.user, ...updates } : null,
    }));
  },
  initAuthListener: () => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      set({ user, loading: false });
    });
    return unsubscribe;
  }
}));
