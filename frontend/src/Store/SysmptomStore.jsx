import { create } from "zustand";

const useSymptomStore = create((set) => ({
  symptoms: [],
  otherSymptom: "",
  duration: "",
  onset: "",
  severity: "3",
  queryMsg: "",
  APIMsg: "",

  addSymptom: (sym) =>
    set((state) => {
      const exists = state.symptoms.includes(sym);
      return {
        symptoms: exists
          ? state.symptoms.filter((s) => s !== sym) // remove if already there
          : [...state.symptoms, sym], // add if not present
      };
    }),

  setOtherSymptom: (sym) =>
    set(() => ({
      otherSymptom: sym, // 👈 simply update the string
    })),

  setDuration: (tym) =>
    set(() => ({
      duration: tym, // 👈 simply update the string
    })),
  setOnset: (tym) =>
    set(() => ({
      onset: tym, // 👈 simply update the string
    })),

  setSeverity: (sev) =>
    set(() => ({
      severity: sev, // 👈 simply update the string
    })),

  setQueryMsg: (msg) =>
    set(() => ({
      queryMsg: msg,
    })),
  setAPIMsg: (msg) =>
    set(() => ({
      APIMsg: msg,
    })),
  reset: () =>
    set(() => ({
      symptoms: [],
      otherSymptom: "",
      duration: "",
      onset: "",
      severity: "",
    })),
}));

export default useSymptomStore;
