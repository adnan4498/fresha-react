import { StarFilled, UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import BookNowAndContinue from '../../components/bookNow/BookNowAndContinue';
import { salonDataZustandStore } from '../../zustandStore';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSpecialistsOfService } from '../../ownModules/specialistServices/getSpecialistsOfService';
import { isArray } from 'lodash';
import { getSelectedAndSuggestedSpecialists } from '../../ownModules/specialistServices/getSelectedAndSuggestedSpecialists';

const SelectProfessional = () => {

  const navigate = useNavigate()

  const [clickedSpecialist, setClickedSpecialist] = useState()

  const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore((state) => state)

  let { categoryName, cityName, salonName, servicesWithoutUnderscore, professionalsList, selectedServices } = salonDataZustand

  professionalsList = professionalsList[0]


  const getImgPaths = () => {
    let fullImgUrls = []
    professionalsList?.forEach(item => fullImgUrls.push(item.memberImg))

    let removepaths = fullImgUrls.map((item) => {
      let pathSliced = item.slice(18)
      return pathSliced
    })

    return removepaths
  }

  let imgPaths = getImgPaths()


  const getProfessionals = () => {
    let get_professionals_with_services_obj = getSpecialistsOfService(professionalsList, selectedServices, servicesWithoutUnderscore)

    let professionalsAgainstServices = []

    for (let professionals of get_professionals_with_services_obj) {
      for (let services of selectedServices) {
        professionals.memberServices.forEach(item => item.name == services.name && professionalsAgainstServices.push(professionals))
      }
    }

    let removeDupProfessionals = []

    professionalsAgainstServices.forEach((item) => {
      let isDup = removeDupProfessionals?.some(items => items?.memberName.includes(item.memberName))
      !isDup && removeDupProfessionals.push(item)
    })

    return removeDupProfessionals
  }

  const professionalsOfServices = getProfessionals()

  useEffect(() => {

    const propsObj = {
      professionalsList,
      selectedServices,
      servicesWithoutUnderscore,
      professionalsOfServices,
      salonDataZustand
    };
    
    const get_Selected_and_suggested_specialists = getSelectedAndSuggestedSpecialists(propsObj);
    

    setSalonDataZustand(get_Selected_and_suggested_specialists);

  }, [])




  let isMultipleSpecialists

  const check_single_or_multiple_specialist = () => {

    const checkWord = ["hair", "barber", "spa", "massage", "wax", "skincare", "beauty", "nail"];
    const specialities = professionalsOfServices.map(item => item.memberSpeciality.toLowerCase());

    const specialistSet = new Set();

    specialities.forEach(speciality => {
      checkWord.forEach(word => {
        if (speciality.includes(word)) specialistSet.add(word);
      });
    });

    // if > 1 specialist, user chose multiple specialists for multiple services
    isMultipleSpecialists = specialistSet.size > 1;

  };

  check_single_or_multiple_specialist()

  const handleClickedSpecialist = (item, i) => {
    setClickedSpecialist(i)

    setSalonDataZustand({ ...salonDataZustand, selectedSpecialists: item })
  }

  let toAppointmentPage = true

  return (
    <div>
      <div>
        <h2> Select professional</h2>
      </div>

      <div className='grid grid-cols-2 gap-4 w-full my-10 mb-40'>

        <div className='border-[1px] border-gray-500 rounded-lg py-4 h-48 flex flex-col justify-center items-center gap-4'>
          <div className='text-3xl min-h-[50px]'><UsergroupAddOutlined /></div>
          <div className='text-center' >
            <span className='text-base'> Any professional </span>
            <h3 className='text-xs'> for maximum availability </h3>
          </div>

        </div>

        {isMultipleSpecialists ? (
          <div
            onClick={() =>
              navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/bookingService/selectProfessional/professionalPerService`)
            }
            className="border-[1px] border-gray-500 rounded-lg py-4 h-48 flex flex-col justify-center items-center gap-4"
          >
            <div className="text-3xl min-h-[50px]">
              <UserAddOutlined />
            </div>
            <span className="text-base text-center leading-[20px]">
              Select professional <br /> per service
            </span>
          </div>
        ) : (
          professionalsOfServices.map((item, i) => (
            <div
              key={i}
              onClick={() => handleClickedSpecialist(item, i)}
              className={`border-[1px] ${clickedSpecialist === i ? "border-blue-500" : "border-gray-500"
                } rounded-lg py-4 h-48 flex flex-col justify-center items-center gap-4`}
            >
              <div className="relative">
                <div className="w-24 h-24">
                  <img
                    src={imgPaths[i]}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>

                <div className="absolute border top-20 left-5 border-gray-300 rounded-full bg-white px-2 flex gap-1">
                  <div>
                    <p>{item.memberRating}</p>
                  </div>
                  <div>
                    <StarFilled />
                  </div>
                </div>

                <div className="text-center w-24 mt-3">
                  <div>
                    <p>{item.memberName}</p>
                  </div>

                  <div className="text-ellipsis text-center">
                    <h4 className="text-xs truncate">{item.memberSpeciality}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}



      </div>
      <BookNowAndContinue toAppointmentPage={toAppointmentPage} />
      {/* <BookingServices triggerUseEffect={triggerUseEffect} setTriggerUseEffect={setTriggerUseEffect}  toAppointmentPage={toAppointmentPage} /> */}

    </div >
  )
}

export default SelectProfessional