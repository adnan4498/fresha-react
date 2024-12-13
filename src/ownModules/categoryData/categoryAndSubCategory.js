const getCategoryOrSubCategoryName = (subCategoryName) => {
  var setCategory;

  let hairServices = [
    "Haircut & Beard Shaping",
    "Hydrating Hair Treatment",
    "Haircut & Beard Grooming",
    "Hair Treatment",
    "Hair Coloring",
    "Classic Haircut",
    "Beard Shaping",
  ];

  let barberServices = [
    "Beard Trimming",
    "Beard Trim",
    "Haircut",
    "Premium Beard Grooming",
    "Hair Styling",
    "Men’s Haircut",
    "Hair Color",
    "Beard Grooming",
  ]

  let nailServices = [
    "Manicure", 
    "Pedicure",
    "Gel Nails",
    "Nail Art",
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
    "Foot Massage",
    "Ultimate Glam Package",
    "Detox Body Wrap",
    "Thai Massage",
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
    "Bridal Makeup Package",
    "Party Makeup",
    "Luxary Facial",
  ];

  let beautyServices = [
    "Natural Glow Facial",
    "Gold Facial Treatment",
    "Party Makeup",
  ]

  // for sub-category
  if (hairServices.includes(subCategoryName || "hair-salon")) {
    return (setCategory = "hair-salon");
  }
  else if (nailServices.includes(subCategoryName || "nail-salon")) {
    return (setCategory = "nail-salon");
  }
  else if (massageServices.includes(subCategoryName || "massage-center")) {
    return (setCategory = "massage-center");
  }
  else if (waxServices.includes(subCategoryName || "wax-salon")) {
    return (setCategory = "wax-salon");
  }
  else if (spaServices.includes(subCategoryName || "spa-salon")) {
    return (setCategory = "spa");
  }
  else if (facialServices.includes(subCategoryName || "facial-salon")) {
    return (setCategory = "facial-salon");
  }
  else if (beautyServices.includes(subCategoryName || "beauty-salon")) {
    return (setCategory = "beauty-salon");
  }
  else if (barberServices.includes(subCategoryName || "barber-shop")) {
    return (setCategory = "barber-shop");
  }


  // else if(subCategoryName == "nail-salon"){ 
  //   return (setCategory = "nail-salon")
  // }
  // else if(subCategoryName == "barber-shop"){
  //   return (setCategory = "barber-shop")
  // }
  // else if(subCategoryName == "spa-salon"){ 
  //   return (setCategory = "spa-salon")
  // }
  // else if(subCategoryName == "wellness-center"){ 
  //   return (setCategory = "wellness-center")
  // }
  // else if(subCategoryName == "massage-center"){ 
  //   return (setCategory = "massage-center")
  // }
  // else if(subCategoryName == "beauty-salon"){ 
  //   return (setCategory = "beauty-salon")
  // }
  // else if(subCategoryName == "wax-salon"){
  //   return (setCategory = "wax-salon")
  // }
  // else if(subCategoryName == "facial-salon"){ 
  //   return (setCategory = "facial-salon")
  // }

};

export default getCategoryOrSubCategoryName;
