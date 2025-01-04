import React from 'react'
import { salonDataZustandStore } from '../../zustandStore';

const MakeAppointment = () => {



  const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore((state) => state)


  console.log(salonDataZustand, "salonDataZustand")

  return (
    <div>MakeAppointment</div>
  )
}

export default MakeAppointment