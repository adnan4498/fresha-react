import React from 'react'
import { useNavigate } from 'react-router-dom'
import { salonDataZustandStore, selectedServicesStore } from '../../zustandStore'

const BookNowAndContinue = (props) => {

    const presistedSelectedServices = selectedServicesStore((state) => state.presistedSelectedServices);

    const salonDataZustand = salonDataZustandStore((state) => state.salonDataZustand)

    const { categoryName, cityName, currencySymbol, salonName, salonServicesLength, servicesWithoutUnderscore, professionalsList, priceAndDuration } = salonDataZustand[0]



    // console.log(salonDataZustand, "salonDataZustand")
    // console.log(presistedSelectedServices, "presistedSelectedServices")
    // console.log(currencySymbol, "currencySymbol")

    let navigate = useNavigate()
    let serviceInCart = []

    // let salonServicesLength = props.salonServicesLength
    // let categoryName = props.categoryName
    // let cityName = props.cityName
    // let salonName = props.salonName
    // let servicesWithoutUnderscore = props.servicesWithoutUnderscore
    // let currencySymbol = props.currencySymbol
    // let professionalsList = props.professionalsList

    let showBookNowBtn = props.showBookNowBtn

    // let priceAndDuration = props.priceAndDuration
    // let presistedSelectedServices = props.presistedSelectedServices

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
                            servicesWithoutUnderscore,
                        }
                    })} className='bg-black text-white rounded-lg items-center flex px-8 py-2'>
                        <p>Book now</p>
                    </div>
                </div>
            </div>}


            {presistedSelectedServices != undefined && presistedSelectedServices.length != 0 ? (

                <div className="fixed flex justify-between px-5 mt-10 py-5 bottom-0 w-[100%] left-0 border-t border-gray-400 text-center bg-white">
                    <div className="">
                        <div>
                            <h3 className="text-left font-semibold text-black">
                                {/* writing code in `${}` will add space between currencySymbol and price */}
                                {priceAndDuration?.price
                                    ? `${currencySymbol} ${priceAndDuration?.price}`
                                    : presistedSelectedServices?.price}
                            </h3>
                        </div>

                        <div className="flex gap-2 text-sm">
                            <div>
                                {" "}
                                {presistedSelectedServices.length} service{presistedSelectedServices.length > 1 && "s"}{" "}
                            </div>

                            <div>
                                {priceAndDuration?.duration
                                    ? priceAndDuration?.duration
                                    : presistedSelectedServices?.duration}
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() =>
                            navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/bookingService/selectProfessional`,
                                {
                                    state: {
                                        presistedSelectedServices,
                                        professionalsList,
                                    },
                                }
                            )
                        }
                        className="bg-black text-white rounded-lg items-center flex px-8"
                    >
                        <p>Continue</p>
                    </div>

                </div>
            ) : ""
            }
        </>
    )
}

export default BookNowAndContinue