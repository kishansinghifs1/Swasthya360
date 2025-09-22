import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (userData) => set({ user: userData }),
      setToken: (token) => set({ token }),
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: "user-storage", // key in localStorage
    }
  )
);

export default useUserStore;
