export const getServicesOnServiceWord = (item) => {
    let spaServices = ["spa", "bath"];
    let barberServices = ["hair", "beard"];
    let massageServices = ["massage"];
    let waxServices = ["wax", "bath"];
    let skincareServices = ["skincare", "facial"];
    let nailServices = ["nail", "pedicure", "manicure"];
    let beautyServices = ["beauty", "skincare", "facial", "pamper", "makeup"];
  
    let servicesOnWord
  
    switch (item) {
      case "barber":
        servicesOnWord = barberServices;
        break;
  
      case "spa":
        servicesOnWord = spaServices;
        break;
  
      case "massage":
        servicesOnWord = massageServices;
        break;
  
      case "wax":
        servicesOnWord = waxServices;
        break;
  
      case "skincare":
        servicesOnWord = skincareServices;
        break;
  
      case "beauty":
        servicesOnWord = beautyServices;
        break;
  
      case "nail":
        servicesOnWord = nailServices;
        break;
  
      default:
        break;
    }
  
    return servicesOnWord
  
  }