import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { JWT_TOKEN_KEY } from "@/utils/constants/localStorageKeys";

interface UserState {
  token: string | null;
  user: AuthUser | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
    }),
    {
      name: JWT_TOKEN_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token }),
    }
  )
);
