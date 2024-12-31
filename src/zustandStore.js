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
      setSalonDataZustand: (newData) => set({ salonDataZustand: newData }), // please store array in this
    }),
    {
      name: "salon-data-storage",
      getStorage: () => localStorage,
    }
  )
);

export const zustandDummyStore = create(
  persist(
    (set) => ({
      zustandDummyData: [7],
      setZustandDummyData: (newData) => set((oldState) => ([...oldState.zustandDummyData, newData ])), // please store array in this
      // setZustandDummyData: (newData) => set((oldState) => ({zustandDummyData : newData})), // please store array in this
      // setZustandDummyData: (newData) => set(newData), // please store array in this
    }),
    {
      name: "zustand-dummy-data-storage",
      getStorage: () => localStorage,
    }
  )
);

