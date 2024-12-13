import React from "react";
import { useParams } from "react-router-dom";
import hairSalonBanner from "../../../public/images/salons/hairSalon/hair-salon-banner.jpg";
import barberShopBanner from "../../../public/images/salons/barberSalon/barber-shop-banner.jpeg";
import eyeBrowBanner from "../../../public/images/salons/eyesBrowAndLashes/eye-brows-and-lashes-banner.webp";
import { Button } from "antd";
import Carousel from "react-multi-carousel";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import CarouselWithServices from "../../components/carousel/CarouselWithServices";
import { carouselResponsiveCode } from "../../ownModules/responsive/responsive";
import getGlobalSalons from "../../data/salondata/global/globalSalonData";

const DynamicCategory = () => {
  let urlParam = useParams();

  
  let globalSalons = getGlobalSalons()


  const getAllServices = () => {

    let countrySalonsServices = [];
    let countryServicesWithoutTitles = [];
    let getAllCountryServices = [];
    let countryServicesWithNamesAndPrice = [];

    globalSalons.forEach((item) => countrySalonsServices.push(item.services));

    countrySalonsServices.forEach((item) =>
      countryServicesWithoutTitles.push(Object.values(item))
    );

    countryServicesWithoutTitles.forEach(
      (item) => (getAllCountryServices = getAllCountryServices.concat([item]))
    );

    // got all services without titles as arrays and pushed back in citySalons array
    getAllCountryServices.forEach((item, i) =>
      Object.assign(globalSalons[i], { allServices: item })
    );

    // each empty array will get services
    for (let item of getAllCountryServices) {
      countryServicesWithNamesAndPrice.push([]);
    }


    // extracting services of salons in order
    // and pushing into servicesWithNamesAndPrice
    for (let i = 0; i < getAllCountryServices.length; i++) {
      for (let services of getAllCountryServices[i]) {
        for (let service of services) {
          // prevents duplicates
          // first item gets pushed by default (servicesWithNamesAndPrice is empty at first)
          let duplicateFound = countryServicesWithNamesAndPrice[i]?.some((item) =>
            service.name.includes(item.name)
          );
          duplicateFound ? "" : countryServicesWithNamesAndPrice[i]?.push(service);
        }
      }
    }

    // pick salon in order, pushes serviceWithNameAndPrice obj into it
    globalSalons.forEach((item, i) => Object.assign(item, { serviceNameAndPrice: countryServicesWithNamesAndPrice[i] }))

  }

  getAllServices()

  let citySalons = globalSalons.filter(
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
    categoryName = "Nail Salons";
    categoryImg = eyeBrowBanner;
    bgBanner = "eye-brows-and-lashes-bg-banner";
  } else if (urlParam.category.includes("barber-shop")) {
    categoryName = "Barber Shop";
    categoryImg = barberShopBanner;
    bgBanner = "barber-shop-bg-banner";
  }
  else if (urlParam.category.includes("spa")) {
    categoryName = "Spa";
    categoryImg = barberShopBanner;
    bgBanner = "barber-shop-bg-banner";
  }
  else if (urlParam.category.includes("facial")) {
    categoryName = "Facial";
    categoryImg = barberShopBanner;
    bgBanner = "barber-shop-bg-banner";
  }
  else if (urlParam.category.includes("beauty-salon")) {
    categoryName = "Beauty Salons";
    categoryImg = barberShopBanner;
    bgBanner = "barber-shop-bg-banner";
  }
  else if (urlParam.category.includes("massage-center")) {
    categoryName = "Massage Salons";
    categoryImg = barberShopBanner;
    bgBanner = "barber-shop-bg-banner";
  }
  else if (urlParam.category.includes("wellness-center")) {
    categoryName = "Wellness Centers";
    categoryImg = barberShopBanner;
    bgBanner = "barber-shop-bg-banner";
  }
  else if (urlParam.category.includes("wax-salon")) {
    categoryName = "Wax Salons";
    categoryImg = barberShopBanner;
    bgBanner = "barber-shop-bg-banner";
  }

  let partialVisibilityGutter = 100
  const responsive = carouselResponsiveCode(partialVisibilityGutter)

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

  let isSeperatedCategory = false
  let showTopReviewsSalons = false

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
          {categoryInCountries.map((item) => (
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
          <CarouselWithServices salons={citySalons}
           getCountrySalons={globalSalons} 
           isSeperatedCategory={isSeperatedCategory} showTopReviewsSalons={showTopReviewsSalons} />
        </div>
      </div>
    </div>
  );
};

export default DynamicCategory;
