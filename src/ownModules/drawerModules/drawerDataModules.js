import removingDuplicates from "../removing/removeDuplicates";

export const handleDrawerData = function (item, arr) {
  let specialists = arr.suggestedSpecialists;
  let getSpecialists = new Set();

  for (let specialistItems of specialists) {
    for (let memberServices of specialistItems.memberServices) {
      memberServices.name.includes(item.name) &&
        getSpecialists.add(specialistItems);
    }
  }

  return (getSpecialists = removingDuplicates(getSpecialists));
};

export const handleSelectingSpecialistInDrawer = function (
  item,
  selectedSpecialistInDrawer,
  setSelectedSpecialistInDrawer,
  salonDataZustand,
  setSalonDataZustand,
  indexState,
  setOpenDrawer
) {
  let selectedSpecialistArr = selectedSpecialistInDrawer || salonDataZustand.selectedSpecialists;
  let getClickedSpecialist = salonDataZustand.suggestedSpecialists.filter(
    (spe) => spe.memberName.includes(item.memberName)
  );


  console.log(selectedSpecialistInDrawer, "selectedSpecialistInDrawer")
  
  
  selectedSpecialistArr = selectedSpecialistArr.map((items, i, arr) => {
    
    console.log(arr, "arr")
    console.log(salonDataZustand, "salonDataZustand.selectedSpecialists")

    // for multiple specialists
    if (items.specialistIndex == indexState) {
      return {
        ...items,
        specialistItems: { memberDetails: getClickedSpecialist[0] },
      };
    } 
    // for single specialist
    // else if(indexState == i){
    //   return getClickedSpecialist[0]
    // }
    else {
      return items;
    }
  });

  setSelectedSpecialistInDrawer(selectedSpecialistArr);
  // setSalonDataZustand((store) => ({ ...store, salonDataZustand: { ...store.salonDataZustand, selectedSpecialists: selectedSpecialistArr, }, }))

  setSalonDataZustand((prevState) => ({
    ...prevState,
    selectedSpecialists: selectedSpecialistArr,
  }));

  setOpenDrawer(false);

};

export const printSpecialistNameInDropwDown = function (
  index,
  selectedSpecialists
) {

  for (let i = 0; i < selectedSpecialists.length; i++) {

    if (selectedSpecialists[i].specialistIndex == index) {
      // for multiple Specialists
      return selectedSpecialists[i].specialistItems.memberDetails.memberName;
    }
    
    // if (selectedSpecialists[i].specialistIndex == undefined) {
    //   // for single Specialists
    //   return selectedSpecialists[i].memberName;
    // }

  }
};
