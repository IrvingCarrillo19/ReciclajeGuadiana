import { create } from "zustand";

type Store = {
  user: string;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
};

const useStore = create<Store>()((set) => ({
  user: "",
  loggedIn: false,
  setLoggedIn: (val) => set({ loggedIn: val }),
}));

export default useStore;
