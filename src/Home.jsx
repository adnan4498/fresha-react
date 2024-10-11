import { Link } from "react-router-dom";
import GetAppQrBtn from "./components/getAppQrBtn/GetAppBtn";
import HeroSection from "./homeComponents/HeroSection";
import SalonCarousels from "./homeComponents/SalonCarousels";
import Header from "./shared/Header";
import { Button, Drawer, Radio, Space } from "antd";

function Home() {
  let good = "these are good products";
  let bad = "these are bad products";
  let category = "karachi"

  return (
    <>
      <HeroSection />
      <GetAppQrBtn />
      <SalonCarousels />

      <div className="my-5 flex flex-col gap-10">
        <Link to={`/dynamic-category/${category}/${good}`}>
          <p>Good Comp</p>
        </Link>
        <Link to={`/dynamic-category/${category}/${bad}`}>
          <p>bad Comp</p>
        </Link>
      </div>
    </>
  );
}

export default Home;
