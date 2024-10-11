const getCitySalonServices = function (salons) {
  let allCitySalonsServices = [];


  // refactor the code, consistency needed in loops
  const getServiceNamesFromSalon = () => {
    let getServices = salons.map((item) => item.services);
    let serviceTitles = [];

    for (let items in getServices) {
      for (let titles in getServices[items]) {
        serviceTitles.push(titles);
      }
    }

    let servicesByThereTitles = [];

    for (let i = 0; i < getServices.length; i++) {
      for (let j = 0; j < serviceTitles.length; j++) {
        servicesByThereTitles.push(getServices[i][serviceTitles[j]]);
      }
    }

    let servicesNames = [];

    for (let i = 0; i < servicesByThereTitles.length; i++) {
      for (let j = 0; j < servicesByThereTitles[i].length; j++) {
        servicesNames.push(servicesByThereTitles[i][j].name);
      }
    }

    removingDuplicates(servicesNames);
  };

  getServiceNamesFromSalon();

  function removingDuplicates(servicesNames) {
    let removeDuplicates = new Set(servicesNames);

    // make Set object to array
    // populating the global variable allCitySalonsServicesName
    for (let i of removeDuplicates) {
        allCitySalonsServices.push(i);
    }
  }
  return allCitySalonsServices;
};

export default getCitySalonServices;
