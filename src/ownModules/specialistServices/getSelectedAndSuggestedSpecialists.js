import { getSpecialistsOfService } from "./getSpecialistsOfService";

export const getSelectedAndSuggestedSpecialists = (props) => {
  let professionalsList = props.professionalsList;
  let selectedServices = props.selectedServices;
  let servicesWithoutUnderscore = props.servicesWithoutUnderscore;
  let specialistOfServices = props.specialist || props.professionalsOfServices;

  let salonDataZustand = props.salonDataZustand;

  const gettingSelectedSpecialist = () => {
    const get_professionals_with_services_obj = getSpecialistsOfService(
      professionalsList,
      selectedServices,
      servicesWithoutUnderscore
    );

    // const filterSpecialists = get_professionals_with_services_obj.filter(item => item.memberName == specialist.memberName)
    const filterSpecialists = get_professionals_with_services_obj.filter(
      (item) => item.memberName == specialistOfServices.memberName
    );

    return filterSpecialists;
  };

  let getSpecialist = gettingSelectedSpecialist();

  const gettingSuggestedSpecialists = () => {
    let get_professionals_with_services_obj = getSpecialistsOfService(
      professionalsList,
      selectedServices,
      servicesWithoutUnderscore
    );

    let professionalsAgainstServices = [];

    for (let professionals of get_professionals_with_services_obj) {
      for (let services of selectedServices) {
        professionals.memberServices.forEach(
          (item) =>
            item.name == services.name &&
            professionalsAgainstServices.push(professionals)
        );
      }
    }

    let removeDupProfessionals = [];

    professionalsAgainstServices.forEach((item) => {
      let isDup = removeDupProfessionals?.some((items) =>
        items?.memberName.includes(item.memberName)
      );
      !isDup && removeDupProfessionals.push(item);
    });

    return removeDupProfessionals;
  };

  let getSuggestedSpecialists = gettingSuggestedSpecialists();

  let specialists_obj_against_services_length = [];
  for (let i = 0; i < selectedServices.length; i++) {
    specialists_obj_against_services_length.push({
      // specialistItems: { memberDetails: { memberName: `Any Professional` } },
      specialistItems: { memberDetails: { memberName: getSpecialist[0]?.memberName || "Any Professional" } },
      specialistIndex: i,
      serviceName: selectedServices[i].name,
    });
  }

  let addSpecialistsToStorage = {
    ...salonDataZustand,
    selectedSpecialists: specialists_obj_against_services_length,
    suggestedSpecialists: getSuggestedSpecialists,
  };

  return addSpecialistsToStorage;
};
