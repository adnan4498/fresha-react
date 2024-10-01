import React from "react";
import Booking from "../components/booking/Booking";
import AppointmentIncreasing from "../components/appointmentIncreasing/AppointmentIncreasing";

const HeroSection = () => {
  return (
    <div>
      <div className="pt-[80px]">
        <h1>Book local beauty and wellness services</h1>
      </div>

      <div>
        <Booking />
      </div>
      
    <AppointmentIncreasing />
    </div>
  );
};

export default HeroSection;
