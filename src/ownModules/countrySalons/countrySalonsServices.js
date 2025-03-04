import getGlobalSalons from "../../data/salondata/global/globalSalonData";

const countrySalonsServices = function(){

    let getCountrySalons = getGlobalSalons()

    let countrySalonsServices = [];
    let countryServicesWithoutTitles = [];
    let getAllCountryServices = [];
    let countryServicesWithNamesAndPrice = [];

    getCountrySalons.forEach((item) => countrySalonsServices.push(item.services));

    countrySalonsServices.forEach((item) =>
      countryServicesWithoutTitles.push(Object.values(item))
    );

    countryServicesWithoutTitles.forEach(
      (item) => (getAllCountryServices = getAllCountryServices.concat([item]))
    );

    // got all services without titles as arrays and pushed back in citySalons array
    getAllCountryServices.forEach((item, i) =>
      Object.assign(getCountrySalons[i], { allServices: item })
    );

    // making empty arrays, each empty array will get services 
    for (let item of getAllCountryServices) {
      countryServicesWithNamesAndPrice.push([]);
    }


    // extracting services of salons in order
    // and pushing into servicesWithNamesAndPrice
    for (let i = 0; i < getAllCountryServices.length; i++) {
      for (let services of getAllCountryServices[i]) {
        for (let service of services) {
          // prevents duplicates
          // first item gets pushed by default (servicesWithNamesAndPrice is empty at first)
          let duplicateFound = countryServicesWithNamesAndPrice[i]?.some((item) =>
            service.name.includes(item.name)
          );
          duplicateFound ? "" : countryServicesWithNamesAndPrice[i]?.push(service);
        }
      }
    }

    // pick salon in order, pushes serviceWithNameAndPrice obj into it
    getCountrySalons.forEach((item, i) => Object.assign(item, { serviceNameAndPrice: countryServicesWithNamesAndPrice[i] }))
}

export default countrySalonsServices