import React, { useEffect, useMemo } from "react";
import HeroSection from "./homeComponents/HeroSection";
import GetAppQrBtn from "./components/getAppQrBtn/GetAppBtn";
import SalonCarousels from "./homeComponents/SalonCarousels";
import { useState } from "react";
// import  nameStore  from "./zustandPresistingStore";

function Home() {

  // const { count, increase, decrease} = useStore((state) => state);
  // const {myName, changeName} = nameStore((state) => state)

  // console.log(myName, "localStorage")

  // localStorage.clear()

  // const [dummy, setDummy] = useState()

  // let aa = []
  // useEffect(() => {
  //   aa = 5

  //   setDummy(10)
  // }, [])
  


  // console.log(dummy)

  return (
    <>
    {/* adasd */}
      {/* <div className="my-40">
        <h1>myName: {myName}</h1>
         <h1>count: {count}</h1> 
         <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>

        <button onClick={changeName}>changeName</button>
        <button onClick={ResetName}>ResetName</button>
        <button onClick={() => myName == "adnan" ? changeName("po") : }>changeName</button>
      </div> */}
      <HeroSection />
      <GetAppQrBtn />
      <SalonCarousels />
    </>
  );
}

export default Home;
