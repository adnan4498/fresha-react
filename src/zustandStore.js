import { create } from "zustand";
import { persist } from "zustand/middleware";

export const salonDataZustandStore = create(
  persist(
    (set) => ({
      salonDataZustand: {},
      setSalonDataZustand: (newData) => set({ salonDataZustand: newData }),
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
      timeBookingZustand : [],
      setTimeBookingZustand : (newData) => set({timeBookingZustand : newData})
    }),
    {
      name: "time-booking-data-storage", 
      getStorage: () => localStorage,
    }
  )
)