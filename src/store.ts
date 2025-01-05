import { create } from "zustand";

type Store = {
  user: string;
  userId: string;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
};

const useStore = create<Store>()((set) => ({
  user: "",
  userId: "",
  loggedIn: false,
  setLoggedIn: (val) => set({ loggedIn: val }),
}));

export default useStore;
