import React, { useEffect, useState } from 'react'
import { salonDataZustandStore } from '../../zustandStore';
import { CloseOutlined, DownOutlined, RightOutlined, StarFilled, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import BookNowAndContinue from '../../components/bookNow/BookNowAndContinue';
import removingDuplicates from '../../ownModules/removing/removeDuplicates';
// import removingDuplicates from '../../ownModules/removeDuplicates/removeDuplicates';

const ProfessionalPerService = () => {

    const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore((state) => state)
    let { professionalsList } = salonDataZustand
    
    professionalsList = professionalsList[0]

    const [drawerData, setDrawerData] = useState()
    const [selectedSpecialistInDrawer, setSelectedSpecialistInDrawer] = useState()
    const [indexState, setIndexState] = useState()
    const [open, setOpen] = useState(false);
    const [placement] = useState("left");

    // populating selectedSpecialist arr against services length. default value is Any Professional
    useEffect(() => {
        // no selectedSpecialists by user ? populate it with default value
        if (salonDataZustand.selectedSpecialists.length == 0) {
            let specialists_obj_against_services_length = []

            for (let i = 0; i < salonDataZustand.selectedServices.length; i++) {
                specialists_obj_against_services_length.push({ specialistItems: { memberName: `Any Professional` }, specialistIndex: i, serviceName: salonDataZustand.selectedServices[i].name })
            }
            setSelectedSpecialistInDrawer(specialists_obj_against_services_length)
            setSalonDataZustand({ ...salonDataZustand, selectedSpecialists: specialists_obj_against_services_length })
        }
    }, [])

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

    const onClose = () => {
        setOpen(false);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    // getting specialists of that service for drawer
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

    const selectingSpecialist = (item) => {

        let selectedSpecialistArr = selectedSpecialistInDrawer || salonDataZustand.selectedSpecialists
        let getClickedSpecialist = salonDataZustand.suggestedSpecialists.filter(spe => spe.memberName.includes(item.memberName))

        selectedSpecialistArr = selectedSpecialistArr.map((items) => {
            if (items.specialistIndex == indexState) {
                return { ...items, specialistItems: { memberName: getClickedSpecialist[0] } }
            }
            else {
                return items
            }
        })

        setSelectedSpecialistInDrawer(selectedSpecialistArr)
        setSalonDataZustand({ ...salonDataZustand, selectedSpecialists: selectedSpecialistArr })

        setOpen(false)

    }

    function printSpecialistName(index) {
        for (let i = 0; i < salonDataZustand?.selectedSpecialists.length; i++) {
            if (salonDataZustand.selectedSpecialists[i].specialistIndex == index) {

                // print specialistName or print Any Professional
                return salonDataZustand.selectedSpecialists[i].specialistItems.memberName.memberName || salonDataZustand.selectedSpecialists[i].specialistItems.memberName
            }
        }

    }

    let is_dynamic_url_professional_per_service = true

    console.log(selectedSpecialistInDrawer, "selectedSpecialistInDrawer")
    console.log(salonDataZustand, "salonDataZustand")

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
                                onClick={() => selectingSpecialist(item)}
                                // className={`border-[1px] ${clickedSpecialist === i ? "border-blue-500" : "border-gray-500"
                                className={`border-[1px] ${printSpecialistName(indexState) == item.memberName ? "border-blue-500" : "border-gray-500"
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

                            <div onClick={() => [showDrawer(item), getDrawerData(item, salonDataZustand), setIndexState(i)]} className='border border-gray-300 rounded-full pl-[4px] py-[2px] mt-3 w-[55%]'>
                                <div className='flex items-center justify-between gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-blue-50 rounded-full w-8 h-8  flex justify-center items-center'> <div className='text-blue-300 text-xs'><UserOutlined /> </div></div>

                                        {printSpecialistName(i)}

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

            <BookNowAndContinue is_dynamic_url_professional_per_service={is_dynamic_url_professional_per_service} />
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