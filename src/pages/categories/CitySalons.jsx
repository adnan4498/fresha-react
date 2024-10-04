import React from 'react'
import { useMatches } from 'react-router-dom'
import globalSalons from '../../data/salondata/global/globalSalonData'
import CarouselWithServices from '../../components/carousel/CarouselWithServices'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'

const CitySalons = () => {

    let match = useMatches()
    const { category, city, name } = match[0].params;


    console.log(match, "match")

    let getCitySalons = globalSalons.filter(item => item.city == match[0].params.city)
    let getCitySalonsOnCategory = getCitySalons.filter(item => item.category = match[0].params.category)
    
    console.log(getCitySalonsOnCategory, "get city salons")


  return (
    <>
   <div className='my-3'> <BreadCrumbs /> </div>
    <h2 className='my-6'>Best {category} near me in {city}</h2>
    <div className='mt-10'>
        <CarouselWithServices salons={getCitySalonsOnCategory} />
    </div>
    </>
  )
}

export default CitySalons