import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookingServices from "./BookingServices";
import { StarFilled } from "@ant-design/icons";
import { getSpecialistsOfService } from "../../ownModules/specialistServices/getSpecialistsOfService";
import { salonDataZustandStore } from "../../zustandStore";
import { getSelectedAndSuggestedSpecialists } from "../../ownModules/specialistServices/getSelectedAndSuggestedSpecialists";

const ProfessionalWithService = () => {
  let location = useLocation();

  let specialist = location.state.teamMember;
  let specialistServices = location.state.getSpecialistServices;
  const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore(
    (state) => state
  );

  let { servicesWithoutUnderscore, professionalsList, selectedServices } =
    salonDataZustand;

  professionalsList = professionalsList[0];

  const [triggerUseEffect, setTriggerUseEffect] = useState(false);
  const [selectedSpecialistInDrawer, setSelectedSpecialistInDrawer] = useState()
  

  // adds selected and suggested specialists to store
  useEffect(() => {
    const propsObj = {
      professionalsList,
      selectedServices,
      servicesWithoutUnderscore,
      specialist,
      salonDataZustand,
      setSalonDataZustand,
    //   selectedSpecialistInDrawer: selectedSpecialistInDrawer,
    //   setSelectedSpecialistInDrawer: setSelectedSpecialistInDrawer,
    };

    const get_selected_and_suggested_specialists = getSelectedAndSuggestedSpecialists(propsObj);
    setSalonDataZustand(get_selected_and_suggested_specialists);
  }, [triggerUseEffect]);

  let imgPathSliced = specialist.memberImg.slice(18);

  let toAppointmentPage = true;

  return (
    <div>
      <div className="relative mt-20">
        <div className="w-24 h-24 ">
          <img
            src={imgPathSliced}
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="absolute border top-20 left-5 border-gray-300 rounded-full bg-white px-2 flex gap-1">
          <div>
            <p>{specialist.memberRating}</p>
          </div>
          <div>
            <StarFilled />
          </div>
        </div>

        <div className="text-center w-24 mt-3">
          <div>
            <p>{specialist.memberName}</p>
          </div>

          <div className="text-ellipsis text-center">
            <h4 className="text-xs truncate">{specialist.memberSpeciality}</h4>
          </div>
        </div>
      </div>
      <div>
        <BookingServices
          triggerUseEffect={triggerUseEffect}
          setTriggerUseEffect={setTriggerUseEffect}
          specialistServices={specialistServices}
          toAppointmentPage={toAppointmentPage}
        />
      </div>
    </div>
  );
};

export default ProfessionalWithService;
