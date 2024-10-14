import React from "react";
import { useMatches } from "react-router-dom";
import globalSalons from "../../data/salondata/global/globalSalonData";
import CarouselWithServices from "../../components/carousel/CarouselWithServices";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";

const CitySalons = () => {
  let match = useMatches();

  // city only comes from tapping city name on bread crumb
  // subCategory has its own city name from subCategoris.jsx
  const { category, city, subCategory } = match[0].params;

  // subCategory has city name in it, below function extracts it
  let getSubCategory;
  let getCityFromSubCategory;

  const seperateSubCategoryAndCity = () => {
    let allCities = [
      "karachi",
      "lahore",
      "islamabad",
      "multan",
      "sharjah",
      "abuDhabi",
      "ajman",
      "fujairah",
    ];

    let findCityIndex;
    for (let item of allCities) {
      subCategory?.includes(item)
        ? (findCityIndex = subCategory.indexOf(item))
        : "";
    }
    getSubCategory = subCategory?.slice(0, findCityIndex - 1); // -1 will remove space in string
    getCityFromSubCategory = subCategory?.slice(findCityIndex);
  };

  seperateSubCategoryAndCity();

  let getCity = city || getCityFromSubCategory;
  let citySalons = globalSalons.filter((item) => item.city == getCity);

  console.log(citySalons, "get city salons")

  let citySalonsOnSubCategory = [];

  const makingOfAllServicesArray = () => {
    let citySalonsServices = [];

    citySalons.forEach((item) => citySalonsServices.push(item.services));

    let servicesWithoutTitles = [];

    citySalonsServices.forEach((item) =>
      servicesWithoutTitles.push(Object.values(item))
    );

    let getAllServices = [];

    servicesWithoutTitles.forEach(
      (item) => (getAllServices = getAllServices.concat([item]))
    );

    // got all services without titles as arrays and pushed back in citySalons array
    // so salons can be filter out based on sub-category service name
    getAllServices.forEach((item, i) =>
      Object.assign(citySalons[i], { allServices: item })
    );

    let servicesWithNamesAndPrice = [];

    for (let item of getAllServices) {
      servicesWithNamesAndPrice.push([]);
    }

    for (let i = 0; i < getAllServices.length; i++) {
      for (let j = 0; j < getAllServices[i].length; j++) {
        for (let k = 0; k < getAllServices[i][j].length; k++) {
          servicesWithNamesAndPrice[i].push(getAllServices[i][j][k]);
        }
      }
    }

    for (let i = 0; i < citySalons.length; i++) {
      for (let j = 0; j < servicesWithNamesAndPrice.length; j++) {
        Object.assign(citySalons[i], {serviceNameAndPrice : servicesWithNamesAndPrice[i]})
      }
    }

    



  };

  makingOfAllServicesArray();

  const getSubCategorySalons = () => {
    for (let items of citySalons) {
      for (let services of items.allServices) {
        for (let service of services) {
          service.name == getSubCategory && citySalonsOnSubCategory.push(items);
        }
      }
    }
  };

  getSubCategorySalons();

  return (
    <div>
      <div className="my-3">
        {" "}
        <BreadCrumbs />{" "}
      </div>
      <h2 className="my-6">
        Best {getSubCategory ? getSubCategory : category} near me in{" "}
        {getCityFromSubCategory ? getCityFromSubCategory : city}
      </h2>
      <div className="mt-10">
        <CarouselWithServices salons={getSubCategory ? citySalonsOnSubCategory : citySalons} />
      </div>

    </div>
  );
};

export default CitySalons;
