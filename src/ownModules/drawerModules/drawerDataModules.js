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
  let selectedSpecialistArr =
    selectedSpecialistInDrawer || salonDataZustand.selectedSpecialists;
  let getClickedSpecialist = salonDataZustand.suggestedSpecialists.filter(
    (spe) => spe.memberName.includes(item.memberName)
  );

  console.log(selectedSpecialistArr, "selectedSpecialistArr");
  console.log(getClickedSpecialist, "getClickedSpecialist");

  selectedSpecialistArr = selectedSpecialistArr.map((items) => {
    if (items.specialistIndex == indexState) {
      return {
        ...items,
        specialistItems: { memberDetails: getClickedSpecialist[0] },
      };
    } else {
      return items;
    }
  });

  setSelectedSpecialistInDrawer(selectedSpecialistArr);
  setSalonDataZustand({
    ...salonDataZustand,
    selectedSpecialists: selectedSpecialistArr,
  });

  setOpenDrawer(false);
};

export const printSpecialistNameInDropwDown = function (
  index,
  selectedSpecialists
) {
  for (let i = 0; i < selectedSpecialists.length; i++) {
    if (selectedSpecialists[i].specialistIndex == index) {
        
      // print specialistName or print Any Professional
      return selectedSpecialists[i].specialistItems.memberDetails.memberName;
    }
  }
};
