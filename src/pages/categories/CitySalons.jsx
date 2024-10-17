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

  // console.log(citySalons, "ss")
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
        Object.assign(citySalons[i], {
          serviceNameAndPrice: servicesWithNamesAndPrice[i],
        });
      }
    }

    let checkDups = [];



    for (let i = 0; i < servicesWithNamesAndPrice.length; i++) {
      for (let j = 0; j < servicesWithNamesAndPrice[i].length; j++) {
        if(checkDups.length == 0){
          checkDups.push(servicesWithNamesAndPrice[i][j])
        }
        else if(checkDups.length != 0){
          // console.log(checkDups[i]?.name , "hi")
          // checkDups[i]?.name.includes(servicesWithNamesAndPrice[i][j].name) == false ? checkDups
        }
      }
    }

    let aa = [5]
    let bb = [5]

    aa.includes(bb) == true ? console.log("included") : console.log("not included")

    // let cc = aa.includes(bb)
    // console.log(cc)


    // console.log(checkDups)

    // console.log(servicesWithNamesAndPrice)

    //   servicesWithNamesAndPrice = servicesWithNamesAndPrice.map((item , i) => (
    //   item.filter((items, index) =>(
    //     console.log(items, "ii  ")
    //   ))
    // ))

    // let checkingDups = [];

    // for (let i = 0; i < servicesWithNamesAndPrice.length; i++) {
    //   for (let j = 0; j < servicesWithNamesAndPrice[i].length; j++) {
    //     checkingDups.indexOf(servicesWithNamesAndPrice[i][j].name) == -1
    //       ? checkingDups.push(servicesWithNamesAndPrice[i][j])
    //       : "";
    //       console.log(checkingDups[i], "checking dups")

    //   }
    // }

    // // console.log(checkingDups, "checking dups")

    // let arr = ["a", "b", "b", "c", "d",]
    // let getArr = []

    // for(let i = 0; i < arr.length; i++){
    //   getArr.indexOf(arr[i]) == -1 ? getArr.push(arr[i]) : ""
    // }

    // console.log(getArr, "gar")
  };

  makingOfAllServicesArray();

  let subCategoryNamesArray = getSubCategory?.split(" ");

  let seperatedSubCategoryNames = [];
  subCategoryNamesArray?.map((item) => seperatedSubCategoryNames.push([item]));

  let gettingSubCategorySalons = [];

  const getSubCategorySalons = () => {
    for (let items of citySalons) {
      for (let services of items.allServices) {
        for (let service of services) {
          for (let seperatedNames of seperatedSubCategoryNames) {
            service.name.includes(getSubCategory) &&
              gettingSubCategorySalons.push(items);
            service.name.includes(seperatedNames) &&
              gettingSubCategorySalons.push(items);
          }
        }
      }
    }
  };

  getSubCategorySalons();

  citySalonsOnSubCategory = removingDuplicates(gettingSubCategorySalons);

  // let aaa = []
  // let bbb = [1,2,3,4,5,6]

  // aaa.forEach((item, i) => {
  //   bbb.forEach((items, index) =>{
  //     aaa.push(items)
  //   })
  // })

  // console.log(aaa)

  // console.log(checkDups, "check dups")

  let salonsToRender = getSubCategory ? citySalonsOnSubCategory : citySalons;
  let categoryNameToRender = getSubCategory ? getSubCategory : category;
  let cityNameToRender = getCityFromSubCategory ? getCityFromSubCategory : city;

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
          seperatedSubCategoryNames={seperatedSubCategoryNames}
          subCategoryName={getSubCategory}
        />
      </div>
    </div>
  );
};

export default CitySalons;
