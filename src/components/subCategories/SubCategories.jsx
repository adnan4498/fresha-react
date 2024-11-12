import React from "react";
import { Link, useNavigate } from "react-router-dom";
import settingSubCategoryName from "../../ownModules/categoryData/categoryAndSubCategory";
import removingDuplicates from "../../ownModules/removeDuplicates/removeDuplicates";
import generateSubCategoryLink from "../../ownModules/categoryData/generateSubCategoryLink";

const SubCategories = ({ salon }) => {
  let navigate = useNavigate();

  const getServiceNamesFromSalon = () => {
    let getServices = salon.map((item) => item.services);
    let serviceTitles = [];

    for (let items in getServices) {
      for (let titles in getServices[items]) {
        serviceTitles.push(titles);
      }
    }

    let servicesByThereTitles = [];

    for (let i = 0; i < getServices.length; i++) {
      for (let j = 0; j < serviceTitles.length; j++) {
        servicesByThereTitles.push(getServices[i][serviceTitles[j]]);
      }
    }

    let servicesNames = [];

    for (let i = 0; i < servicesByThereTitles.length; i++) {
      for (let j = 0; j < servicesByThereTitles[i]?.length; j++) {
        servicesNames.push(servicesByThereTitles[i][j].name);
      }
    }

    return servicesNames = removingDuplicates(servicesNames)
  };

  let allCitySalonsServiceNames = getServiceNamesFromSalon();

  // const generateSubCategoryLink = (subCategory) => {
  //   // let getCategory = settingSubCategoryName(subCategory);

  //   console.log(subCategory, "gg")
    
  //   let city = salon[0].city

  //   let subCategoryAndCity = [subCategory, city];

  //   subCategoryAndCity = subCategoryAndCity.join(" ");

  //   let subCategoryUrl = `/dynamic-category/${subCategory}/subCategoryRouteKey/${subCategoryAndCity}`;

  //   // navigate(subCategoryUrl);
  // };

  return (
    <div className="grid grid-flow-col grid-rows-6 gap-3 w-[1700px]">
      {allCitySalonsServiceNames.map((item, index) => (
        <>
        <div onClick={() => generateSubCategoryLink(salon, item, navigate)}>
          <div>{item}</div>
        </div>
        </>
      ))}
    </div>
  );
};

export default SubCategories;
