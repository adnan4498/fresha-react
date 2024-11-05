import React from "react";
import { useMatches } from "react-router-dom";
import globalSalons from "../../data/salondata/global/globalSalonData";
import CarouselWithServices from "../../components/carousel/CarouselWithServices";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import removingDuplicates from "../../ownModules/removeDuplicates/removeDuplicates";
import allDubaiSalons from "../../data/salondata/dubai/dubaiData";
import allPakistanSalons from "../../data/salondata/pakistan/pakistanData";
import allOmanSalons from "../../data/salondata/oman/omanData";

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

  let getCity = city || getCityFromSubCategory;
  let citySalons = globalSalons.filter((item) => item.city == getCity);

  let countrySalons = () => {
    allDubaiSalons
    allPakistanSalons
    allOmanSalons

    let allCountrySalons = [allDubaiSalons, allOmanSalons, allPakistanSalons]

    let CountrySalons = []

    for (let country of allCountrySalons) {
      for (let salons of country) {
        if (salons.city == getCity) {
          CountrySalons.push(country)
          break;
        }
      }
    }

    return CountrySalons
  }
  
  let getCountrySalons = countrySalons()


  const makingOfAllServicesArray2 = () => {
    // allDubaiSalons
    // allPakistanSalons
    // allOmanSalons

    // let allCountrySalons = [allDubaiSalons, allOmanSalons, allPakistanSalons]

    // let getCountrySalons = []

    // for (let country of allCountrySalons) {
    //   for (let salons of country) {
    //     if (salons.city == getCity) {
    //       getCountrySalons.push(country)
    //       break;
    //     }
    //   }
    // }

    let countrySalonsServices = [];
    let countryServicesWithoutTitles = [];
    let getAllCountryServices = [];
    let countryServicesWithNamesAndPrice = [];

    getCountrySalons[0].forEach((item) => countrySalonsServices.push(item.services));

    countrySalonsServices.forEach((item) =>
      countryServicesWithoutTitles.push(Object.values(item))
    );


    countryServicesWithoutTitles.forEach(
      (item) => (getAllCountryServices = getAllCountryServices.concat([item]))
    );

    // got all services without titles as arrays and pushed back in citySalons array
    getAllCountryServices.forEach((item, i) =>
      Object.assign(getCountrySalons[0][i], { allServices: item })
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
    // each salon gets accurate obj
    for (let i = 0; i < getCountrySalons.length; i++) {
      for (let j = 0; j < countryServicesWithNamesAndPrice.length; j++) {
        Object.assign(getCountrySalons[i][j], {
          serviceNameAndPrice: countryServicesWithNamesAndPrice[j],
        });
      }
    }

    // console.log(getCountrySalons, "country salons")
  }

  makingOfAllServicesArray2()


  const makingOfAllServicesArray = () => {
    let citySalonsServices = [];
    let servicesWithoutTitles = [];
    let getAllServices = [];
    let servicesWithNamesAndPrice = [];

    let theSalons = citySalons.concat(getCountrySalons)

    console.log(theSalons, "the salons")

    citySalons.forEach((item) => citySalonsServices.push(item.services));

    citySalonsServices.forEach((item) =>
      servicesWithoutTitles.push(Object.values(item))
    );

    servicesWithoutTitles.forEach(
      (item) => (getAllServices = getAllServices.concat([item]))
    );

    // got all services without titles as arrays and pushed back in citySalons array
    getAllServices.forEach((item, i) =>
      Object.assign(citySalons[i], { allServices: item })
    );

    // each empty array will get services
    for (let item of getAllServices) {
      servicesWithNamesAndPrice.push([]);
    }

    // extracting services of salons in order
    // and pushing into servicesWithNamesAndPrice
    for (let i = 0; i < getAllServices.length; i++) {
      for (let services of getAllServices[i]) {
        for (let service of services) {
          // prevents duplicates
          // first item gets pushed by default (servicesWithNamesAndPrice is empty at first)
          let duplicateFound = servicesWithNamesAndPrice[i]?.some((item) =>
            service.name.includes(item.name)
          );
          duplicateFound ? "" : servicesWithNamesAndPrice[i]?.push(service);
        }
      }
    }

    // pick salon in order, pushes serviceWithNameAndPrice obj into it
    // each salon gets accurate obj
    for (let i = 0; i < citySalons.length; i++) {
      for (let j = 0; j < servicesWithNamesAndPrice.length; j++) {
        Object.assign(citySalons[i], {
          serviceNameAndPrice: servicesWithNamesAndPrice[i],
        });
      }
    }
    // console.log(citySalons, "citySalons")

  };

  makingOfAllServicesArray();



  // let seperatedSalons = getCountrySalons[0].filter((item, i) => citySalons[i]?.name.includes(item.name)) 
  // item.name.includes(citySalons[i].name)

  let seperatedSalons = []

  // for(let i = 0; i < citySalons.length; i++){
  //   for(let j = 0; j < getCountrySalons[0].length; j++){
  //     console.log(getCountrySalons[j].name, "names  ")
  //   }
  // }

  for(let cityNames of citySalons){
    for(let countryNames of getCountrySalons[0]){
      // console.log(countryNames.name == cityNames.name)
      // console.log(countryNames, "count")
      cityNames.name == countryNames.name && seperatedSalons.push(countryNames)
    }
  }

  console.log(seperatedSalons, "seperated")


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
