import { splittingServiceWords } from "../removing/removeWordsjs";
import { getServicesOnServiceWord } from "./getServicesOnServiceWord";

const servicesOfSpecialist = function (specialist, services) {

  let getSpecialistServices = {};

  let checkWord = ["barber", "spa", "massage", "wax", "skincare", "beauty", "nail", ]

  let get_key_and_all_services = (item, i, services) => {
    if (Object.keys(getSpecialistServices).includes(item)) {
      services[item].forEach((serviceItem) => {
        let checkDup = getSpecialistServices[item].some((getServicesItem) =>
          getServicesItem.name.includes(serviceItem.name)
        );
        !checkDup && getSpecialistServices[item].push(serviceItem);
      });
    } else {
      getSpecialistServices[item] = [services[item][i]];
    }
  };

  let get_key_and_specific_services = ( item, i, services, serviceNameTolowerCase) => {
    if (Object.keys(getSpecialistServices).includes(item)) {
      let checkDup = getSpecialistServices[item].some((getServicesItem) => {
        let lowerTheName = getServicesItem.name.toLowerCase();
        return lowerTheName.includes(serviceNameTolowerCase);
      });
      !checkDup && getSpecialistServices[item].push(services[item][i]);
    } else {
      getSpecialistServices[item] = [services[item][i]];
    }
  };

  for (let item in services) {
    for (let i = 0; i < services[item].length; i++) {
      let serviceNameTolowerCase = services[item][i].name.toLowerCase();
      let itemToLowerCase = item.toLowerCase();

      let removedWords = splittingServiceWords(specialist)

      removedWords.forEach((word) => {
        if (checkWord.includes(word)) {

          let servicesOnWord = getServicesOnServiceWord(word) 

          if (servicesOnWord.some((item) => serviceNameTolowerCase.includes(item))) {
            get_key_and_specific_services(item, i, services, serviceNameTolowerCase);
          }
        } 
        else {
          if ( itemToLowerCase.includes(word) || serviceNameTolowerCase.includes(word)) {

            // to push whole obj, e.g: {key : [full array]}
            if (itemToLowerCase.includes(word)) {
              get_key_and_all_services(item, i, services);
            }

            // to push a some services, e.g: {key : [some services]}
            if (serviceNameTolowerCase.includes(word)) {
              get_key_and_specific_services( item, i, services, serviceNameTolowerCase);
            }
          }
        }
      });
    }
  }

  return getSpecialistServices;
};

export default servicesOfSpecialist;
