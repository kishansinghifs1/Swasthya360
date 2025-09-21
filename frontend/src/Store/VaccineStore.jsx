import { create } from "zustand";

const useVaccineStore = create((set) => ({
  myVaccines: [],

  // Actions
  setVaccines: (newVaccines) => set({ myVaccines: newVaccines }),
  addVaccine: (vaccine) =>
    set((state) => ({ myVaccines: [...state.myVaccines, vaccine] })),

  clearVaccines: () => set({ myVaccines: [] }),
}));

export default useVaccineStore;
