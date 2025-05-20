import React, { useEffect, useState } from 'react'
import { salonDataZustandStore } from '../../zustandStore';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import BookNowAndContinue from '../../components/bookNow/BookNowAndContinue';
import { handleDrawerData, printSpecialistNameInDropwDown } from '../../ownModules/drawerModules/drawerDataModules';
import ProfessionalSelectingDrawer from '../../ownModules/drawerModules/DrawerOfProfessionals';

const ProfessionalPerService = () => {

    const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore((state) => state)
    let { professionalsList, selectedSpecialists, selectedServices } = salonDataZustand

    professionalsList = professionalsList[0]

    const [drawerData, setDrawerData] = useState()
    const [selectedSpecialistInDrawer, setSelectedSpecialistInDrawer] = useState()
    const [indexState, setIndexState] = useState()
    const [openDrawer, setOpenDrawer] = useState(false);

    const onClose = () => {
        setOpenDrawer(false);
    };

    const showDrawer = () => {
        setOpenDrawer(true);
    };

    // populating selectedSpecialist arr against services length. default value is Any Professional
    useEffect(() => {
        // no selectedSpecialists by user ? populate it with default value
        console.log(selectedSpecialists, "selectedSpecialists useEffect")
        if (selectedSpecialists?.length == 0) {
            let specialists_obj_against_services_length = []

            for (let i = 0; i < selectedServices.length; i++) {
                specialists_obj_against_services_length.push({ specialistItems: { memberDetails: { memberName: `Any Professional` } }, specialistIndex: i, serviceName: selectedServices[i].name })
            }
            setSelectedSpecialistInDrawer(specialists_obj_against_services_length)
            // setSalonDataZustand((store) => ({ ...store, salonDataZustand: { ...store.salonDataZustand, selectedSpecialists: specialists_obj_against_services_length  }, }))

            setSalonDataZustand((prevState) => ({ ...prevState, selectedSpecialists: specialists_obj_against_services_length}));
        }
                
    }, [])

    const getImgPaths = () => {
        let imgUrlsAndSpecialistNames = drawerData?.map(item => ({ memberImg: item.memberImg, memberName: item.memberName }))

        let removepaths = imgUrlsAndSpecialistNames?.map((item) => {
            let pathSliced = item.memberImg.slice(18)
            return { memberImg: pathSliced, memberName: item.memberName }
        })

        return removepaths
    }

    let imgPaths = getImgPaths()

    let is_dynamic_url_professional_per_service = true

    let drawerProps = {
        onClose: onClose,
        openDrawer: openDrawer,
        setOpenDrawer: setOpenDrawer,
        drawerData: drawerData,
        indexState: indexState,
        selectedSpecialists: selectedSpecialists,
        imgPaths: imgPaths,
        salonDataZustand: salonDataZustand,
        setSalonDataZustand: setSalonDataZustand,
        selectedSpecialistInDrawer: selectedSpecialistInDrawer,
        setSelectedSpecialistInDrawer: setSelectedSpecialistInDrawer,
    }


    return (
        <div className='mb-28'>
            <div>
                <h2> Select professional</h2>
            </div>

            <ProfessionalSelectingDrawer drawerProps={drawerProps} />

            <div className='mt-4'>
                {selectedServices.map((item, i, arr) => (
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

                            <div onClick={() => [showDrawer(item), setDrawerData(handleDrawerData(item, salonDataZustand)), setIndexState(i)]} className='border border-gray-300 rounded-full pl-[4px] py-[2px] mt-3 w-[55%]'>
                                <div className='flex items-center justify-between gap-2'>
                                    <div className='flex items-center gap-2'>

                                        {selectedSpecialists[i]?.specialistItems?.memberDetails?.memberImg != undefined ?

                                            <div className="w-7 h-7 border-[2px] border-white rounded-full">
                                                <img
                                                    src={selectedSpecialists[i].specialistItems?.memberDetails?.memberImg?.slice(18)}
                                                    className="rounded-full w-full h-full object-cover"
                                                />
                                            </div> :
                                            <div className='bg-blue-50 rounded-full w-8 h-8  flex justify-center items-center'> <div className='text-blue-300 text-xs'><UserOutlined /> </div></div>
                                        }

                                        {printSpecialistNameInDropwDown(i, selectedSpecialists)}

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