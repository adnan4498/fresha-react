import React from 'react'
import { useMatches } from 'react-router-dom'
import globalSalons from '../../data/salondata/global/globalSalonData'
import CarouselWithServices from '../../components/carousel/CarouselWithServices'

const CitySalons = () => {

    let match = useMatches()

    console.log(globalSalons , "shuffled")

    console.log(match, "match")

    let getCitySalons = globalSalons.filter(item => item.city == match[0].params.city)

    console.log(getCitySalons, "specific city salons1")

  return (
    <>
    <div>CitySalons</div>
    <div className='mt-10'>
        <CarouselWithServices salons={getCitySalons} />
    </div>
    </>
  )
}

export default CitySalons