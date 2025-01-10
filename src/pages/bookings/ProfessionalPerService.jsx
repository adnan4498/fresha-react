import React, { useState } from 'react'
import { salonDataZustandStore } from '../../zustandStore';
import { CloseOutlined, DownOutlined, RightOutlined, StarFilled, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import BookNowAndContinue from '../../components/bookNow/BookNowAndContinue';
import removingDuplicates from '../../ownModules/removing/removeDuplicates';
// import removingDuplicates from '../../ownModules/removeDuplicates/removeDuplicates';

const ProfessionalPerService = () => {

    const salonDataZustand = salonDataZustandStore((state) => state.salonDataZustand)
    let { categoryName, cityName, currencySymbol, salonName, salonServicesLength, servicesWithoutUnderscore, professionalsList, priceAndDuration } = salonDataZustand

    const [drawerData, setDrawerData] = useState()
    const [clickedSpecialist, setClickedSpecialist] = useState()
    // const [selectedSpecialistInDrawer, setSelectedSpecialistInDrawer] = useState({specialistItems: { memberName: "Any Professional"}, specialistIndex: 0})
    const [selectedSpecialistInDrawer, setSelectedSpecialistInDrawer] = useState()
    const [indexState, setIndexState] = useState()

    const [itemName, setItemName] = useState()

    const [isFillState, setIsFillState] = useState(true)

    professionalsList = professionalsList[0]

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

    const getImgPaths = () => {
        let fullImgUrls = []
        professionalsList?.forEach(item => fullImgUrls.push(item.memberImg))

        let removepaths = fullImgUrls.map((item) => {
            let pathSliced = item.slice(18)
            return pathSliced
        })

        return removepaths
    }

    let imgPaths = getImgPaths()



    const fillSelectedSpecialistState = (arr) => {
        let ppp = []

        if (isFillState == true) {
            setIsFillState(false)
            for (let i = 0; i < arr.length; i++) {
                // setSelectedSpecialistInDrawer([ {...selectedSpecialistInDrawer} ,{specialistItems: { memberName: "Any Professional"}, specialistIndex: i}])
                ppp.push({ specialistItems: { memberName: `Any Professional` }, specialistIndex: i })
            }
            setSelectedSpecialistInDrawer(ppp)
        }
    }

    const selectingSpecialist = (item, i) => {

        let ppp = selectedSpecialistInDrawer

        ppp = ppp.map((items) => {
            if (items.specialistIndex == indexState) {
                return { ...items, specialistItems: { memberName: item.memberName } }
            }
            else {
                return items
            }
        })

        setSelectedSpecialistInDrawer(ppp)

        setOpen(false)

    }

    const onClose = () => {
        setOpen(false);
    };

    let toAppointmentPage = true

    console.log(selectedSpecialistInDrawer, "SelectedSpecialistInDrawer")

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

                    <div className="grid grid-cols-2 gap-3 mt-5">

                        <div className='border-[1px] border-gray-500 rounded-lg py-4 h-48 flex flex-col justify-center items-center gap-4'>
                            <div className='text-3xl min-h-[50px]'><UsergroupAddOutlined /></div>
                            <div className='text-center' >
                                <span className='text-base'> Any professional </span>
                                <h3 className='text-xs'> for maximum availability </h3>
                            </div>
                        </div>

                        {drawerData?.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => [setClickedSpecialist(i) , selectingSpecialist(item, i)]}
                                className={`border-[1px] ${clickedSpecialist === i ? "border-blue-500" : "border-gray-500"
                                    } rounded-lg py-4 h-48 flex flex-col justify-center items-center gap-4`}
                            >
                                <div className="relative">
                                    <div className="w-24 h-24">
                                        <img
                                            src={imgPaths[i]}
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
                                            <h4 className="text-xs truncate">{item.memberSpeciality}</h4>
                                        </div>
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

                            <div onClick={() => [showDrawer(item), getDrawerData(item, salonDataZustand), fillSelectedSpecialistState(arr), setIndexState(i)]} className='border border-gray-300 rounded-full pl-[4px] py-[2px] mt-3 w-[55%]'>
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