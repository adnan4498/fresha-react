import React, { useEffect, useMemo } from "react";
import HeroSection from "./homeComponents/HeroSection";
import GetAppQrBtn from "./components/getAppQrBtn/GetAppBtn";
import SalonCarousels from "./homeComponents/SalonCarousels";
import { useState } from "react";
import { zustandDummyStore } from "./zustandStore";
// import  nameStore  from "./zustandPresistingStore";

function Home() {

  const { zustandDummyData, setZustandDummyData } =
    zustandDummyStore((state) => state);

  // localStorage.clear()

  // setZustandDummyData((e) => e.ad = "5")
  // setZustandDummyData("5")

  let ab = {
    name : "adnan",
    city : "karachi",
  }
  
  const func = () => {
    // setZustandDummyData(ab)
    setZustandDummyData("5")
    // setZustandDummyData((oldState) => [{...oldState.zustandDummyData, ab}])
    // setZustandDummyData(ab)
  }
  console.log(zustandDummyData, "dummy d")

  // let c = [7]

  // let bb = [...c, 8]

  // console.log(bb, "bb")

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

        <div className="my-20" onClick={() => func()}>
          asdasd
        </div>

      <HeroSection />
      <GetAppQrBtn />
      <SalonCarousels />
    </>
  );
}

export default Home;
