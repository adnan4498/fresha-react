import { create } from "zustand";
import { persist } from "zustand/middleware";

export const selectedServicesStore = create(
  persist(
    (set) => ({
      presistedSelectedServices: [],
      setPresistedSelectedServices: (newService) =>
        set({ presistedSelectedServices: newService }),
    }),
    {
      name: "selected-services-storage",
      getStorage: () => localStorage,
    }
  )
);

export const salonDataZustandStore = create(
  persist(
    (set) => ({
      salonDataZustand: [],
      setSalonDataZustand: (newData) => set({ salonDataZustand: newData }),
    }),
    {
      name: "salon-data-storage",
      getStorage: () => localStorage,
    }
  )
);
