import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BookingServices from './BookingServices'
import { StarFilled } from '@ant-design/icons'
import { getSpecialistsOfService } from '../../ownModules/specialistServices/getSpecialistsOfService'
import { salonDataZustandStore, selectedServicesStore } from '../../zustandStore'

const ProfessionalWithService = () => {

    let location = useLocation()

    let specialist = location.state.teamMember
    let specialistServices = location.state.getSpecialistServices

    const presistedSelectedServices = selectedServicesStore((state) => state.presistedSelectedServices);
    const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore((state) => state)

    const { servicesWithoutUnderscore, professionalsList } = salonDataZustand

    // console.log(salonDataZustand, "salonDataZustand")

    const [triggerUseEffect, setTriggerUseEffect] = useState(false)

    // adds selected and suggested specialists to store
    useEffect(() => {

        const gettingSelectedSpecialist = () => {

            const get_professionals_with_services_obj = getSpecialistsOfService(professionalsList[0], presistedSelectedServices, servicesWithoutUnderscore)
            const filterSpecialists = get_professionals_with_services_obj.filter(item => item.memberName == specialist.memberName)

            return filterSpecialists
        }

        let getSpecialist = gettingSelectedSpecialist()

        const gettingSuggestedSpecialists = () => {
            let get_professionals_with_services_obj = getSpecialistsOfService(professionalsList[0], presistedSelectedServices, servicesWithoutUnderscore)

            let professionalsAgainstServices = []

            for (let professionals of get_professionals_with_services_obj) {
                for (let services of presistedSelectedServices) {
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

        let getSuggestedSpecialists = gettingSuggestedSpecialists()

        let addSpecialistsToStorage = { ...salonDataZustand, selectedSpecialists: getSpecialist, suggestedSpecialists: getSuggestedSpecialists }
        setSalonDataZustand(addSpecialistsToStorage)

    }, [triggerUseEffect])

    let imgPathSliced = specialist.memberImg.slice(18)

    let toAppointmentPage = true

    // console.log(salonDataZustand, "presisted again")

    return (
        <div>
            <div className='relative mt-20'>
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
                        <h4 className="text-xs truncate">
                            {specialist.memberSpeciality}
                        </h4>
                    </div>
                </div>
            </div>
            <div>
                <BookingServices triggerUseEffect={triggerUseEffect} setTriggerUseEffect={setTriggerUseEffect} specialistServices={specialistServices} toAppointmentPage={toAppointmentPage} />
            </div>
        </div>
    )
}

export default ProfessionalWithService