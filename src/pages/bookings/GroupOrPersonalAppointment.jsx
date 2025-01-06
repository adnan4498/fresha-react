import React, { useEffect } from 'react'
import { useLocation, useMatches, useNavigate } from 'react-router-dom'
import { salonDataZustandStore } from '../../zustandStore';

const GroupOrPersonalAppointment = () => {

    const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore((state) => state)

    let match = useMatches();
    let navigate = useNavigate()
    const location = useLocation();

    let categoryName = match[0].params.category
    let cityName = match[0].params.city
    let salonName = match[0].params.name

    let currencySymbol = location.state.currencySymbol
    let servicesWithoutUnderscore = location.state.servicesWithoutUnderscore
    let serviceInCart = []
    
    let addEmptyServiceInCart = () => {
        setSalonDataZustand({ ...salonDataZustand, selectedServices: [] })
    }

    return (
        <div>
            <div>
                <h2> Choose an option </h2>
            </div>

            <div className='my-6'>
                <h2 className='text-2xl'> Book </h2>
            </div>

            <div className=''>
                <div onClick={() => { addEmptyServiceInCart() ,  navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/bookingService`, {
                    state: {
                        servicesWithoutUnderscore,
                        currencySymbol,
                        serviceInCart,
                    }
                })}} className='border-[1px] border-gray-500 rounded-lg py-4 pl-2 '>
                    <span> Book an appointment </span>
                    <h3 className='text-sm'> Schedule services for yourself </h3>
                </div>

                <div className='border-[1px] border-gray-500 rounded-lg py-4 pl-2 mt-4'>
                    <span> Group appointment </span>
                    <h3 className='text-sm'> for yourself and others </h3>
                </div>
            </div>
        </div>
    )
}

export default GroupOrPersonalAppointment