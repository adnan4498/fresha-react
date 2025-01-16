import removingDuplicates from "../removing/removeDuplicates";

export const handleDrawerData = (item, arr) => {
  let specialists = arr.suggestedSpecialists;
  let getSpecialists = new Set();

  for (let specialistItems of specialists) {
    for (let memberServices of specialistItems.memberServices) {
      memberServices.name.includes(item.name) &&
        getSpecialists.add(specialistItems);
    }
  }

  return getSpecialists = removingDuplicates(getSpecialists);
};


export const handleSelectingSpecialistInDrawer = (item, selectedSpecialistInDrawer, setSelectedSpecialistInDrawer, salonDataZustand, setSalonDataZustand, indexState, setOpen) => {

    let selectedSpecialistArr = selectedSpecialistInDrawer || salonDataZustand.selectedSpecialists
    let getClickedSpecialist = salonDataZustand.suggestedSpecialists.filter(spe => spe.memberName.includes(item.memberName))

    console.log(selectedSpecialistArr, "selectedSpecialistArr")
    console.log(getClickedSpecialist, "getClickedSpecialist")

    selectedSpecialistArr = selectedSpecialistArr.map((items) => {
        if (items.specialistIndex == indexState) {
            return { ...items, specialistItems: { memberDetails: getClickedSpecialist[0] } }
        }
        else {
            return items
        }
    })

    setSelectedSpecialistInDrawer(selectedSpecialistArr)
    setSalonDataZustand({ ...salonDataZustand, selectedSpecialists: selectedSpecialistArr })

    setOpen(false)

}