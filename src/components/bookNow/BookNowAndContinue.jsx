import React from 'react'
import { useNavigate } from 'react-router-dom'
import { salonDataZustandStore } from '../../zustandStore'

const BookNowAndContinue = ({ props, showBookNowBtn = false, toAppointmentPage = false, is_dynamic_url_professional_per_service = false }) => {

    const salonDataZustand = salonDataZustandStore((state) => state.salonDataZustand)

    const { categoryName, cityName, currencySymbol, salonName, salonServicesLength, selectedServices, servicesWithoutUnderscore, professionalsList, priceAndDuration } = salonDataZustand

    const navigate = useNavigate()
    const serviceInCart = []

    // either to appointment page with ( professionalWithService || professionalPerService ) or chose professional
    let dynamicUrl

    if (toAppointmentPage) {
        dynamicUrl = "bookingService/professionalWithService/makeAppointment"
    } 
    else if (is_dynamic_url_professional_per_service) {
        dynamicUrl = "bookingService/selectProfessional/professionalPerService/makeAppointment"
    }
    else {
        dynamicUrl = "bookingService/selectProfessional"
    }
    
    return (
        <>
            {showBookNowBtn && <div>
                <div className="fixed flex justify-between items-center px-5 mt-10 py-5 bottom-0 w-[100%] left-0 border-t border-gray-400 text-center bg-white">
                    <div>
                        <h3 className='text-left text-[#757676]'> {salonServicesLength} services available</h3>
                    </div>

                    <div onClick={() => navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/groupOrPersonal`, {
                        state: {
                            servicesWithoutUnderscore,
                            currencySymbol,
                            serviceInCart,
                        }
                    })} className='bg-black text-white rounded-lg items-center flex px-8 py-2'>
                        <p>Book now</p>
                    </div>
                </div>
            </div>}


            {/* {console.log(priceAndDuration, 'priceAndDuration')} */}
            {/* {priceAndDuration?.price != 0 && priceAndDuration != undefined ? ( */}
            {selectedServices?.length != 0 ? (

                <div className="fixed flex justify-between px-5 mt-10 py-5 bottom-0 w-[100%] left-0 border-t border-gray-400 text-center bg-white">
                    <div className="">
                        <div>
                            <h3 className="text-left font-semibold text-black">
                                {/* writing code in `${}` will add space between currencySymbol and price */}
                                {priceAndDuration?.price?.includes(currencySymbol) ? priceAndDuration?.price : `${currencySymbol} ${priceAndDuration?.price}`}


                            </h3>
                        </div>

                        <div className="flex gap-2 text-sm">
                            <div>
                                {" "}
                                {salonDataZustand?.selectedServices?.length} service{salonDataZustand?.selectedServices?.length > 1 && "s"}{" "}
                            </div>

                            <div>
                                {priceAndDuration?.duration}
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/${dynamicUrl}`)} className="bg-black text-white rounded-lg items-center flex px-8">
                        <p>Continue</p>
                    </div>

                </div>
            ) : ""
            }
        </>
    )
}

export default BookNowAndContinue