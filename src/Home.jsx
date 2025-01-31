import React from "react";
import HeroSection from "./homeComponents/HeroSection";
import GetAppQrBtn from "./components/getAppQrBtn/GetAppBtn";
import SalonCarousels from "./homeComponents/SalonCarousels";

function Home() {


  function solution(str, ending) {
    let firstIndex = str.indexOf(ending[0])

    let checkArr = []
    let firstSliced

    for (let i = 0; i < str.length; i++) {
      str[i] == ending[0] && checkArr.push(i)
    }

    if (checkArr.length == 1) {
      firstSliced = str.slice(firstIndex)
    }
    else {     
      firstSliced = str.slice(checkArr.pop())
    }

    let check

    if(ending.length == 0){
      return true
    }
    else{
      check = firstSliced == ending
    }

    return check    
  }

  console.log(solution("abcwde", "cwde"))

  return (
    <>
      <HeroSection />
      <GetAppQrBtn />
      <SalonCarousels />
    </>
  );
}

export default Home;
