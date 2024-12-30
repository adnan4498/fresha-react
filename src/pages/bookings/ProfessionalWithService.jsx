import React from 'react'
import { useLocation } from 'react-router-dom'
import BookingServices from './BookingServices'
import { StarFilled } from '@ant-design/icons'

const ProfessionalWithService = () => {

    let location = useLocation()

    let specialist = location.state.teamMember
    let specialistServices = location.state.getSpecialistServices

    let imgPathSliced = specialist.memberImg.slice(18)

    console.log(specialistServices, "gggg")

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
                <BookingServices specialistServices={specialistServices} />
            </div>
        </div>
    )
}

export default ProfessionalWithService