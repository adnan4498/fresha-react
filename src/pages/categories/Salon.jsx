import React from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'

const Salon = () => {

  let salonName = useParams()
  console.log(salonName, "salon name")
  return (
    <>
      <BreadCrumbs />
      <div>the salon {salonName.salonSlug}</div>
    </>
  )
}

export default Salon