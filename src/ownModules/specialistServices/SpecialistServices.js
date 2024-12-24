const servicesOfSpecialist = function (specialist, services, theSalon) {
  console.log(services, "services");

  let speciality = specialist.memberSpeciality.toLocaleLowerCase();

  let regex = /\b(yoga|specialist|therapist|head)\b|&/gi;

  let removedWords = speciality.replace(regex, "").trim();

  removedWords.includes("  ") && (removedWords = removedWords.replace(" ", ""));

  removedWords = removedWords.split(" ");

  let getServices = {};

  console.log(removedWords, "removedWords")

  let spaServices = ["wax", "bath", "body"];
  let barberServices = ["hair", "beard"];
  let massageServices = ["body"];

  let gettingServicesFunc = (item, i, services, serviceNameTolowerCase) => {
    if (Object.keys(getServices).includes(item)) {
      let checkDup = getServices[item].some((obj) => {
        let lowerTheName = obj.name.toLowerCase();
        return lowerTheName.includes(serviceNameTolowerCase);
      });
      !checkDup && getServices[item].push(services[item][i]);
    } else {
      getServices[item] = [services[item][i]];
    }
  };

  for (let item in services) {
    for (let i = 0; i < services[item].length; i++) {
      let serviceNameTolowerCase = services[item][i].name.toLowerCase();
      let itemToLowerCase = item.toLowerCase();

      removedWords.forEach((word) => {
        // if (
        //   itemToLowerCase.includes(word) ||
        //   serviceNameTolowerCase.includes(word)
        // ) {
        //   if (serviceNameTolowerCase.includes(word)) {
        //     if (Object.keys(getServices).includes(item)) {
        //       let checkDup = getServices[item].some((obj) => {
        //         let lowerTheName = obj.name.toLowerCase();
        //         return lowerTheName.includes(serviceNameTolowerCase);
        //       });
        //       !checkDup && getServices[item].push(services[item][i]);
        //     } else {
        //       getServices[item] = [services[item][i]];
        //     }
        //   }
        // } 
        // else 
        if (itemToLowerCase.includes(word)) {
          // console.log(itemToLowerCase.includes(word), "itemToLowerCase.includes(word)")

          if (Object.keys(getServices).includes(item)) {
            // console.log(getServices[item] ,"kkk")

            services[item].forEach((ser, index, arr) => {
            
              getServices[item].push(ser);
            });
          } 
          else {
            getServices[item] = [services[item][i]];
          }


        } 
        
        // else if (word == "barber") {
        //   if (
        //     itemToLowerCase.includes(word) ||
        //     serviceNameTolowerCase.includes(word) ||
        //     barberServices.some((item) => serviceNameTolowerCase.includes(item))
        //   ) {
        //     gettingServicesFunc(item, i, services, serviceNameTolowerCase);
        //   }
        // } else if (word == "spa") {
        //   if (
        //     itemToLowerCase.includes(word) ||
        //     serviceNameTolowerCase.includes(word) ||
        //     spaServices.some((item) => serviceNameTolowerCase.includes(item))
        //   ) {
        //     gettingServicesFunc(item, i, services, serviceNameTolowerCase);
        //   }
        // }
        // else if (word == "massage") {
        //   if (itemToLowerCase.includes(word) || serviceNameTolowerCase.includes(word) || spaServices.some((item) => serviceNameTolowerCase.includes(item))) {
        //     gettingServicesFunc(item, i, services, serviceNameTolowerCase);
        //   }
        // }
      });
    }
  }
  console.log(getServices, "gs");
};

export default servicesOfSpecialist;
