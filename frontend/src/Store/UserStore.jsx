import { create } from "zustand";

const useUserStore = create((set) => ({
  username: "",
  userId: "",
  email: "",
  password: "",

  // Add user function
  addUser: (user) =>
    set(() => ({
      username: user.username,
      userId: user.userId,
      email: user.email,
      password: user.password,
    })),

  // Remove user function (reset fields)
  removeUser: () =>
    set(() => ({
      username: "",
      userId: "",
      email: "",
      password: "",
    })),
}));

export default useUserStore;
