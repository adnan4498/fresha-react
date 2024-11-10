import settingSubCategoryName from "./categoryAndSubCategory";

const generateSubCategoryLink = function(item, subCategoryName, navigate)  {
    let getCategory = settingSubCategoryName(item);

    let city = item.length > 1 ? item[0].city : item.city
    
    let subCategoryAndCity = [subCategoryName, city];
    
    subCategoryAndCity = subCategoryAndCity.join(" ");
    
    let subCategoryUrl = `/dynamic-category/${getCategory}/subCategoryRouteKey/${subCategoryAndCity}`;

    navigate(subCategoryUrl);
  };
 
export default generateSubCategoryLink