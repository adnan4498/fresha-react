import { StarFilled, UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import React from 'react'
import BookNowAndContinue from '../../components/bookNow/BookNowAndContinue';
import { salonDataZustandStore, selectedServicesStore } from '../../zustandStore';
import gg from "../../../public/images/salons/hairSalon/male-barber-img.avif"
import { useNavigate } from 'react-router-dom';
import { showSpecialistOverAService } from '../../ownModules/specialistServices/showSpecialistOverAService';

const SelectProfessional = () => {

  const navigate = useNavigate()

  const presistedSelectedServices = selectedServicesStore((state) => state.presistedSelectedServices);
  const salonDataZustand = salonDataZustandStore((state) => state.salonDataZustand)

  const { categoryName, cityName, currencySymbol, salonName, salonServicesLength, servicesWithoutUnderscore, professionalsList, priceAndDuration } = salonDataZustand[0]

  let imgPaths = []

  professionalsList[0].forEach(item => imgPaths.push(item.memberImg))

  let removepaths = imgPaths.map((item, i) => {
    let pathSliced = item.slice(18)
    return pathSliced
  })

  // let getSpecialistOverService = 

  // console.log(servicesWithoutUnderscore, "GSOS")

  showSpecialistOverAService(professionalsList[0], presistedSelectedServices, servicesWithoutUnderscore)

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

        {presistedSelectedServices.length > 1 && <div onClick={() => navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/bookingService/selectProfessional/professionalPerService`)}
          className='border-[1px] border-gray-500 rounded-lg py-4 h-48 flex flex-col justify-center items-center gap-4'>
          <div className="text-3xl min-h-[50px]"><UserAddOutlined /></div>
          <span className='text-base text-center leading-[20px]'>Select professional <br></br>per service </span>
        </div>}

        {professionalsList[0].map((item, i) => (
          <>
            <div
              className='border-[1px] border-gray-500 rounded-lg py-4 h-48  flex flex-col justify-center items-center gap-4'>
              <div className="relative">
                <div className="w-24 h-24 ">
                  <img
                    src={removepaths[i]}
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
                    <h4 className="text-xs truncate">
                      {item.memberSpeciality}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <BookNowAndContinue/>

    </div>
  )
}

export default SelectProfessional