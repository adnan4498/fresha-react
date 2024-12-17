import { UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import React from 'react'
import { useLocation } from 'react-router-dom';

const SelectProfessional = () => {

  const location = useLocation();

  let ggg = location.state.professionalsList

  console.log(ggg, "ggg")

  return (
    <div>
      <div>
        <h2> Select professional</h2>
      </div>

      <div className='flex justify-center items-center gap-4 w-full my-10'>
        <div
          className='border-[1px] border-gray-500 rounded-lg py-4 h-48 w-6/12 flex flex-col justify-center items-center gap-4'>
          <div className='text-3xl min-h-[50px]'><UsergroupAddOutlined /></div>
          <div className='text-center' >
            <span className='text-base'> Any professional </span>
            <h3 className='text-xs'> for maximum availability </h3>
          </div>
        </div>

        <div
          className='border-[1px] border-gray-500 rounded-lg py-4 h-48 w-6/12 flex flex-col justify-center items-center gap-4'>

          <div className="text-3xl min-h-[50px]"><UserAddOutlined /></div>
          <span className='text-base text-center leading-[20px]'>Select professional <br></br>per service </span>
        </div>
      </div>
    </div>
  )
}

export default SelectProfessional