import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { JWT_TOKEN_KEY } from '@/utils/constants/localStorageKeys';

interface UserState {
  token: string | null;
  user: AuthUser | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
}

/**
 * Creates a Zustand store for managing user authentication state,
 * persisting the token in localStorage under the specified JWT_TOKEN_KEY.
 */
export const useUserStore = create<UserState>()(
  // Use the persist middleware to persist state in localStorage
  persist(
    set => ({
      user: null,
      token: null,
      setUser: user => set({ user }),
      setToken: token => set({ token }),
    }),
    {
      // Key used to store the state in localStorage
      name: JWT_TOKEN_KEY,
      // Storage mechanism for persisting state
      storage: createJSONStorage(() => localStorage),
      // Partialize function to persist only the 'token' field in localStorage
      partialize: state => ({ token: state.token }),
    },
  ),
);
