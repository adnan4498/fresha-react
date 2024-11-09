import settingSubCategoryName from "./categoryAndSubCategory";

const generateSubCategoryLink = function(item, subCategoryName, navigate)  {
    let getCategory = settingSubCategoryName(item);
    console.log(item, "item in module")

    let city = item.city
    
    let subCategoryAndCity = [subCategoryName, city];
    
    subCategoryAndCity = subCategoryAndCity.join(" ");
    
    let subCategoryUrl = `/dynamic-category/${getCategory}/subCategoryRouteKey/${subCategoryAndCity}`;
    // console.log(subCategoryUrl, "city")

    // console.log(subCategoryUrl, "subCategoryUrl")
    navigate(subCategoryUrl);
  };

export default generateSubCategoryLink