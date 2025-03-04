// last week code

import React from "react";
import { useMatches } from "react-router-dom";
import CarouselWithServices from "../../components/carousel/CarouselWithServices";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
// import removingDuplicates from "../../ownModules/removingModules/removeDuplicates";
import allDubaiSalons from "../../data/salondata/dubai/dubaiData";
import allPakistanSalons from "../../data/salondata/pakistan/pakistanData";
import allOmanSalons from "../../data/salondata/oman/omanData";
import getGlobalSalons from "../../data/salondata/global/globalSalonData";
import makingOfAllServicesArray from "../../ownModules/makeAllServicesArr/makingOfAllServicesArray";
import removingDuplicates from "../../ownModules/removing/removeDuplicates";

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
      "Abu Dhabi",
      "ajman",
      "fujairah",
      "salalah",
      "muscat",
      "sohar",
      "nizwa",
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

  let globalSalons = getGlobalSalons()

  let getCity = city || getCityFromSubCategory;
  let citySalons = globalSalons.filter((item) => item.city == getCity);

  let countrySalons = () => {
    allDubaiSalons
    allPakistanSalons
    allOmanSalons

    let allCountrySalons = [allDubaiSalons, allOmanSalons, allPakistanSalons]

    let CountrySalons = []

    // if salon.city found, return full array of country
    for (let country of allCountrySalons) {
      for (let salons of country) {
        if (salons.city == getCity) {
          CountrySalons.push(country)
          break;
        }
      }
    }

    let removeZeroInCountrySalonsArr = []

    // [0] contains full country array
    CountrySalons[0]?.forEach(item => removeZeroInCountrySalonsArr.push(item))

    return removeZeroInCountrySalonsArr
  }

  let getCountrySalons = countrySalons()

  // adds allServicesArr 
  getCountrySalons = makingOfAllServicesArray(getCountrySalons)

  let seperateCityAndCountrySalons = () => {

    let seperatedCitySalons = []

    for (let i = 0; i < citySalons.length; i++) {
      for (let j = 0; j < getCountrySalons.length; j++) {
        if (citySalons[i].name == getCountrySalons[j].name) {
          seperatedCitySalons.push(getCountrySalons[j])
          getCountrySalons.splice(j, 1)
        }
      }
    }

    // includes allServices obj
    return seperatedCitySalons
  }

  // citySalons gets allServices obj 
  citySalons = seperateCityAndCountrySalons()


  const seperatingSubCategoryNames = () => {
    let seperatedNames = [];
    let subCategoryNamesArray = getSubCategory?.split(" ");

    subCategoryNamesArray?.forEach((item) => seperatedNames.push([item]));

    return seperatedNames;
  };

  let seperatedSubCategoryNames = seperatingSubCategoryNames();

  const gettingSubCategorySalons = () => {
    let salonsOnSubCategory = [];
    let getSubCategorySeperatedSalons = [];


    for (let items of citySalons) {
      for (let services of items.allServices) {
        for (let service of services) {
          for (let seperatedNames of seperatedSubCategoryNames) {
            // this will get excat subCategory Salon
            service.name.includes(getSubCategory) &&
              salonsOnSubCategory.push(items);

            // this will get salons that match seperated subCategory names
            // eg : hair-coloring ( hair & coloring )
            service.name.includes(seperatedNames) &&
              getSubCategorySeperatedSalons.push(items);
          }
        }
      }
    }

    return (salonsOnSubCategory = removingDuplicates(salonsOnSubCategory));
  };

  let citySalonsOnSubCategory = gettingSubCategorySalons();

  let salonsToRender = getSubCategory ? citySalonsOnSubCategory : citySalons;
  let categoryNameToRender = getSubCategory ? getSubCategory : category;
  let cityNameToRender = getCityFromSubCategory ? getCityFromSubCategory : city;

  let gettingOtherSimmillarSalons = () => {
    let getOtherSimillarSalons = [];
    for (let i = 0; i < citySalons.length; i++) {
      // prevents duplicates to be pushed
      let duplicateFound = salonsToRender?.some((item) =>
        citySalons[i].name.includes(item.name)
      );
      duplicateFound ? "" : getOtherSimillarSalons.push(citySalons[i]);
    }
    return (getOtherSimillarSalons = removingDuplicates(
      getOtherSimillarSalons
    ));
  };

  let otherSimillarSalons = gettingOtherSimmillarSalons();

  // actual sub-category salon and other simmilar salons merged
  let concatedSalonAndOtherSalons = salonsToRender.concat(otherSimillarSalons)

  let isSeperatedCategory = true
  let showTopReviewsSalons = true

  // console.log(categoryNameToRender, "categoryNameToRender from city")
  // console.log(getSubCategory, "getSubCategory from city")


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
          salons={concatedSalonAndOtherSalons}
          seperatedSubCategoryNames={seperatedSubCategoryNames}
          isSeperatedCategory={isSeperatedCategory}
          showTopReviewsSalons={showTopReviewsSalons}
          categoryName={categoryNameToRender}
          subCategoryName={getSubCategory}
          cityName={cityNameToRender}
          getCountrySalons={getCountrySalons}
        />
      </div>
    </div>
  );
};

export default CitySalons;