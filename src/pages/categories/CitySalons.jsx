import React from 'react'
import { useMatches } from 'react-router-dom'
import globalSalons from '../../data/salondata/global/globalSalonData'
import CarouselWithServices from '../../components/carousel/CarouselWithServices'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import getCitySalonServices from '../../data/salondata/services/citySalonServices'

const CitySalons = () => {

  let match = useMatches()

  // city only comes from tapping city name on bread crumb
  // subCategory has its own city name from subCategoris.jsx
  const { category, city, subCategory } = match[0].params;

  // subCategory has city name in it, below function extracts it
  let getSubCategory
  let getCityFromSubCategory

  const seperateSubCategoryAndCity = () => {
    let allCities = [
      "karachi",
      "lahore",
      "islamabad",
      "multan",
      "sharjah",
      "abuDhabi",
      "ajman",
      "fujairah",
    ]

    let findCityIndex
    for (let item of allCities) {
      subCategory?.includes(item) ? findCityIndex = subCategory.indexOf(item) : ""
    }

    getSubCategory = subCategory?.slice(0, findCityIndex)
    getCityFromSubCategory = subCategory?.slice(findCityIndex)
  }

  seperateSubCategoryAndCity()

  let getCity = city || getCityFromSubCategory

  let getCitySalons = globalSalons.filter((item) => item.city == getCity)

  let citySalonsOnCategory = getCitySalons.filter(item => item.category = category)

  // let getCityServices = getCitySalonServices(getCitySalons)

  const gettingSingleSalonServices = () => {
    let citySalons = []

    for(let items of getCitySalons){
      citySalons.push(items)
    }

    let parentSalonServices = []

    for(let items in citySalons[0]){
      console.log(citySalons[items], "items")
    }

    console.log(citySalons, "salonsss")

    // console.log(getCityServices, "sss")

    // let citySalonsOnSubCategory = getCitySalons.filter(item => item.category = category)
  }

  gettingSingleSalonServices()

  for (let items of getCitySalons) {

    for (let services in items.services) {
      // console.log(services, "items")
    }
  }

  console.log(getCitySalons, "get city")
  // console.log(citySalonsOnSubCategory, "salons on sub-categorys")

  return (
    <div>
      <div className='my-3'> <BreadCrumbs /> </div>
      <h2 className='my-6'>Best {getSubCategory ? getSubCategory : category} near me in {getCityFromSubCategory ? getCityFromSubCategory : city}</h2>
      <div className='mt-10'>
        <CarouselWithServices salons={citySalonsOnCategory} />
      </div>
    </div>
  )
}

export default CitySalons