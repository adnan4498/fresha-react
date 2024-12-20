import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";
import _, { get, isArray } from "lodash";
import { useCallback } from "react";
// import selectedServicesStore from "../../zustandStore";
import getGlobalSalons from "../../data/salondata/global/globalSalonData";
import BookNowAndContinue from "../../components/bookNow/BookNowAndContinue";
import { selectedServicesStore } from "../../zustandStore";
import { salonDataZustandStore } from "../../zustandStore";

const BookingServices = () => {
    const { presistedSelectedServices, setPresistedSelectedServices } =
        selectedServicesStore((state) => state);

    const salonDataZustand = salonDataZustandStore((state) => state.salonDataZustand)

    console.log(salonDataZustand, "salonDataZustand in bookingService")

    let navigate = useNavigate();

    let match = useMatches();

    let categoryName = match[0].params.category;
    let cityName = match[0].params.city;
    let salonName = match[0].params.name;

    let globalSalons = getGlobalSalons()

    const location = useLocation();

    let services = location.state.servicesWithoutUnderscore;
    let serviceFromNavigationState = location.state.serviceInCart;
    let currencySymbol = location.state.currencySymbol;

    let serviceInCart = []

    // console.log(serviceFromNavigationState, "nnn")

    // if no selected services, page referesh will show no selected services
    const pageRefereshOnNoServices = () => {
        if (presistedSelectedServices.length == 0) {
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
        [presistedSelectedServices]
    );

    useEffect(() => {
        triggerScroll();

        document.addEventListener("scroll", throttledOnScroll);
        return () => {
            document.removeEventListener("scroll", throttledOnScroll);
        };
    }, [presistedSelectedServices, throttledOnScroll]);

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
                for (let services of presistedSelectedServices) {
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
                (window.innerHeight || document.documentElement.clientHeight) &&
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

    const addService = (name, duration, price) => {
        let noDupsFound = () => {
            let noDup;

            let findDup = presistedSelectedServices?.filter((item) => item?.name == name);
            findDup.length == 0 && (noDup = true);

            return noDup;
        };

        if (noDupsFound()) {
            let theObj = { name: name, price: price, duration: duration }
            setSelected((oldState) => [...oldState, theObj]);

            let arr = [...presistedSelectedServices, theObj]
            setPresistedSelectedServices(arr)

        } else {
            let getSelectedItems = selected.filter((item) => item?.name != name);
            let getPresistedItems = presistedSelectedServices.filter((item) => item?.name != name);

            setSelected(getSelectedItems);
            setPresistedSelectedServices(getPresistedItems)
        }
    };



    // const addService = (name, duration, price) => {
    //     let noDupsFound = () => {
    //         let noDup;

    //         let findDup = presistedSelectedServices?.filter((item) => item?.name == name);
    //         findDup.length == 0 && (noDup = true);

    //         return noDup;
    //     };

    //     if (noDupsFound()) {
    //         let theObj = { name: name, price: price, duration: duration }
    //         let arr1 = [...presistedSelectedServices, theObj]

    //         setPresistedSelectedServices(arr1)

    //     } else {
    //         let getItem2 = presistedSelectedServices.filter((item) => item?.name != name);
    //         setPresistedSelectedServices(getItem2)
    //     }
    // };



    // localStorage.clear()

    let tickMark = (serviceName) => {
        let checkItem = presistedSelectedServices.filter(item => item?.name == serviceName)

        if (checkItem.length > 0) {
            return checkItem;
        }
    };

    const handlePriceAndDuration = () => {
        const replacements = (serviceVal, replacingVal) => {
            let valReplaced = [];

            // console.log(serviceVal, "m")

            serviceVal.forEach((item) => {
                let replacingSymbol = item?.replace(`${replacingVal}`, "");
                // console.log(replacingSymbol, "ss")
                let replacingComa;
                replacingSymbol && (replacingComa = replacingSymbol.replace(",", ""));
                valReplaced.push(replacingComa);
            });

            valReplaced.length > 1 &&
                (valReplaced = valReplaced.reduce(
                    (accu, currentVal) => Number(accu) + Number(currentVal)
                ));

            let minsText = replacingVal == "min" ? " mins" : "";
            // let valWithText = valReplaced + minsText;
            let valWithText = valReplaced + minsText;

            return valWithText;
        };

        const passingArgsToReplacements = () => {
            let min = "min";
            let getPrice = presistedSelectedServices.map((item) => item?.price);
            let getDuration = presistedSelectedServices.map((item) => item?.duration);

            let price = replacements(getPrice, currencySymbol);
            let serviceDuration = replacements(getDuration, min);

            let result = {
                price: price,
                duration: serviceDuration,
            };

            // console.log(presistedSelectedServices, "rewwwsult")

            return result;
        };

        return passingArgsToReplacements();
    };

    const priceAndDuration = handlePriceAndDuration();


    const setPresistedAtStart = () => {

        if (serviceInCart.length != 0 && presistedSelectedServices.length == 0) {
            serviceInCart.forEach((item, i, arr) => {
                if (arr.length != 0) {
                    item = [item]
                    setPresistedSelectedServices(item);
                }
            });
        }
        else if (serviceInCart.length != 0 && presistedSelectedServices.length > 0) {
            setPresistedSelectedServices(presistedSelectedServices)
            setSelected(presistedSelectedServices)
        }
        else if (serviceInCart.length != 0 && presistedSelectedServices.length > 0) {
            setPresistedSelectedServices([])
        }
        setIsBool(false);
    };

    isBool && setPresistedAtStart();


    // useEffect(() => {
    //     setPresistedSelectedServices(selected)
    // }, [selected])

    // console.log(presistedSelectedServices, "presistedSelectedServices")
    // console.log(selected, "ss")

    let showBookNowBtn = false

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
                                {item[1].map((service, i) => (
                                    <div
                                        key={i}
                                        className="mt-5 flex justify-between items-center "
                                    >
                                        <div>
                                            <div>
                                                <div
                                                    id={i}
                                                    className="text-base font-medium serviceNameDiv"
                                                >
                                                    {service.name}
                                                </div>
                                            </div>

                                            <div>
                                                <h3>{service.duration}</h3>
                                            </div>

                                            <div className="mt-3">
                                                <h3>{service.price}</h3>
                                            </div>
                                        </div>

                                        <div
                                            onClick={() => {
                                                addService(
                                                    service.name,
                                                    service.duration,
                                                    service.price
                                                )
                                            }}
                                            className={`text-xl font-semibold border border-gray-300 ${selected.name?.includes(service.name)
                                                // className={`text-xl font-semibold border border-gray-300 ${presistedSelectedServices[i]?.name?.includes(service.name)
                                                ? "bg-[#6950f3]" : "bg-white"} rounded-lg px-3 py-1 pb-2`}
                                        >
                                            {tickMark(service.name) ? (
                                                // {tickMark(presistedSelected  Services[i]?.name) ? (
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

            {/* <div className="my-20 bg-red-500" onClick={() => navigate(-2)}>
                        asdad
                    </div> */}
            {/* {localStorage.clear()} */}

            {/* selected[0] is first selected service from previous page */}
            <BookNowAndContinue priceAndDuration={priceAndDuration} presistedSelectedServices={presistedSelectedServices} showBookNowBtn={showBookNowBtn} />

        </>
    );
};

export default BookingServices;

// const BookingServices = () => {

//     const [isBool, setIsBool] = useState(false)

//     !setIsBool && setIsBool(true)

//     console.log(isBool)

//     return(
//         <>
//             hi
//         </>
//     )
// }
// export default BookingServices
