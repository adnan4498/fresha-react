import React, { useState } from 'react'
import { salonDataZustandStore, selectedServicesStore } from '../../zustandStore';
import { CloseOutlined, DownOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import BookNowAndContinue from '../../components/bookNow/BookNowAndContinue';

const ProfessionalPerService = () => {

    const presistedSelectedServices = selectedServicesStore((state) => state.presistedSelectedServices);
    const salonDataZustand = salonDataZustandStore((state) => state.salonDataZustand)

    const { categoryName, cityName, currencySymbol, salonName, salonServicesLength, servicesWithoutUnderscore, professionalsList, priceAndDuration } = salonDataZustand

    console.log(presistedSelectedServices)


    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState("left");
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='mb-28'>
            <div>
                <h2> Select professional</h2>
            </div>

            <Drawer
                title={
                    <div className="flex justify-between items-center">
                        <div className="w-[74px]">
                            {/* <img src={logo} /> */}
                            asd
                        </div>
                        <div onClick={() => onClose()} className="pt-1">
                            <CloseOutlined className="text-lg" />
                        </div>
                    </div>
                }
                placement={"bottom"}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
                className='professional-per-service-drawer'
            >
                <div>
                    asd
                </div>
            </Drawer>

            <div className='mt-4'>
                {/* {presistedSelectedServices.map((item, i) => ( */}
                {salonDataZustand.selectedServices.map((item, i) => (
                    <>
                        <div className='py-2'>
                            <div className='text-lg font-semibold'>
                                {item.name}
                            </div>
                            <div>
                                <h3>
                                    {item.duration}
                                </h3>
                            </div>

                            <div onClick={showDrawer} className='border border-gray-300 rounded-full pl-[4px] py-[2px] mt-3 w-[55%]'>
                                <div className='flex items-center justify-between gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-blue-50 rounded-full w-8 h-8  flex justify-center items-center'> <div className='text-blue-300 text-xs'><UserOutlined /> </div></div>
                                        <div className='font-medium text-sm'>Any Professional</div>
                                    </div>
                                    <div className='text-xs pr-4'><DownOutlined /></div>
                                </div>
                            </div>
                            <div className='mt-5'>

                                <hr></hr>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <BookNowAndContinue />
        </div>
    )
}

export default ProfessionalPerService