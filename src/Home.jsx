import React from "react";
import HeroSection from "./homeComponents/HeroSection";
import GetAppQrBtn from "./components/getAppQrBtn/GetAppBtn";
import SalonCarousels from "./homeComponents/SalonCarousels";

function Home() {


  // localStorage.clear()

  return (
    <>
      <HeroSection />
      <GetAppQrBtn />
      <SalonCarousels />
    </>
  );
}

export default Home;
