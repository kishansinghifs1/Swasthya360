import { create } from "zustand";
const useVaccineStore = create((set) => ({
  myVaccines: [],

  addVaccine: ({ vaccineName, description, type, dateAdministered, userId }) =>
    set((state) => {
      const now = new Date().toISOString();
      const newVaccine = {
        id: Date.now(),
        vaccineName,
        description,
        type,
        dateAdministered,
        userId: userId || "guest-user",
        createdAt: now,
        updatedAt: now,
      };
      return { myVaccines: [...state.myVaccines, newVaccine] };
    }),

  removeVaccine: (id) =>
    set((state) => ({
      myVaccines: state.myVaccines.filter((vac) => vac.id !== id),
    })),

  clearAllVaccines: () => set({ myVaccines: [] }),
}));

export default useVaccineStore;
