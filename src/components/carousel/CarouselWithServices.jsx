import { StarFilled } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const CarouselWithServices = ({ salons }) => {
    return (
        <div>
            {salons.map((item, index) => (
                <div key={index} className=' my-10'>
                    <Card
                        hoverable
                        style={{

                        }}
                        cover={<img alt="example" src={item.img1} className='h-36 object-cover' />}
                    > <Link
                        to={`/dynamic-category/${item.category}/${item.city}/${item.name}`}
                    >
                            <div>
                                <p className='text-lg truncate'>{item.name}</p>
                            </div>
                            <div className='flex gap-[6px]'>
                                <div>
                                    <span className='font-bold '>{item.rating} <StarFilled /></span>
                                </div>
                                <div>
                                    <span className='text-[#616769] font-semibold'>({item.reviews})</span>
                                </div>
                            </div>
                            <div>
                                <span className='line-clamp-1 text-[#838b8d]'>{item.address}</span>
                            </div>
                            <div className='border border-blue-200 rounded-full w-fit text-center mt-2 bg-blue-100 text-blue-600'>
                                <span className='text-sm font-medium px-2'>{item.gender}</span>
                            </div>
                        </Link>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default CarouselWithServices