import { create } from "zustand";
import { persist } from "zustand/middleware";

export const salonDataZustandStore = create(
  persist(
    (set) => ({
      salonDataZustand: {},
      setSalonDataZustand: (newObj) => set({ salonDataZustand: newObj }),
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
      setTimeBookingZustand : (newObj) => set({timeBookingZustand : newObj})
    }),   
    {
      name: "time-booking-data-storage", 
      getStorage: () => localStorage,
    }
  )
)