import React, { useState } from "react";
import { salonDataZustandStore } from "../../zustandStore";
import { CloseOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import {
  handleDrawerData,
  printSpecialistNameInDropwDown,
} from "../../ownModules/drawerModules/drawerDataModules";
import ProfessionalSelectingDrawer from "../../ownModules/drawerModules/DrawerOfProfessionals";
import DateAndTime from "../../components/appointmentComponents/DateAndTime";
import removingDuplicates from "../../ownModules/removing/removeDuplicates";

const MakeAppointment = () => {
  const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore(
    (state) => state
  );
  let { professionalsList, selectedSpecialists, selectedServices } =
    salonDataZustand;

  professionalsList = professionalsList[0];

  const [drawerData, setDrawerData] = useState();
  const [selectedSpecialistInDrawer, setSelectedSpecialistInDrawer] = useState();
  const [indexState, setIndexState] = useState();
  const [openDrawer1, setOpenDrawer1] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);
  const [placement] = useState("");

  const onClose1 = () => {
    setOpenDrawer1(false);
  };

  const onClose2 = () => {
    setOpenDrawer2(false);
  };

  const showDrawer1 = () => {
    setOpenDrawer1(true);
  };

  const showDrawer2 = () => {
    setOpenDrawer2(true);
  };

  const handleSpecialistsImgs = () => {
    let getImgs = selectedSpecialists?.map((item) =>
      item.specialistItems
        ? item.specialistItems?.memberDetails?.memberImg
        : item.memberImg
    );

    getImgs = getImgs?.map((item) => {
      let pathSliced = item?.slice(18);
      return pathSliced;
    });

    return getImgs;
  };

  let getSpecialistsImgs = handleSpecialistsImgs();

  console.log(selectedSpecialists, "selectedSpecialists");

  // get specialist name and img with duplicates removed
  let handleSpecialistNamesAndImgs = () => {
    let selectedSpecialistsNames = selectedSpecialists.map(
      (item) => item.specialistItems.memberDetails.memberName
    );

    selectedSpecialistsNames = removingDuplicates(selectedSpecialistsNames);

    let getNameImg = [];

    for (let i = 0; i < selectedSpecialistsNames.length; i++) {
      for (let j = 0; j < selectedSpecialists.length; j++) {
        if (
          selectedSpecialistsNames[i] ==
          selectedSpecialists[j].specialistItems.memberDetails.memberName
        ) {
          getNameImg.push({
            name: selectedSpecialistsNames[i],
            image:
              selectedSpecialists[
                j
              ].specialistItems.memberDetails?.memberImg?.slice(18),
          });
          break;
        }
      }
    }

    return getNameImg;
  };

  let specialistNameAndImg = handleSpecialistNamesAndImgs();

  // console.log(selectedSpecialists, "selectedSpecialists")
  // console.log(selectedSpecialistsNames, "selectedSpecialistsNames")
  console.log(specialistNameAndImg, "specialistNameAndImg");

  console.log(selectedSpecialists, "selectedSpecialists");

  let drawerProps = {
    onClose: onClose2,
    openDrawer: openDrawer2,
    setOpenDrawer: setOpenDrawer2,
    drawerData: drawerData,
    indexState: indexState,
    selectedSpecialists: selectedSpecialists,
    imgPaths: getSpecialistsImgs,
    salonDataZustand: salonDataZustand,
    setSalonDataZustand: setSalonDataZustand,
    // selectedSpecialistInDrawer: selectedSpecialistInDrawer,
    // setSelectedSpecialistInDrawer: setSelectedSpecialistInDrawer,
  };

  console.log(getSpecialistsImgs, "gggg")

  let handleNameOnDrawer = (item) =>{
    if(item.length > 1){
      return "Multiple Professionals"
    }
    else{ 
      if(item[0].name == "dummy"){
        return "Any Professional"
      }
      else{
        return item[0].name
      }
    }
  }

  return (
    <div className="mb-28">
      <div>
        <h2> Select time </h2>
      </div>

      <div className="mt-4">
        <div className="py-2">
          <div className="border border-gray-300 rounded-full py-[6px] pl-4 mt-3 w-[70%]">
            <div
              className="flex items-center justify-between gap-2"
              onClick={() => showDrawer1()}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {specialistNameAndImg?.map((item, i) => (
                    <div className="w-7 h-7 -ml-3 border-[2px] border-white rounded-full">
                      <img
                        src={item.image}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="font-semibold text-[14px]">
                  {/* {getSpecialistsImgs?.length > 1
                    ? "Multiple Professionals"
                    : "Any Professional"} */}
                    {/* {specialistNameAndImg[0].name == "dummy" ? "Any Professional" : specialistNameAndImg[0].name == "dummy" ? } */}
                    {/* {specialistNameAndImg.length > 1 && "Multiple Professionals"}
                    {specialistNameAndImg[0].name == "dummy" ? "Any Professional" : specialistNameAndImg[0].name} */}

                    {handleNameOnDrawer(specialistNameAndImg)}
                </div>
              </div>
              <div className="text-xs pr-4">
                <DownOutlined />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <hr></hr>
          </div>
        </div>
      </div>

      <Drawer
        title={
          <div className="flex justify-between items-center">
            <div className="w-[74px]">drawer 1</div>
            <div onClick={() => onClose1()} className="pt-1">
              <CloseOutlined className="text-lg" />
            </div>
          </div>
        }
        placement={"bottom"}
        closable={false}
        onClose={onClose1}
        open={openDrawer1}
        key={placement}
        className="professional-per-service-drawer"
      >
        <div>
          <div>
            <div className="mt-4">
              {selectedServices.map((item, i, arr) => (
                <>
                  <div className="py-2">
                    <div className="text-lg font-semibold">{item.name}</div>
                    <div>
                      <h3>{item.duration}</h3>
                    </div>

                    <div
                      onClick={() => [
                        setDrawerData(handleDrawerData(item, salonDataZustand)),
                        setIndexState(i),
                        showDrawer2(),
                      ]}
                      className="border border-gray-300 rounded-full pl-[4px] py-[2px] mt-3 w-[55%]"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {/* if single specialist enough for selected services */}
                          {selectedSpecialists.length == 1 ? (
                            <div className="w-7 h-7 border-[2px] border-white rounded-full">
                              <img
                                src={
                                  selectedSpecialists[0].specialistItems
                                    ? selectedSpecialists[0].specialistItems?.memberDetails?.memberImg?.slice(
                                        18
                                      )
                                    : selectedSpecialists[0].memberImg.slice(18)
                                }
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                          ) : /* if multiple specialists required for selected services */
                          selectedSpecialists[i]?.specialistItems?.memberDetails
                              ?.memberImg != undefined ||
                            selectedSpecialists[i].memberImg != undefined ? (
                            <div className="w-7 h-7 border-[2px] border-white rounded-full">
                              <img
                                src={
                                  selectedSpecialists[i].specialistItems
                                    ? selectedSpecialists[
                                        i
                                      ].specialistItems?.memberDetails?.memberImg?.slice(
                                        18
                                      )
                                    : selectedSpecialists[i].memberImg.slice(18)
                                }
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="bg-blue-50 rounded-full w-8 h-8  flex justify-center items-center">
                              {" "}
                              <div className="text-blue-300 text-xs">
                                <UserOutlined />{" "}
                              </div>
                            </div>
                          )}

                          {printSpecialistNameInDropwDown(
                            i,
                            selectedSpecialists
                          )}
                        </div>
                        <div className="text-xs pr-4">
                          <DownOutlined />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <hr></hr>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Drawer>

      <ProfessionalSelectingDrawer drawerProps={drawerProps} />

      <DateAndTime />
    </div>
  );
};

export default MakeAppointment;
