import React from "react";
import { useMatches } from "react-router-dom";
import globalSalons from "../../data/salondata/global/globalSalonData";
import CarouselWithServices from "../../components/carousel/CarouselWithServices";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import removingDuplicates from "../../ownModules/removeDuplicates/removeDuplicates";

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
      for (let services of getAllServices[i]) {
        for (let service of services) {
          // this logic will prevent duplicates to be pushed
          let duplicateFound = servicesWithNamesAndPrice[i]?.some((item) =>
            service.name.includes(item.name)
          );
          duplicateFound ? "" : servicesWithNamesAndPrice[i]?.push(service);
        }
      }
    }

    for (let i = 0; i < citySalons.length; i++) {
      for (let j = 0; j < servicesWithNamesAndPrice.length; j++) {
        Object.assign(citySalons[i], {
          serviceNameAndPrice: servicesWithNamesAndPrice[i],
        });
      }
    }
  };

  makingOfAllServicesArray();

  let subCategoryNamesArray = getSubCategory?.split(" ");

  let seperatedSubCategoryNames = [];
  subCategoryNamesArray?.map((item) => seperatedSubCategoryNames.push([item]));

  let getSubCategorySalons = [];
  let getSubCategorySeperatedSalons = []

  const gettingSubCategorySalons = () => {
    for (let items of citySalons) {
      for (let services of items.allServices) {
        for (let service of services) {
          for (let seperatedNames of seperatedSubCategoryNames) {
            // this will get excat subCategory Salon
            service.name.includes(getSubCategory) &&
              getSubCategorySalons.push(items);

            // this will get salons that match seperated subCategory names eg : hair-coloring ( hair & coloring )
            service.name.includes(seperatedNames) &&
            getSubCategorySeperatedSalons.push(items);
          }
        }
      }
    }
  };

  gettingSubCategorySalons();

  citySalonsOnSubCategory = removingDuplicates(getSubCategorySalons);
  let citySalonsOnSeperatedSubCategory = removingDuplicates(getSubCategorySeperatedSalons);

  let salonsToRender = getSubCategory ? citySalonsOnSubCategory : citySalons;
  let categoryNameToRender = getSubCategory ? getSubCategory : category;
  let cityNameToRender = getCityFromSubCategory ? getCityFromSubCategory : city;

  // console.log(salonsToRender, "subCategory actual salon")
  // console.log(citySalonsOnSeperatedSubCategory, "seperated salon")
  // console.log(citySalons, "citySalons")

  let otherSimillarSalons = []

  // for(let i = 0; i < salonsToRender.length; i++){
  //   for(let j = 0; j < citySalonsOnSeperatedSubCategory.length; j++){
  //     let checkDups = salonsToRender.some(item => citySalonsOnSeperatedSubCategory[j].name.includes(item.name)) 
  //     !checkDups && otherSimillarSalons.push(citySalonsOnSeperatedSubCategory[j])
  //   }
  // }

  for(let i = 0; i < salonsToRender.length; i++){
    for(let j = 0; j < citySalons.length; j++){
      let checkDups = salonsToRender.some(item => citySalons[j].name.includes(item.name)) 
      !checkDups && otherSimillarSalons.push(citySalons[j])
    }
  }

  otherSimillarSalons = removingDuplicates(otherSimillarSalons)

  console.log(otherSimillarSalons, "22")

  return (
    <div>
      <div className="my-3">
        <BreadCrumbs />
      </div>
      <h2 className="my-6">
        Best {categoryNameToRender} near me in {cityNameToRender}
      </h2>
      <div className="mt-10">
        <CarouselWithServices
          salons={salonsToRender}
          otherSimillarSalons={otherSimillarSalons}
          seperatedSubCategoryNames={seperatedSubCategoryNames}
          subCategoryName={getSubCategory}
        />
      </div>
    </div>
  );
};

export default CitySalons;
