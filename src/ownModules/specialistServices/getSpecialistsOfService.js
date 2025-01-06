import { splittingServiceWords } from "../removing/removeWordsjs";

export const getSpecialistsOfService = function ( professionalsList, selectedServices, allServices) {

  let memberWithService = [];

  // to push whole obj, e.g: {key : [full array]}
  professionalsList.forEach((item) => {
    
    let wordsSplitted = splittingServiceWords(item);
    
    Object.entries(allServices).forEach((service, index) => {
      let headingLowered = service[0].toLowerCase();
      
      // var a = 15
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

    let wordsSplitted = splittingServiceWords(item);
    
    for (let serviceItem in allServices) {
      for (let inServiceItems of allServices[serviceItem]) {
        let serviceLowered = inServiceItems?.name?.toLowerCase();
        
        wordsSplitted.forEach((word) => {
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

  return memberWithService;
};