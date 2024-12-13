import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookNow = ({ salonServicesLength, categoryName, cityName, salonName, servicesWithoutUnderscore, currencySymbol }) => {

    let navigate = useNavigate()

    let serviceInCart = []

    console.log(salonName, "salonName")

    return (
        <div>
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
        </div>
    )
}

export default BookNow