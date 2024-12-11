import settingSubCategoryName from "./categoryAndSubCategory";

const generateSubCategoryLink = function(salon, subCategoryName, navigate)  {
    let getCategory = settingSubCategoryName(subCategoryName);

    console.log(getCategory, "getCategorygetCategory")

    let city = salon.length > 1 ? salon[0].city : salon.city
    
    let subCategoryAndCity = [subCategoryName, city];
    
    subCategoryAndCity = subCategoryAndCity.join(" ");
    
    // let subCategoryUrl = `/dynamic-category/${getCategory}/subCategoryRouteKey/${subCategoryAndCity}`;
    let subCategoryUrl = `/dynamic-category/${getCategory}/cityRouteKey/${city}`;

    navigate(subCategoryUrl);
  };
 
export default generateSubCategoryLink