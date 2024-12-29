const servicesOfSpecialist = function (specialist, services) {
  // console.log(services, "services");

  let speciality = specialist.memberSpeciality.toLocaleLowerCase();

  let regex = /\b(yoga|specialist|therapist|head|technician)\b|&/gi;
  let removedWords = speciality.replace(regex, "").trim();
  removedWords.includes("  ") && (removedWords = removedWords.replace(" ", ""));
  removedWords = removedWords.split(" ");

  let getSpecialistServices = {};

  let spaServices = ["spa", "bath", "body"];
  let barberServices = ["hair", "beard"];
  let massageServices = ["massage"];
  let waxServices = ["wax", "body", "bath"];
  let skincareServices = ["skincare", "facial"]
  let beautyServices = ["beauty", "skincare", "facial", "pamper", "makeup"]

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

  let get_key_and_specific_services = (
    item,
    i,
    services,
    serviceNameTolowerCase
  ) => {
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

      removedWords.forEach((word) => {
        if (
          word == "barber" ||
          word == "spa" ||
          word == "massage" ||
          word == "wax" ||
          word == "skincare" ||
          word == "beauty" 
        ) {
          let servicesOnWord;

          switch (word) {
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

            default:
              break;
          }

          if (
            servicesOnWord.some((item) => serviceNameTolowerCase.includes(item))
          ) {
            get_key_and_specific_services(
              item,
              i,
              services,
              serviceNameTolowerCase
            );
          }
        } else {
          if (
            itemToLowerCase.includes(word) ||
            serviceNameTolowerCase.includes(word)
          ) {
            // to push whole obj, e.g: {key : [full array]}
            if (itemToLowerCase.includes(word)) {
              get_key_and_all_services(item, i, services);
            }

            // to push a some services, e.g: {key : [some services]}
            if (serviceNameTolowerCase.includes(word)) {
              get_key_and_specific_services(
                item,
                i,
                services,
                serviceNameTolowerCase
              );
            }
          }
        }
      });
    }
  }

  return getSpecialistServices
};

export default servicesOfSpecialist;
