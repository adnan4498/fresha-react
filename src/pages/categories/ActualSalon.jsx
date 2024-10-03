import React from 'react'
import { useMatches } from 'react-router-dom'
import globalSalons from '../../data/salondata/global/globalSalonData'
import CarouselWithServices from '../../components/carousel/CarouselWithServices'

const ActualSalon = () => {

    let match = useMatches()

    console.log(globalSalons , "shuffled")

    console.log(match, "match")

    let getCitySalons = globalSalons.filter(item => item.name == match[0].params.name)

    console.log(getCitySalons, "specific city salons1")

  return (
    <>
    <div>Actual Salon</div>
    <div className='mt-10'>
        <CarouselWithServices salons={getCitySalons} />
    </div>
    </>
  )
}

export default ActualSalon