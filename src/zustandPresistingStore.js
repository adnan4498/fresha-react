import { create } from "zustand";
import { persist } from "zustand/middleware";

const selectedServicesStore = create(
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
        
        setPresistedSelectedServices: (newService) => set({ presistedSelectedServices: newService}),
    }),
    {
      name: "count-storage",
      getStorage: () => localStorage,
    }
  )
);

export default selectedServicesStore;
