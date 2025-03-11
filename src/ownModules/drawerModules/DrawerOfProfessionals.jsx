import { CloseOutlined, StarFilled } from '@ant-design/icons'
import { Drawer } from 'antd'
import React, { useState } from 'react'
import { handleSelectingSpecialistInDrawer, printSpecialistNameInDropwDown } from './drawerDataModules';

const DrawerOfProfessionals = ({ drawerProps }) => {

    let { drawerData, openDrawer, setOpenDrawer, onClose, indexState, selectedSpecialists, imgPaths, selectedSpecialistInDrawer, setSelectedSpecialistInDrawer, salonDataZustand, setSalonDataZustand } = drawerProps

    const [placement] = useState("left");

    return (
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
            open={openDrawer}
            key={placement}
            className='professional-per-service-drawer'
        >
            <div>

                <div className="grid grid-cols-2 gap-3 mt-5">

                    <div className='border-[1px] border-gray-500 rounded-lg py-4 h-48 flex flex-col justify-center items-center gap-4'>
                        <div className='text-center' >
                            <span className='text-base'> Any professional </span>
                            <h3 className='text-xs'> for maximum availability </h3>
                        </div>
                    </div>

                    {drawerData?.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => handleSelectingSpecialistInDrawer(item, selectedSpecialistInDrawer, setSelectedSpecialistInDrawer, salonDataZustand, setSalonDataZustand, indexState, setOpenDrawer)}
                            className={`border-[1px] ${printSpecialistNameInDropwDown(indexState, selectedSpecialists) == item.memberName ? "border-blue-500" : "border-gray-500"
                                } rounded-lg py-4 h-48 flex flex-col justify-center items-center gap-4`}
                        >
                            <div className="relative">
                                <div className="w-24 h-24">
                                    <img
                                        src={ imgPaths[i]?.memberImg ? imgPaths[i]?.memberImg : imgPaths[i] }
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
    )
}

export default DrawerOfProfessionals