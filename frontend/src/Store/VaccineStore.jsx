import { create } from "zustand";
// import { v4 as uuidv4 } from "uuid"; // optional, if you want real UUIDs

const useVaccineStore = create((set) => ({
  myVaccines: [],

  // Actions
  addVaccine: ({ vaccineName, description, type, dateAdministered, userId }) =>
    set((state) => {
      const now = new Date().toISOString();
      const newVaccine = {
        id: Date.now(), // or uuidv4()
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
