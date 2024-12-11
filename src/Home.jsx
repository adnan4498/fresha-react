import GetAppQrBtn from "./components/getAppQrBtn/GetAppBtn";
import allDubaiSalons from "./data/salondata/dubai/dubaiData";
import getGlobalSalons from "./data/salondata/global/globalSalonData";
import allOmanSalons from "./data/salondata/oman/omanData";
import allPakistanSalons from "./data/salondata/pakistan/pakistanData";
import HeroSection from "./homeComponents/HeroSection";
import SalonCarousels from "./homeComponents/SalonCarousels";
import countrySalonsServices from "./ownModules/countrySalons/countrySalonsServices";

function Home() {

  // let aa = [allDubaiSalons, allPakistanSalons, allOmanSalons]
  let bb = getGlobalSalons()

  

  // let gg = countrySalonsServices()

  // console.log(aa, "aa")

  return (
    <>
    
      <HeroSection />
      <GetAppQrBtn />
      <SalonCarousels />
    </>
  );
}

export default Home;
