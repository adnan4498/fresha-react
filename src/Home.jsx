import React from "react";
import HeroSection from "./homeComponents/HeroSection";
import GetAppQrBtn from "./components/getAppQrBtn/GetAppBtn";
import SalonCarousels from "./homeComponents/SalonCarousels";

function Home() {

  // function a(){
  //   ab()
  // }


  // let ab = () => {
  //   console.log("hi")
  // }

  // a()

  return (
    <>
      <HeroSection />
      <GetAppQrBtn />
      <SalonCarousels />
    </>
  );
}

export default Home;
