import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import allDubaiSalons, { FujairahSalons } from '../data/salondata/dubai/dubaiData';
import { Card } from 'antd';
import { StarFilled } from '@ant-design/icons';
import allPakistanSalons from '../data/salondata/pakistan/pakistanData';
import { Link } from 'react-router-dom';

const SalonCarousels = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 70,
        }
    };

    // console.log(allDubaiSalons, "all dubai salons")
    // console.log(Fujairah, "Fujairah salon")

    console.log(allPakistanSalons, "all pakistan salons")

    return (
        <div>
            <div>
                <div className='mb-3'>
                    <h2>Dubai</h2>
                </div>

                <div className=''>
                    <Carousel partialVisible={true} responsive={responsive}>
                        {allDubaiSalons.map((item, index) => (
                            <div key={index} className='overflow-ellipsis'>
                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    cover={<img alt="example" src={item.img1} className='h-36 object-cover' />}
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
                                        <span className='line-clamp-1'>{item.address}</span>
                                    </div>
                                    <div className='border border-gray-400 rounded-full w-fit text-center mt-2'>
                                        <span className='text-sm font-medium px-2'>{item.speciality}</span>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>



            <div>
                <div className='mb-3 mt-10'>
                    <h2>Pakistan</h2>
                </div>

                <div className=''>
                    <Carousel partialVisible={true} responsive={responsive}>
                        {allPakistanSalons.map((item, index) => (

                            <div key={index} className='overflow-ellipsis'>


                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    cover={<img alt="example" src={item.img1} className='h-36 object-cover' />}
                                >
                                    <Link
                                        to={`/dynamic-category/${item.category}`}
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
                                            <span className='line-clamp-1'>{item.address}</span>
                                        </div>
                                        <div className='border border-gray-400 rounded-full w-fit text-center mt-2'>
                                            <span className='text-sm font-medium px-2'>{item.speciality}</span>
                                        </div>
                                    </Link>
                                </Card>
                            </div>

                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default SalonCarousels