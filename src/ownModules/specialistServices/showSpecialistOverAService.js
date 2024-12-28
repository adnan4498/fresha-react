export const showSpecialistOverAService = function (
  professionalsList,
  selectedServices,
  allServices
) {
  console.log(professionalsList, "professionals");
  console.log(selectedServices, "selectedServices");
  console.log(allServices, "allServices");

  const splittingServiceWords = (item) => {
    let speciality = item.memberSpeciality.toLowerCase();

    let regex = /\b(yoga|specialist|therapist|head|technician|stylist)\b|&/gi;
    let removedWords = speciality.replace(regex, "").trim();
    removedWords.includes("  ") &&
      (removedWords = removedWords.replace(" ", ""));
    return (removedWords = removedWords.split(" "));
  };

  let spaServices = ["spa", "bath", "body",];
  let barberServices = ["hair", "beard"];
  let massageServices = ["massage", "body"];
  let waxServices = ["wax", "body", "bath"];
  let skincareServices = ["skincare", "facial"];
  let beautyServices = ["beauty", "skincare", "facial", "pamper", "makeup"];

  let memberWithService = [];

  professionalsList.forEach((item) => {
    let wordsSplitted = splittingServiceWords(item);

    Object.entries(allServices).forEach((service, index) => {
      let headingLowered = service[0].toLowerCase();
      // console.log(service[1], "1")

      wordsSplitted.forEach((word) => {
        if (headingLowered.includes(word)) {
          if (!memberWithService.some((members) => members?.memberName?.includes(item.memberName))) {
            memberWithService.push({ ...item, memberServices: service[1] });
          }
        }
      });
    });
  });

  professionalsList.forEach((item) => {
    let wordsSplittedAgain = splittingServiceWords(item);

    wordsSplittedAgain.includes("spa") && (wordsSplittedAgain = spaServices)
    
    console.log(wordsSplittedAgain , " + " , item)

    for (let serviceItem in allServices) {
      for (let inServiceItems of allServices[serviceItem]) {
        let serviceLowered = inServiceItems?.name?.toLowerCase();
        
        
        wordsSplittedAgain.forEach((word) => {
          if(serviceLowered?.includes(word)) {
            memberWithService.forEach((members) => {
              let checkDup = members?.memberServices.some(serviceDup => serviceDup?.name?.includes(inServiceItems.name))
                
              if(!checkDup){
                // console.log(serviceLowered , " + " , item)
                members?.memberServices.push(inServiceItems)
              } 
            }
            )
          }
        });
      }
    }
  });

  // for(let serviceItem in allServices){
  //   for(let inServiceItems of allServices[serviceItem]){
  //     let lowered = inServiceItems.name.toLowerCase();

  //     console.log(Object.keys(allServices), "swsw")

  //     wordsSplitted.forEach((word) => {
  //       if(lowered.includes(word)) {
  //         if(memberWithService.some(members => members?.memberName?.includes(item.memberName))){
  //           memberWithService.forEach((members, index) => {
  //             let checkDup = members?.memberServices.some(serviceDup => serviceDup.name.includes(inServiceItems.name))

  //               !checkDup && members?.memberServices.push(inServiceItems)
  //             }
  //           )
  //         }
  //         else{
  //           memberWithService.push({...item, memberServices :[{...inServiceItems}]})
  //         }
  //       }
  //     });
  //   }
  // }

  console.log(memberWithService, "mws");

  // let ab = {name : "adnan", class : 10}
  // let bb = {city : "karachi"}

  // let cc = {...ab, ...bb}

  // console.log(cc, "cc")
};
