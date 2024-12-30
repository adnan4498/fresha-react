export const getSpecialistsOfService = function (
  professionalsList,
  selectedServices,
  allServices
) {
  const splittingServiceWords = (item) => {
    let speciality = item.memberSpeciality.toLowerCase();

    let regex = /\b(yoga|specialist|therapist|head|technician|stylist)\b|&/gi;
    let removedWords = speciality.replace(regex, "").trim();
    removedWords.includes("  ") &&
      (removedWords = removedWords.replace(" ", ""));
    return (removedWords = removedWords.split(" "));
  };

  let spaServices = ["spa", "bath", "body"];
  let barberServices = ["hair", "beard"];
  let massageServices = ["massage"];
  let waxServices = ["wax", "body", "bath"];
  let skincareServices = ["skincare", "facial"];
  let nailServices = ["nail", "pedicure", "manicure"];
  let beautyServices = ["beauty", "skincare", "facial", "pamper", "makeup"];

  let memberWithService = [];

  // to push whole obj, e.g: {key : [full array]}
  professionalsList.forEach((item) => {
    let wordsSplitted = splittingServiceWords(item);

    Object.entries(allServices).forEach((service, index) => {
      let headingLowered = service[0].toLowerCase();

      wordsSplitted.forEach((word) => {
        if (headingLowered.includes(word)) {
          if (
            !memberWithService.some((members) =>
              members?.memberName?.includes(item.memberName)
            )
          ) {
            memberWithService.push({ ...item, memberServices: service[1] });
          }
        }
      });
    });
  });

  // to push a some services, e.g: {key : [some services]}
  memberWithService.forEach((item) => {
    let wordsSplittedAgain = splittingServiceWords(item);

    // wordsSplittedAgain.includes("spa") && (wordsSplittedAgain = spaServices);

    switch (wordsSplittedAgain) {
      case "barber":
        wordsSplittedAgain = barberServices;
        break;

      case "spa":
        wordsSplittedAgain = spaServices;
        break;

      case "massage":
        wordsSplittedAgain = massageServices;
        break;

      case "wax":
        wordsSplittedAgain = waxServices;
        break;

      case "skincare":
        wordsSplittedAgain = skincareServices;
        break;

      case "beauty":
        wordsSplittedAgain = beautyServices;
        break;

      case "nail":
        wordsSplittedAgain = nailServices;
        break;

      default:
        break;
    }

    for (let serviceItem in allServices) {
      for (let inServiceItems of allServices[serviceItem]) {
        let serviceLowered = inServiceItems?.name?.toLowerCase();

        wordsSplittedAgain.forEach((word) => {
          if (serviceLowered?.includes(word)) {
            let checkDup = item.memberServices.some((serviceDup) =>
              serviceDup?.name?.includes(inServiceItems.name)
            );

            !checkDup && item.memberServices.push(inServiceItems);
          }
        });
      }
    }
  });

  // console.log(memberWithService, "mws");

  return memberWithService;
};
