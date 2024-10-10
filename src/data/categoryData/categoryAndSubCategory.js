const settingSubCategoryName = (subCategoryName) => {
  var setCategory;
  let setSubCategory;

  let hairServices = [
    "Haircut & Beard Shaping",
    "Hydrating Hair Treatment",
    "Beard Grooming",
    "Haircut & Beard Grooming",
    "Hair Treatment",
    "Hair Coloring",
    "Classic Haircut",
    "Beard Shaping",
    "Haircut",
    "Premium Beard Grooming",
  ];

  console.log(subCategoryName, "category ?");
  if (hairServices.includes(subCategoryName)) {
    return (setCategory = "hair-salon");
  }
};

export default settingSubCategoryName;
