import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  token?: string;
}

interface UserStore {
  user: User | null;
  setUser: (userData: User) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));

export default useUserStore;