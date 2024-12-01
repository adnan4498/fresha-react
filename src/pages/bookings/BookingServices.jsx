import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Tabs } from "antd";
import { useLocation, useMatches } from 'react-router-dom';
import { CheckOutlined } from '@ant-design/icons';
import removingDuplicates from "../../ownModules/removeDuplicates/removeDuplicates";

const BookingServices = () => {

    const location = useLocation();

    let services = location.state.servicesWithoutUnderscore
    let serviceInCart = location.state.serviceInCart

    const [activeHeading, setActiveHeading] = useState()
    const [selected, setSelected] = useState([serviceInCart])

    const [topY, setTopY] = useState([])
    const [botY, setBotY] = useState([])

    let currencySymbol = useMemo(() => {
        return getcurrencySymbol()
    }, [])

    useEffect(() => {
        const triggerScroll = () => {

            let serviceNameDiv = [document.querySelectorAll(".serviceNameDiv")]

            let selectedServicesDivs = []

            for (let items of serviceNameDiv) {
                for (let item of items) {
                    for (let services of selected) {
                        if (item.textContent == services.name) {
                            selectedServicesDivs.push(item)
                        }
                    }
                }
            }

            
            let bb = []
            for (let i = 0; i < selectedServicesDivs.length; i++) {
                if (selectedServicesDivs[i].textContent == selectedServicesDivs[++i].textContent) {
                    bb.push(selectedServicesDivs[0])
                }
            }
            
            console.log(selectedServicesDivs, "selectedServicesDivs")
            console.log(bb, "bb")

            let pushTopYDivs = []
            let pushBotYDivs = []
            selectedServicesDivs.forEach((item) => {
                let getTopY = item.getBoundingClientRect().top
                let getBotY = item.getBoundingClientRect().bottom

                pushTopYDivs.push(getTopY)
                pushBotYDivs.push(getBotY)
            })
            setTopY(pushTopYDivs)
            setBotY(pushBotYDivs)
        }

        window.addEventListener('scroll', () => {
            triggerScroll()
        })

        triggerScroll()

    }, [selected])

    // console.log(topY, "topY")
    // console.log(botY, "botY")
    // console.log(bbb.length, "getY")
    // console.log(selected.length, "selected")







    // will scroll to the first selected service ( from previous page )
    useEffect(() => {

        let scrollToService
        let serviceNameDiv = [document.querySelectorAll(".serviceNameDiv")]

        for (let items of serviceNameDiv) {
            for (let item of items) {
                selected[0]?.name == item.textContent && (scrollToService = item)
            }
        }

        let y = scrollToService?.offsetTop - 100
        window.scroll({ top: y, behavior: 'smooth' })

    }, [])

    // actives heading 
    useEffect(() => {
        const getAllElements = [...document.querySelectorAll(".headingClass")]
        const getAllElementsHeadings = document.querySelectorAll(".headingClass")

        window.addEventListener('scroll', () => {
            (handleHeadingScroll(getAllElements, getAllElementsHeadings))
        });
    }, [])

    function handleHeadingScroll(ele, headings) {
        const getEleValues = ele.map(el => el.getBoundingClientRect())

        let valueAndHeadingEle = []

        getEleValues.forEach((item, i) => valueAndHeadingEle.push([item, headings[i]]))

        valueAndHeadingEle.forEach((item, i) => {
            if (item[0].top >= 0 &&
                item[0].left >= 0 &&
                item[0].bottom <= (
                    window.innerHeight ||
                    document.documentElement.clientHeight) &&
                item[0].right <= (
                    window.innerWidth ||
                    document.documentElement.clientWidth)) {

                let nodeToArr = item[1].textContent.split("")
                nodeToArr.shift()
                nodeToArr.pop()

                let heading = nodeToArr.join("")
                setActiveHeading(heading)
            }
        })
    }

    // click on heading leads to its services
    function scrollToService(e) {
        const div = document.getElementById(e.target.textContent)

        const yOffset = -90;
        const y = div.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // x axis scroll in headings
    if (activeHeading) {
        const div = document.getElementsByClassName(activeHeading)[0]
        div.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }

    const addService = (name, duration, price) => {

        let removeDups = () => {
            let noDup

            let findDup = selected?.filter(item => item.name == name)
            findDup.length == 0 && (noDup = true)

            return noDup
        }

        if (removeDups()) {
            setSelected(oldState => ([...oldState, { name: name, price: price, duration: duration }]))
        }
        else {
            let getItem = selected.filter(item => item.name != name)
            setSelected(getItem)
        }
    }

    let tickMark = (serviceName) => {
        let checkItem = []

        for (let item of selected) {
            item.name == serviceName && checkItem.push(item)
        }

        if (checkItem.length > 0) {
            return checkItem
        }
    }

    function getcurrencySymbol() {
        let getPrice = selected[0]?.price
        let getCurrency = getPrice?.includes("OMR") ? "OMR" : getPrice?.includes("PKR") ? "PKR" : getPrice?.includes("AED") ? "AED" : ""

        return getCurrency
    }

    const handlePriceAndDuration = () => {

        const replacements = (serviceVal, replacingVal) => {

            let valReplaced = []
            serviceVal.forEach((item) => {
                let replacing = item.replace(`${replacingVal}`, "")
                valReplaced.push(replacing)
            })
            valReplaced.length > 1 && (valReplaced = valReplaced.reduce((accu, currentVal) => Number(accu) + Number(currentVal)))

            let minsText = replacingVal == "min" ? " mins" : ""
            let valWithText = valReplaced + minsText

            return valWithText
        }

        const passingArgsToReplacements = () => {

            let min = "min"
            let getPrice = selected.map(item => item.price)
            let getDuration = selected.map(item => item.duration)

            let price = replacements(getPrice, currencySymbol)
            let serviceDuration = replacements(getDuration, min)

            let result = {
                price: price,
                duration: serviceDuration,
            }

            return result
        }

        return passingArgsToReplacements()

    }

    let priceAndDuration = handlePriceAndDuration()


    return (
        <>
            <div className="fixed top-0 left-5 w-full overflow-x-scroll h-20 py-5 bg-white">
                <div className="flex gap-16 w-[800px]">
                    {Object.entries(services).map((item, index) => (
                        <a key={index} href={`#${item[0]}`} onClick={(e) => { scrollToService(e); e.preventDefault(); }}>
                            <div className={`${item[0]} ${item[0] == activeHeading && "text-red-500"} headingDivs`} key={index}>
                                {item[0]}
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* {topY.length > 0 && topY[0] < 20 ?(<div className='fixed top-14 left-5 w-full h-10 text-xl bg-red-300 top-selected-services'>
                top services
            </div>) : <div className='fixed bottom-24 left-5 w-full h-10 text-xl bg-blue-300 bottom-selected-services z-50'>
                bottom services
            </div>} */}


            {/* <div className='fixed bottom-24 left-5 w-full h-10 text-xl bg-blue-300 bottom-selected-services z-50'>
                bottom services
            </div> */}

            <div className='my-20 mb-40'>
                {Object.entries(services).map((item, index) => (
                    <>
                        <div className=''>
                            <h2 className='headingClass' id={`${item[0]}`}> {item[0]} </h2>
                        </div>
                        <div className='w-full'>
                            <>
                                {item[1].map((service, i) => (
                                    <div key={i} className="mt-5 flex justify-between items-center " >
                                        <div
                                        >
                                            <div>
                                                <div id={i} className="text-base font-medium serviceNameDiv">{service.name}</div>
                                            </div>

                                            <div>
                                                <h3>{service.duration}</h3>
                                            </div>

                                            <div className="mt-3">
                                                <h3>{service.price}</h3>
                                            </div>
                                        </div>

                                        <div onClick={() => [addService(service.name, service.duration, service.price)]} className={`text-xl font-semibold border border-gray-300 ${selected.name?.includes(service.name) ? "bg-[#6950f3]" : "bg-white"}  rounded-lg px-3 py-1 pb-2`}>
                                            {tickMark(service.name) ? <CheckOutlined className='text-white bg-purple-300' /> : "+"}
                                        </div>

                                    </div>
                                ))}
                            </>
                        </div>
                    </>
                ))}
            </div>


            {/* selected[0] is first selected service from previous page */}
            {selected[0] != undefined &&
                <div className="fixed flex justify-between px-5 mt-10 py-5 bottom-0 w-[100%] left-0 border-t border-gray-400 text-center bg-white">

                    <div className=''>
                        <div>
                            <h3 className='text-left font-semibold text-black'>
                                {/* writing code in `${}` will add space between currencySymbol and price */}
                                {priceAndDuration?.price ? (`${currencySymbol} ${priceAndDuration?.price}`) : selected[0]?.price}
                            </h3>
                        </div>

                        <div className='flex gap-2 text-sm'>
                            <div> {selected.length} service{selected.length > 1 && "s"} </div>

                            <div>
                                {priceAndDuration?.duration ? priceAndDuration?.duration : selected[0]?.duration}
                            </div>
                        </div>
                    </div>
                    <div className='bg-black text-white rounded-lg items-center flex px-8'>
                        <p>Continue</p>
                    </div>
                </div>
            }

            {/* <div className='my-40' onClick={() => setTopY([...topY, aa])}>
                asadsasd
            </div>
            {console.log(topY, "yy")} */}
        </>
    )
}

export default BookingServices