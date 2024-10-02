import GetAppQrBtn from "./components/getAppQrBtn/GetAppBtn";
import HeroSection from "./homeComponents/HeroSection";
import SalonCarousels from "./homeComponents/SalonCarousels";
import Header from "./shared/Header";
import { Button, Drawer, Radio, Space } from "antd";

function Home() {
  return (
    <>
        <HeroSection />
        <GetAppQrBtn />
        <SalonCarousels />
    </>
  );
}

export default Home;
