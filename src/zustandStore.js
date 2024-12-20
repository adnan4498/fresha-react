import { create } from "zustand";
import { persist } from "zustand/middleware";

export const selectedServicesStore = create(
  persist(
    (set) => ({
      presistedSelectedServices: [],
      // setPresistedSelectedServices: (newService) =>
      //   set((oldState) => ({
      //     presistedSelectedServices: [
      //       ...oldState.presistedSelectedServices,
      //       newService,
      //     ],
      //   })),

      // setPresistedSelectedServices: (newService) =>
      //   set((oldState) => ({
      //     presistedSelectedServices: [
      //       newService,
      //     ],
      //   })),

      setPresistedSelectedServices: (newService) =>
        set({ presistedSelectedServices: newService }),
    }),
    {
      name: "selected-services-storage",
      getStorage: () => localStorage,
    }
  )
);

export const salonDataZustandStore = create((set) => ({
  salonDataZustand: [],
  setSalonDataZustand: (newData) => set({ salonDataZustand: newData }),
}));

// export default {selectedServicesStore , salonDataZustandStore};
