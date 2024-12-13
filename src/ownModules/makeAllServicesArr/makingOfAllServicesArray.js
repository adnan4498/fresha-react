const makingOfAllServicesArray = function (salons, getDups = false) {
  let countrySalonsServices = [];
  let countryServicesWithoutTitles = [];
  let getAllCountryServices = [];
  let countryServicesWithNamesAndPrice = [];

  salons.forEach((item) => countrySalonsServices.push(item.services));

  countrySalonsServices.forEach((item) =>
    countryServicesWithoutTitles.push(Object.values(item))
  );

  countryServicesWithoutTitles.forEach(
    (item) => (getAllCountryServices = getAllCountryServices.concat([item]))
  );

  // got all services without titles as arrays and pushed back in citySalons array
  getAllCountryServices.forEach((item, i) =>
    Object.assign(salons[i], { allServices: item })
  );

  // each empty array will get services
  for (let item of getAllCountryServices) {
    countryServicesWithNamesAndPrice.push([]);
  }

  // extracting services of salons in order and pushing into servicesWithNamesAndPrice
  for (let i = 0; i < getAllCountryServices.length; i++) {
    for (let services of getAllCountryServices[i]) {
      for (let service of services) {
        let duplicateFound = countryServicesWithNamesAndPrice[i]?.some((item) =>
          service.name.includes(item.name)
        );
        if (getDups) {
          countryServicesWithNamesAndPrice[i]?.push(service);
        } else {
          duplicateFound
            ? ""
            : countryServicesWithNamesAndPrice[i]?.push(service);
        }
      }
    }
  }

  // pick salon in order, pushes serviceWithNameAndPrice obj into it
  salons.forEach((item, i) =>
    Object.assign(item, {
      serviceNameAndPrice: countryServicesWithNamesAndPrice[i],
    })
  );

  return salons;
};

export default makingOfAllServicesArray;
