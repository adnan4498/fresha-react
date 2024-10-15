const settingSubCategoryName = (subCategoryName) => {
  var setCategory;

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

  let nailServices = [
    "Manicure", 
    "Pedicure"
  ];

  let massageServices = [
    "Head Massage",
    "Scrub Facial",
    "Full Body Massage",
    "Relaxing Massage",
    "Deep Tissue Massage",
    "Aromatherapy Massage",
    "Foot Reflexology",
    "Swedish Massage",
  ];

  let waxServices = [
    "Back Wax",
    "Chest Wax",
    "Full Body Wax",
    "Arm Wax",
    "Leg Wax",
  ];

  let spaServices = [
    "Moroccan Bath", 
    "Royal Bath"
  ];

  let facialServices = [
    "Facial Treatment",
    "Scrub Facial",
    "Body Scrub",
    "Hydration Facial",
    "Hydrating Facial",
  ];

  if (hairServices.includes(subCategoryName)) {
    return (setCategory = "hair-salon");
  }
  else if (nailServices.includes(subCategoryName)) {
    return (setCategory = "nail-salon");
  }
  else if (massageServices.includes(subCategoryName)) {
    return (setCategory = "massage-salon");
  }
  else if (waxServices.includes(subCategoryName)) {
    return (setCategory = "wax-salon");
  }
  else if (spaServices.includes(subCategoryName)) {
    return (setCategory = "spa-salon");
  }
  else if (facialServices.includes(subCategoryName)) {
    return (setCategory = "facial-salon");
  }

};

export default settingSubCategoryName;
