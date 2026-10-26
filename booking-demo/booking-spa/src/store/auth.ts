import { create } from "zustand";

type AuthState = {
  user: null | { name: string };
  login: (name: string) => void;
  logout: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  login: (name) => set({ user: { name } }),
  logout: () => set({ user: null }),
}));