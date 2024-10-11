import React from 'react'
import { useMatches, useParams } from 'react-router-dom'

const TheComp = () => {

    let params = useParams()
    let match = useMatches()

    console.log(params, "params")
    console.log(match, "match")

  return (
    <div className='bg-red-500 h-60 w-60'>
        the comp
    </div>
  )
}

export default TheComp