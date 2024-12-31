import React from 'react'
import { salonDataZustandStore, selectedServicesStore } from '../../zustandStore';

const MakeAppointment = () => {

  const { presistedSelectedServices, setPresistedSelectedServices } =
    selectedServicesStore((state) => state);

        const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore((state) => state)
    

  console.log(presistedSelectedServices, "w")
  console.log(salonDataZustand, "salonDataZustand")

  return (
    <div>MakeAppointment</div>
  )
}

export default MakeAppointment