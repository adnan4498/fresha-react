import React, { useEffect, useRef, useState } from "react";
import { useLocation, useMatches } from "react-router-dom";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import _, { isArray } from "lodash";
import { useCallback } from "react";
import getGlobalSalons from "../../data/salondata/global/globalSalonData";
import BookNowAndContinue from "../../components/bookNow/BookNowAndContinue";
import { salonDataZustandStore } from "../../zustandStore";
import { handlePriceAndDuration } from "../../ownModules/others/handlePriceAndDuration";
import { Drawer } from "antd";
import ServiceDetailsDrawer from "../../ownModules/drawerModules/ServiceDetailsDrawer";

const BookingServices = ({ specialistServices, toAppointmentPage, triggerUseEffect, setTriggerUseEffect = function () { } }) => {
    const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore((state) => state)

    let match = useMatches();

    let categoryName = match[0].params.category;
    let cityName = match[0].params.city;
    let salonName = match[0].params.name;

    let globalSalons = getGlobalSalons()

    const location = useLocation();

    let services = location.state.servicesWithoutUnderscore || specialistServices
    let serviceFromNavigationState = location.state.serviceInCart;
    let currencySymbol = location.state.currencySymbol;


    // Object.entries(services).forEach((item) => {
    // })

    let serviceInCart = []

    // if no selected services, page referesh will show no selected services
    const pageRefereshOnNoServices = () => {
        if (salonDataZustand.length == 0) {
            serviceInCart = []
        }
        else {
            serviceInCart = serviceFromNavigationState
        }
    }

    pageRefereshOnNoServices()

    if (!isArray(serviceInCart)) {
        serviceInCart = [serviceInCart];
    }

    let selectedServicesDivs = [];

    const [activeHeading, setActiveHeading] = useState();
    const [selected, setSelected] = useState(serviceInCart);

    const [isBool, setIsBool] = useState(true)

    const [topAndBotY, setTopAndBotY] = useState({
        topY: [],
        botY: [],
    });

    const [getSelectedServices, setSelectedServices] = useState([]);



    // localStorage.clear()

    // let getLocal = JSON.parse(localStorage.getItem("count-storage"))

    // will prevent re-creation of references and triggering useEffect on each scroll
    // [selected] in dependency will re-creeate new reference that will contain new selected service in cart
    // even just 10 mili-seconds puts great impact on re-rendering
    const throttledOnScroll = useCallback(
        _.throttle(triggerScroll, 100, { trailing: false }),
        [salonDataZustand]
    );

    useEffect(() => {
        triggerScroll();

        document.addEventListener("scroll", throttledOnScroll);
        return () => {
            document.removeEventListener("scroll", throttledOnScroll);
        };
    }, [salonDataZustand, throttledOnScroll]);

    useEffect(() => {
        window.scrollTo(0, 0);
        let scrollToServiceDiv;

        // will scroll to the selected service ( from previous page )
        const pageRenderScrollToService = () => {
            let serviceNameDiv = [document.querySelectorAll(".serviceNameDiv")];

            for (let items of serviceNameDiv) {
                for (let item of items) {
                    // selection causes 2 selected services, this will only scroll to first one
                    if (selectedServicesDivs[0]?.textContent == item?.textContent) {
                        scrollToServiceDiv = item;
                        break;
                    }
                }
            }
        };

        pageRenderScrollToService();

        // activates heading
        const activateHeading = () => {
            let y = scrollToServiceDiv?.offsetTop - 100;
            window.scroll({ top: y, behavior: "smooth" });

            const getAllElements = [...document.querySelectorAll(".headingClass")];
            const getAllElementsHeadings = document.querySelectorAll(".headingClass");

            window.addEventListener("scroll", () => {
                handleHeadingScroll(getAllElements, getAllElementsHeadings);
            });
        };
        activateHeading();

    }, []);

    function triggerScroll() {
        let serviceNameDiv = [document.querySelectorAll(".serviceNameDiv")];


        for (let items of serviceNameDiv) {
            for (let item of items) {
                // for (let services of salonDataZustand?.selectedServices) {
                for (let services of selected) {
                    if (item?.textContent == services?.name) {
                        selectedServicesDivs.push(item);
                    }
                }
            }
        }

        const removeNodeDuplicates = () => {
            selectedServicesDivs = selectedServicesDivs.reduce((unique, node) => {
                // if item == item then it wont be pushed as it will become false by !
                // and unique array will be returned the same
                if (!unique.some((item) => item.textContent == node.textContent)) {
                    unique.push(node);
                }
                return unique;
            }, []);
        };

        removeNodeDuplicates();

        // console.log(selectedServicesDivs, "selectedServicesDivs")

        setSelectedServices(selectedServicesDivs);

        let pushTopYDivs = [];
        let pushBotYDivs = [];

        selectedServicesDivs.forEach((item) => {
            let getTopY = item.getBoundingClientRect().top;
            let getBotY = item.getBoundingClientRect().bottom;

            pushTopYDivs.push(getTopY);
            pushBotYDivs.push(getBotY);
        });

        setTopAndBotY((prevState) => ({
            ...prevState,
            topY: pushTopYDivs,
            botY: pushBotYDivs,
        }));
    }

    const scrollToTopService = () => {
        getSelectedServices.forEach((item) => {
            let getItemTop = item.getBoundingClientRect().top;

            if (getItemTop < 100) {
                let y = item.offsetTop - 100;
                window.scroll({ top: y, behavior: "smooth" });
            }
        });
    };

    function scrollToBotService() {
        getSelectedServices.forEach((item, i, arr) => {
            let getItemBot = item.getBoundingClientRect().top + window.scrollY;
            let actualWindowYScroll = Math.round(window.scrollY) + 120;

            if (arr.length > 1) {
                for (let i = 0; i < arr.length; i++) {
                    let getVal = arr[i].getBoundingClientRect().top + window.scrollY;

                    if (actualWindowYScroll < getVal) {
                        getItemBot = arr[i].getBoundingClientRect().top + window.scrollY;
                        break;
                    }
                }
            }

            let y = getItemBot - 100;

            window.scroll({ top: y, behavior: "smooth" });
        });
    }

    let isTop;
    let isBot;

    const topItemsLength = [];
    const bottomItemsLength = [];

    const topAndBotBadge = () => {
        isTop = topAndBotY.topY?.some((item) => item < 20);
        isBot = topAndBotY.botY?.some((item) => item > 350);

        topAndBotY.topY?.forEach((item) => item < 20 && topItemsLength.push(item));
        topAndBotY.botY?.forEach(
            (item) => item > 350 && bottomItemsLength.push(item)
        );
    };

    topAndBotBadge();

    function handleHeadingScroll(ele, headings) {
        const getEleValues = ele.map((el) => el.getBoundingClientRect());

        let valueAndHeadingEle = [];

        getEleValues.forEach((item, i) =>
            valueAndHeadingEle.push([item, headings[i]])
        );

        valueAndHeadingEle.forEach((item, i) => {
            if (
                item[0].top >= 0 &&
                item[0].left >= 0 &&
                item[0].bottom <=
                (document.documentElement.clientHeight * 0.50) &&
                // (window.innerHeight || document.documentElement.clientWidth - 200) &&
                item[0].right <=
                (window.innerWidth || document.documentElement.clientWidth)
            ) {
                let nodeToArr = item[1].textContent.split("");
                nodeToArr.shift();
                nodeToArr.pop();

                let heading = nodeToArr.join("");
                setActiveHeading(heading);
            }
        });
    }

    // click on heading leads to its services
    function scrollToService(e) {
        const div = document.getElementById(e.target.textContent);

        const yOffset = -90;
        const y = div.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
    }

    // x axis scroll in headings
    if (activeHeading) {
        const div = document.getElementsByClassName(activeHeading)[0];
        div.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    }


    const addService = (service) => {
        const { name, duration, price, subServices } = service;
        const isDuplicate = selected?.some(item => item?.name === name);

        if (subServices) {

            // const selectedServices = isDuplicate
            //     ? salonDataZustand.selectedServices.filter(item => item?.name !== name)
            //     : [...(salonDataZustand.selectedServices || []), { name, price, duration, subServices }];

            let selectedServices = []

            if (isDuplicate) {
                
                // let getAllServices = salonDataZustand?.selectedServices

                // for (let i = 0; i < subServices.length; i++) {
                //     for (let j = 0; j < getAllServices.length; j++) {
                //         subServices[i].name.includes(getAllServices[j].name) && getAllServices.splice(j, 1)
                //     }
                // }

                // selectedServices = getAllServices





            }
            else{
                selectedServices = [...(salonDataZustand.selectedServices || []), { name, price, duration, subServices }];
            }

            // console.log(selectedServices, "selectedServicessss")

            setSelected(prev => isDuplicate ? prev.filter(item => item.name !== name) : [...prev, { name, price, duration, subServices }]);

            let servsAndSubServs = []

            let subServicesUpdated = subServices.map(item => ({...item, packageName : name}))
   
            // console.log(subServicesUpdated, "SSU")   

            if(selectedServices[0]?.subServices) { selectedServices[0].subServices = subServicesUpdated }
  
            console.log(selectedServices, "selectedServices")   
            console.log(subServicesUpdated, "ss")  

            selectedServices.forEach((item) => {
                if (item.subServices) {
                    servsAndSubServs.push(...item.subServices)
                }
                else {
                    servsAndSubServs.push(item)
                }
            })

            console.log(servsAndSubServs, "selectedServices in if")

            setSalonDataZustand(prev => ({
                ...prev,
                selectedServices: servsAndSubServs,
                priceAndDuration: handlePriceAndDuration(servsAndSubServs, currencySymbol),
            }));

        }
        else {
            const selectedServices = isDuplicate
                ? salonDataZustand.selectedServices.filter(item => item?.name !== name)
                : [...(salonDataZustand.selectedServices || []), { name, price, duration }];

            setSelected(prev => isDuplicate ? prev.filter(item => item.name !== name) : [...prev, { name, price, duration }]);

            let servsAndSubServs = []
            selectedServices.forEach((item) => {
                if (item.subServices) {
                    servsAndSubServs.push(...item.subServices)
                }
                else {
                    servsAndSubServs.push(item)
                }
            })

            console.log(servsAndSubServs, "selectedServices in else")

            setSalonDataZustand(prev => ({
                ...prev,
                selectedServices,
                priceAndDuration: handlePriceAndDuration(servsAndSubServs, currencySymbol),
            }));
        }
    };


    // let arr1 = ["a", "b", "c"]
    // let arr2 = ["a", "b", "b", "c", "d"]

    // for(let i = 0; i < arr1.length; i++){
    //     for(let j = 0; j < arr2.length; j++){
    //         arr1[i].includes(arr2[j]) && arr2.splice(j, 1)
    //     }
    // }

    // console.log(arr2, "arr2")

    console.log(salonDataZustand?.selectedServices, "salonDataZustand.selectedServices")
    console.log(selected, "selected")

    // function addService(service) {

    //     let { name, duration, price, subServices } = service

    //     if (subServices == undefined) {
    //         let selectedServices
    //         let findDup = salonDataZustand.selectedServices?.some((item) => item?.name == name);

    //         if (!findDup) {
    //             let serviceDetailsObj = { name: name, price: price, duration: duration }

    //             setSelected((oldState) => [...oldState, serviceDetailsObj]);

    //             selectedServices = salonDataZustand.selectedServices != undefined ?
    //                 [...salonDataZustand.selectedServices, serviceDetailsObj]
    //                 : [serviceDetailsObj]

    //         } else {
    //             selectedServices = salonDataZustand.selectedServices.filter((item) => item?.name != name);
    //         }

    //         let takeOutServices = selectedServices.filter(item => !item.subServices)
    //         let getSubService = selectedServices.filter(item => item.subServices)

    //         let gg = []

    //         if(getSubService != undefined && getSubService.length != 0){
    //             console.log(getSubService[0].subServices, "getSubService")   
    //             gg = [...takeOutServices, ...getSubService[0].subServices]
    //         }
    //         else{
    //             gg = [...takeOutServices]
    //         }

    //         let priceAndDuration = handlePriceAndDuration(gg, currencySymbol)
    //         setSalonDataZustand((prevState) => ({ ...prevState, selectedServices: selectedServices, priceAndDuration: priceAndDuration }));
    //     }
    //     else {

    //         let selectedServices
    //         let findDup = salonDataZustand.selectedServices?.some((item) => item?.name == name);

    //         if (!findDup) {
    //             let subServicesDetailsObj = { name: name, price: price, duration: duration, subServices }

    //             setSelected((oldState) => [...oldState, subServicesDetailsObj]);
    //             selectedServices = salonDataZustand.selectedServices != undefined ?
    //                 [...salonDataZustand.selectedServices, subServicesDetailsObj]
    //                 : [subServicesDetailsObj]

    //         } else {
    //             selectedServices = salonDataZustand.selectedServices.filter((item) => item?.name != name);
    //         }

    //         let takeOutServices = selectedServices.filter(item => !item.subServices)
    //         let gg = [...takeOutServices, ...subServices]

    //         let priceAndDuration = handlePriceAndDuration(gg, currencySymbol)

    //         setSalonDataZustand((prevState) => ({ ...prevState, selectedServices: selectedServices, priceAndDuration: priceAndDuration }));

    //     }

    // };



    // const addService = (service) => {
    //     const { name, duration, price } = service;
    //     const isDuplicate = salonDataZustand.selectedServices?.some(item => item?.name === name);

    //     const selectedServices = isDuplicate
    //         ? salonDataZustand.selectedServices.filter(item => item?.name !== name)
    //         : [...(salonDataZustand.selectedServices || []), { name, price, duration }];

    //     setSelected(prev => isDuplicate ? prev.filter(item => item.name !== name) : [...prev, { name, price, duration }]);

    //     setSalonDataZustand(prev => ({
    //         ...prev,
    //         selectedServices,
    //         priceAndDuration: handlePriceAndDuration(selectedServices, currencySymbol),
    //     }));
    // };


    // matches selectedService with serviceName and ticks it
    const tickMark = (serviceName) => {
        // return salonDataZustand?.selectedServices?.some(item => item?.name === serviceName);
        return selected?.some(item => item?.name === serviceName);
    }

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

    const [openDrawer, setOpenDrawer] = useState(false);
    const [drawerData, setDrawerData] = useState();

    return (
        <>
            <div className="fixed top-0 left-5 w-full overflow-x-scroll h-20 py-5 bg-white">
                <div className="flex gap-16 w-[800px]">
                    {Object.entries(services).map((item, index) => (
                        <a
                            key={index}
                            href={`#${item[0]}`}
                            onClick={(e) => {
                                scrollToService(e);
                                e.preventDefault();
                            }}
                        >
                            <div
                                className={`${item[0]} ${item[0] == activeHeading && "text-red-500"
                                    } headingDivs`}
                                key={index}
                            >
                                {item[0]}
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {topAndBotY.topY &&
                topAndBotY.topY.map(() => (
                    <>
                        {isTop ? (
                            <div
                                onClick={() => scrollToTopService()}
                                className="fixed top-14 left-5 w-full h-10 text-xl bg-red-300 top-selected-services"
                            >
                                {topItemsLength.length} top services
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                ))}

            {topAndBotY.botY &&
                topAndBotY.botY.map(() => (
                    <>
                        {isBot ? (
                            <div
                                onClick={() => {
                                    scrollToBotService();
                                }}
                                className="fixed bottom-24 left-5 w-full h-10 text-xl bg-blue-300 top-selected-services"
                            >
                                {bottomItemsLength.length} bot service
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                ))}

            <div className="my-20 mb-40">
                {Object.entries(services).map((item, index) => (
                    <>
                        <div className="">
                            <h2 className="headingClass" id={`${item[0]}`}>
                                {" "}
                                {item[0]}{" "}
                            </h2>
                        </div>
                        <div className="w-full">
                            <>
                                {item[1]?.map((service, i) => (
                                    <div
                                        key={i}
                                        className="mt-5 flex justify-between items-center"

                                    >
                                        <div className="w-[90%]" onClick={() => [setOpenDrawer(true), setDrawerData(service)]}>
                                            <div>
                                                <div
                                                    id={i}
                                                    className="text-base font-medium serviceNameDiv"
                                                >
                                                    {service.name}
                                                </div>
                                            </div>

                                            {service?.isPackage && handleIsPackgeData(service.subServices)}


                                            <div>
                                                <h3>{service.duration}</h3>
                                            </div>

                                            <div className="mt-3">
                                                <h3>{service.price}</h3>
                                            </div>
                                        </div>

                                        <div
                                            onClick={() => { addService(service), setTriggerUseEffect(!triggerUseEffect) }}
                                            className={`text-xl font-semibold border border-gray-300 ${selected.name?.includes(service.name)
                                                ? "bg-[#6950f3]" : "bg-white"} rounded-lg px-3 py-1 pb-2`}
                                        >
                                            {tickMark(service.name) ? (
                                                <CheckOutlined className="text-white bg-purple-300" />
                                            ) : (
                                                "+"
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </>
                        </div>
                    </>
                ))}
            </div>

            <BookNowAndContinue toAppointmentPage={toAppointmentPage} />
            <ServiceDetailsDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} drawerData={drawerData} currencySymbol={currencySymbol} addService={addService} />
        </>
    );
};

export default BookingServices;

