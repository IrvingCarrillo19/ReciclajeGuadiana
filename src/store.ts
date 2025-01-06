import { create } from "zustand";

type Store = {
  user: string;
  userId: string;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean, user: string, userId: string) => void;
};

const useStore = create<Store>()((set) => ({
  user: "",
  userId: "",
  loggedIn: false,
  setLoggedIn: (logged, user, userId) =>
    set({ loggedIn: logged, user, userId }),
}));

export default useStore;
