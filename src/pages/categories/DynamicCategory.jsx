import React from "react";
import { Link, useParams } from "react-router-dom";
import hairSalonBanner from "../../../public/images/salons/hairSalon/hair-salon-banner.jpg";
import barberShopBanner from "../../../public/images/salons/barberSalon/barber-shop-banner.jpeg";
import eyeBrowBanner from "../../../public/images/salons/eyesBrowAndLashes/eye-brows-and-lashes-banner.webp";
import { Button, Card } from "antd";
import Carousel from "react-multi-carousel";
import allDubaiSalons from "../../data/salondata/dubai/dubaiData";
import allPakistanSalons from "../../data/salondata/pakistan/pakistanData";
import { generateRandomSalons } from "../../ownModules/randomSalons/generateRandomSalons";
import CarouselComp from "../../components/carousel/CarouselComp";
import { StarFilled } from "@ant-design/icons";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import CarouselWithServices from "../../components/carousel/CarouselWithServices";
import globalSalons from "../../data/salondata/global/globalSalonData";

const DynamicCategory = () => {
  let urlParam = useParams();

  // console.log(urlParam, "use");

  let allDubai = allDubaiSalons;
  let allPakistan = allPakistanSalons;

  let merged = allDubai.concat(allPakistan);

  let shuffled = generateRandomSalons(merged);

  let allGlobalSalons = globalSalons.filter(
    (item) => item.category == urlParam.category
  );

  let categoryName;
  let categoryImg;
  let bgBanner;

  if (urlParam.category.includes("hair-salon")) {
    categoryName = "Hair Salons";
    categoryImg = hairSalonBanner;
    bgBanner = "hair-salon-bg-banner";
  } else if (urlParam.category.includes("nail-salon")) {
    categoryName = "Eye Salons";
    categoryImg = barberShopBanner;
    bgBanner = "eye-brows-and-lashes-bg-banner";
  } else if (urlParam.category.includes("barber-shop")) {
    categoryName = "Barber Shop";
    categoryImg = eyeBrowBanner;
    bgBanner = "barber-shop-bg-banner";
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 100,
    },
  };

  const categoryInCountries = [
    {
      name: "Dubai",
    },
    {
      name: "Pakistan",
    },
    {
      name: "England",
    },
    {
      name: "Australia",
    },
    {
      name: "India",
    },
  ];

  return (
    <div>
      <hr className="mt-7 mb-3"></hr>
      <div className="">
        {/* breadcrums here */}
        <BreadCrumbs />
      </div>

      {/* <div className='full-width-class hair-salon-banner '> */}
      <div className={`${bgBanner} full-width-class  mt-5`}>
        <div className="text-white h-[400px] flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <div>
              <p className="text-3xl ">Find {categoryName} near me</p>
            </div>

            <div>
              <span>Search for top {categoryName} near me</span>
            </div>

            <div className="mt-4">
              <Button className="w-44 text-base bg-white text-black py-6 rounded-lg">
                <p>Search near me</p>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <Carousel
          infinite={true}
          responsive={responsive}
          partialVisible={true}
          arrows={false}
        >
          {categoryInCountries.map((item, index) => (
            <div className="border border-gray-300 rounded-full px-2 py-1 w-52 text-center">
              <h3>
                {categoryName} in {item.name}{" "}
              </h3>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mt-10">
        <h2>Best Global {categoryName}</h2>

        <div className="mt-2">
          <h4 className="text-sm">
            Choose from 20,951 {categoryName} near you
          </h4>
        </div>

        <div className="text-blue-700 text-sm mt-3">
          <a>See map near me</a>
        </div>

        <div>
          {/* <Carousel infinite={true} responsive={responsive} partialVisible={true} arrows={false} >
                        {shuffled.map((item, index) => (
                            <div className='border border-gray-300 rounded-full px-2 py-1 w-52 text-center'>
                                <h3>{categoryName} in {item.name} </h3>
                            </div>
                        ))}
                    </Carousel> */}
          <CarouselWithServices salons={allGlobalSalons} />
        </div>
      </div>
    </div>
  );
};

export default DynamicCategory;
