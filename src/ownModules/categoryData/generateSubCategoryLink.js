import getCategoryOrSubCategoryName from "./categoryAndSubCategory";

const generateSubCategoryLink = function (salon, category_or_sub_category_name, navigate) {

  let getName = getCategoryOrSubCategoryName(category_or_sub_category_name);

  let city = salon.length > 1 ? salon[0].city : salon.city;

  // - will be found only in category not subCategory. eg: spa-salon 
  let isCategory = category_or_sub_category_name.includes("-");
  
  if (isCategory) {
    console.log(getName, "city")
    let categoryUrl = `/dynamic-category/${getName}/categoryRouteKey/${city}`;
    navigate(categoryUrl);
  } else {
    let subCategoryAndCity = [category_or_sub_category_name, city];
    subCategoryAndCity = subCategoryAndCity.join(" ");
    let subCategoryUrl = `/dynamic-category/${getName}/subCategoryRouteKey/${subCategoryAndCity}`;
    navigate(subCategoryUrl);
  }
};

export default generateSubCategoryLink;