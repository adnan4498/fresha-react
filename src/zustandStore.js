import { create } from "zustand";
import { persist } from "zustand/middleware";

// export const salonDataZustandStore = create(
//   persist(
//     (set) => ({
//       salonDataZustand: {},
//       setSalonDataZustand: (newData) => set({ salonDataZustand: newData }),
//     }),
//     {
//       name: "salon-data-storage",
//       getStorage: () => localStorage,
//     }
//   )
// );

// export const salonDataZustandStore = create(
//   persist(
//     (set, get) => ({
//       salonDataZustand: {},
//       setSalonDataZustand: (update) => {
//         set((state) => {
//           return {
//             salonDataZustand: {
//               ...(typeof update === "function" ? update(state) : update),
//             },
//           };
//         });
//       },
//     }),
//     {
//       name: "salon-data-storage",
//       getStorage: () => localStorage,
//     }
//   )
// );




// state : current state of store. eg; salonDataZustand or setSalonDataZustand or other properties if exists
export const salonDataZustandStore = create(
  persist(
    (set, get) => ({
      salonDataZustand: {},
      setSalonDataZustand: (newVals) => {
        // if newVal is function. pass state.salonDataZustand so it can modify and merge existing salonDataZustand vals with new vals
        set((state) => ({ salonDataZustand: { ...(typeof newVals === "function" ? newVals(state.salonDataZustand) : newVals)} }));
      },
    }),
    {
      name: "salon-data-storage",
      getStorage: () => localStorage,
    }
  )
);

export const timeBookingZustandStore = create(
  persist(
    (set) => ({
      timeBookingZustand: [],
      setTimeBookingZustand: (newVals) => set({ timeBookingZustand: newVals }),
    }),
    {
      name: "time-booking-data-storage",
      getStorage: () => localStorage,
    }
  )
);
