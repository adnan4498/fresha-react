import { CloseOutlined } from '@ant-design/icons';
import { Drawer } from 'antd'
import React, { useState } from 'react'
import { handlePriceAndDuration } from '../others/handlePriceAndDuration';

const ServiceDetailsDrawer = (props) => {
    const { openDrawer, setOpenDrawer, drawerData, currencySymbol, addService, toBookingPage } = props;

    const [placement] = useState("");

    const onClose = () => {
        setOpenDrawer(false);
    };

    const handleIsPackgeData = (subServices) => {
        let subServicesPriceAndDuration = handlePriceAndDuration(subServices, currencySymbol)
        const { price, duration } = subServicesPriceAndDuration

        return (
            <>
                <div className="flex gap-2 items-center">
                    <div>
                        <h3>{duration} mins</h3>
                    </div>
                    <div>
                        -
                    </div>
                    <div>
                        <h3>{subServices.length} services</h3>
                    </div>
                </div>
                <div className="mt-2">
                    <h3>
                        {currencySymbol} {price}
                    </h3>
                </div>
            </>
        )
    };

    return (
        <div>
            <Drawer
                title={
                    <div className="flex justify-between items-center">
                        <div className="w-[74px]">
                        </div>
                        <div onClick={() => onClose()} className="pt-1">
                            <CloseOutlined className="text-lg" />
                        </div>
                    </div>
                }
                placement={"bottom"}
                closable={false}
                onClose={onClose}
                open={openDrawer}
                key={placement}
                className='professional-per-service-drawer'
            >
                <div>
                    {drawerData?.isPackage ?
                        <div>
                            <div>
                                <h2>
                                    {drawerData.name}
                                </h2>
                            </div>
                            <div className="text-base mt-5">
                                {handleIsPackgeData(drawerData.subServices)}
                            </div>
                            <div className="border-t border-gray-200 mt-5">
                                <h2 className="mt-5 text-2xl">What's included</h2>
                            </div>

                            <div className="mt-5">
                                {drawerData.subServices.map((item) => (
                                    <div className="flex flex-col mt-4">
                                        <div className="text-lg">
                                            <h3> {item.name} </h3>
                                        </div>
                                        <div className="text-sm">
                                            {item.duration}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        <>
                            <div>
                                <h2>
                                    {drawerData?.name}
                                </h2>
                            </div>
                            <div className="mt-6 text-base">
                                <h3>
                                    {drawerData?.duration + "s"}
                                </h3>
                            </div>
                            <div className="text-base text-black font-semibold">
                                <h3>
                                    {drawerData?.price}
                                </h3>
                            </div>

                            <div
                                className="fixed flex justify-between items-center px-5 mt-10 py-5 bottom-0 w-[100%] left-0 text-center bg-white"
                            >
                                <div onClick={() => {
                                    if (toBookingPage) {
                                        showClickedServiceInBookingService(drawerData.name, drawerData.price, drawerData.duration);
                                        navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/bookingService`, {
                                            state: {
                                                servicesWithoutUnderscore,
                                                serviceInCart: {
                                                    name: drawerData.name,
                                                    duration: drawerData.duration,
                                                    price: drawerData.price,
                                                },
                                                currencySymbol,
                                            },
                                        });
                                    } else {
                                        // already in bookingPage
                                        addService(drawerData);
                                    }
                                }} className="text-lg  text-white bg-black font-semibold rounded-lg w-full px-4 py-[10px] ">
                                    Add to booking
                                </div>
                            </div>
                        </>
                    }
                </div>
            </Drawer>
        </div>
    )
}

export default ServiceDetailsDrawer