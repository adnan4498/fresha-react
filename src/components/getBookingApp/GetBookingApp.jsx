import React from 'react'
import purpleBookingBg from "../../../public/images/book-app-purple-bg.png"
import yellowBookingBg from "../../../public/images/book-app-yellow-bg.png"
import { AppleFilled, GoogleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import spicyWomen from "../../../public/images/spicy-women-img.webp"
import calenderImg from "../../../public/images/calender-small-img.webp"

const GetBookingApp = () => {
    return (
        <>
            <div className='mt-16 '>
                <div className='border border-gray-300 rounded-3xl relative overflow-hidden'>
                    <div className='h-[635px]'>
                        <img src={purpleBookingBg} className='rounded-3xl h-full' />
                    </div>
                    <div className='absolute top-4 h-[98%] p-5'>
                        <div className='flex flex-col justify-between h-full'>
                            {/* <div className=''> */}
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <span>Available on <AppleFilled /> <GoogleOutlined /></span>
                                </div>

                                <div>
                                    <span className='tartufoo-bold text-2xl'>Book app for customers</span>
                                </div>

                                <div>
                                    Book unforgettable beauty and wellness experiences with the Fresha mobile app - the best way to discover top-rated salons and spas
                                </div>

                                <div>
                                    <Button className="w-32 text-base border-black bg-[#0d1619] text-white py-5 rounded-lg">
                                        <p>Get the app</p>
                                    </Button>
                                </div>
                            </div>
                            <div className='w-full flex justify-center mt-16'>
                                <div className='w-60'>
                                    <img src={spicyWomen} className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className='mt-16 '>
                <div className='border border-gray-300 rounded-3xl relative overflow-hidden'>
                    <div className='h-[611px]'>
                        <img src={yellowBookingBg} className='rounded-3xl h-full' />
                    </div>
                    <div className='absolute top-4 h-[98%] p-5'>
                        <div className='flex flex-col justify-between h-full'>
                            {/* <div className=''> */}
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <span>Available on <AppleFilled /> <GoogleOutlined /></span>
                                </div>

                                <div>
                                    <span className='tartufoo-bold text-2xl'>Book app for customers</span>
                                </div>

                                <div>
                                    Book unforgettable beauty and wellness experiences with the Fresha mobile app - the best way to discover top-rated salons and spas
                                </div>

                                <div>
                                    <Button className="w-32 text-base border-black bg-[#0d1619] text-white py-5 rounded-lg">
                                        <p>Get the app</p>
                                    </Button>
                                </div>
                            </div>
                            <div className='w-full flex justify-center mt-16'>
                                <div className='w-60'>
                                    <img src={calenderImg} className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default GetBookingApp