import React, { useState } from 'react'
import { salonDataZustandStore } from '../../zustandStore';
import { CloseOutlined, DownOutlined, RightOutlined, StarFilled, UserOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import BookNowAndContinue from '../../components/bookNow/BookNowAndContinue';
import removingDuplicates from '../../ownModules/removing/removeDuplicates';
// import removingDuplicates from '../../ownModules/removeDuplicates/removeDuplicates';

const ProfessionalPerService = () => {

    const [drawerData, setDrawerData] = useState()

    const salonDataZustand = salonDataZustandStore((state) => state.salonDataZustand)

    const { categoryName, cityName, currencySymbol, salonName, salonServicesLength, servicesWithoutUnderscore, professionalsList, priceAndDuration } = salonDataZustand

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState("left");

    const showDrawer = () => {
        setOpen(true);



    };

    const getDrawerData = (item, arr) => {
        let specialists = arr.suggestedSpecialists

        let getSpecialists = new Set()

        for (let specialistItems of specialists) {
            for (let memberServices of specialistItems.memberServices) {
                memberServices.name.includes(item.name) && getSpecialists.add(specialistItems)
            }
        }

        getSpecialists = removingDuplicates(getSpecialists)

        setDrawerData(getSpecialists)

    }

    const onClose = () => {
        setOpen(false);
    };




    // let specialistsInDrawer = (services, specialists) => {

    //     // let specialists = arr.suggestedSpecialists

    //     // let ggg = new Set()

    //     // for (let specialistItems of specialists) {
    //     //     for (let memberServices of specialistItems.memberServices) {
    //     //         memberServices.name.includes(item.name) && ggg.add(specialistItems)
    //     //     }
    //     // }

    //     // let gg = removingDuplicates(ggg)

    //     // console.log(gg, "gg")


    //     // return (
    //     //     <div>
    //     //         {gg.map(items => <div> {items.memberName} </div>)}
    //     //     </div>
    //     // )



    //     let gg = []

    //     for (let service of services) {
    //         for (let specialist of specialists) {
    //             for (let speciality of specialist.memberSpeciality) {
    //                 // console.log(speciality.speciality, "speciality")
    //                 service.name.includes(speciality.speciality) && gg.push(specialist)
    //             }
    //         }
    //     }

    //     console.log(services, "sss")

    //     return (
    //         <div>
    //             {/* {gg.map(items => <div> {items.memberName} </div>)} */}

    //              {services.map(items => items.name == "Thai Massage" ? "hi" : "hello")}
    //         </div>
    //     )
    // }

    console.log(drawerData)

    let toAppointmentPage = true

    return (
        <div className='mb-28'>
            <div>
                <h2> Select professional</h2>
            </div>


            <Drawer
                title={
                    <div className="flex justify-between items-center">
                        <div className="w-[74px]">
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
                    <div className="grid grid-cols-3 gap-10 mt-5">
                        {drawerData?.map((item, index) => (
                            <div

                                className="relative">
                                <div className="w-24 h-24 ">
                                    <img
                                        src={item.memberImg}
                                        className="rounded-full w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute border top-20 left-5 border-gray-300 rounded-full bg-white px-2 flex gap-1">
                                    <div>
                                        <p>{item.memberRating}</p>
                                    </div>
                                    <div>
                                        <StarFilled />
                                    </div>
                                </div>

                                <div className="text-center w-24 mt-3">
                                    <div>
                                        <p>{item.memberName}</p>
                                    </div>

                                    <div className="text-ellipsis text-center">
                                        <h4 className="text-xs truncate">
                                            {item.memberSpeciality}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Drawer>


            <div className='mt-4'>
                {/* {presistedSelectedServices.map((item, i) => ( */}
                {salonDataZustand.selectedServices.map((item, i, arr) => (
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

                            <div onClick={() => [showDrawer(item), getDrawerData(item, salonDataZustand)]} className='border border-gray-300 rounded-full pl-[4px] py-[2px] mt-3 w-[55%]'>
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

            <BookNowAndContinue toAppointmentPage={toAppointmentPage} />
        </div>
    )
}

export default ProfessionalPerService








{/* <Drawer
title={
    <div className="flex justify-between items-center">
        <div className="w-[74px]">
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
    {salonDataZustand.suggestedSpecialists.map((item, i) => (
        <div>
            {item.memberName}
        </div>
    ))}
</div>
</Drawer> */}