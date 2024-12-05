import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CheckOutlined } from '@ant-design/icons';

const BookingServices = () => {

    const location = useLocation();

    let services = location.state.servicesWithoutUnderscore
    let serviceInCart = location.state.serviceInCart

    const [activeHeading, setActiveHeading] = useState()
    const [selected, setSelected] = useState([serviceInCart])

    const [topY, setTopY] = useState([])
    const [botY, setBotY] = useState([])

    const [getSelectedServices, setGetSelectedServices] = useState([])

    let currencySymbol = useMemo(() => {
        return getcurrencySymbol()
    }, [])

    let selectedServicesDivs = []

    useEffect(() => {
        const triggerScroll = () => {

            let serviceNameDiv = [document.querySelectorAll(".serviceNameDiv")]

            for (let items of serviceNameDiv) {
                for (let item of items) {
                    for (let services of selected) {
                        if (item.textContent == services.name) {
                            selectedServicesDivs.push(item)
                        }
                    }
                }
            }

            // selectedServicesDivs = selectedServicesDivs.reverse()

            const removeNodeDuplicates = () => {
                selectedServicesDivs = selectedServicesDivs.reduce((unique, node) => {
                    // if item == item then it wont be pushed as it will become false by !
                    // and unique array will be returned the same
                    if (!unique.some(item => item.textContent == node.textContent)) {
                        unique.push(node)
                    }
                    return unique
                }, [])

            }

            removeNodeDuplicates()

            setGetSelectedServices(selectedServicesDivs)

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

            // setTimeout(() => {
            // }, 1000);
            triggerScroll()


        })

        triggerScroll()

    }, [selected])

    useEffect(() => {

        const aaa = () => {
            console.log("yuhu")
        }
        setTimeout(() => {

            window.addEventListener('scroll', () => {
                // setTimeout(() => {
                // }, 1000);
                aaa()
            })
        }, 2000);

    }, [])


    useEffect(() => {
        window.scrollTo(0, 0)
        let scrollToServiceDiv

        // will scroll to the selected service ( from previous page )
        const pageRenderScrollToService = () => {

            let serviceNameDiv = [document.querySelectorAll(".serviceNameDiv")]

            for (let items of serviceNameDiv) {
                for (let item of items) {
                    // selection causes 2 selected services, this will only scroll to first one
                    if (selectedServicesDivs[0]?.textContent == item.textContent) {
                        scrollToServiceDiv = item
                        break;
                    }
                }
            }
        }

        pageRenderScrollToService()

        // activates heading 
        const activateHeading = () => {

            let y = scrollToServiceDiv?.offsetTop - 100
            window.scroll({ top: y, behavior: 'smooth' })

            const getAllElements = [...document.querySelectorAll(".headingClass")]
            const getAllElementsHeadings = document.querySelectorAll(".headingClass")

            window.addEventListener('scroll', () => {
                (handleHeadingScroll(getAllElements, getAllElementsHeadings))
            });
        }
        activateHeading()

    }, [])

    const scrollToTopService = () => {
        getSelectedServices.forEach((item) => {
            let getItemTop = item.getBoundingClientRect().top

            if (getItemTop < 100) {
                let y = item.offsetTop - 100
                window.scroll({ top: y, behavior: 'smooth' })
            }
        })
    }

    function scrollToBotService() {
        getSelectedServices.forEach((item, i, arr) => {
            let getItemBot = item.getBoundingClientRect().top + window.scrollY
            let actualWindowYScroll = Math.round(window.scrollY) + 100

            if (arr.length > 1) {
                for (let i = 0; i < arr.length; i++) {
                    let getVal = arr[i].getBoundingClientRect().top + window.scrollY

                    if (actualWindowYScroll < getVal) {
                        getItemBot = arr[i].getBoundingClientRect().top + window.scrollY
                        break
                    }
                }
            }
            let y = getItemBot - 100
            window.scroll({ top: y, behavior: 'smooth' })
        })
    }




    let isTop
    let isBot

    const topItemsLength = []
    const bottomItemsLength = []

    const topAndBotBadge = () => {

        isTop = topY.some(item => item < 20)
        isBot = botY.some(item => item > 350)

        topY.forEach(item => item < 20 && topItemsLength.push(item))
        botY.forEach(item => item > 350 && bottomItemsLength.push(item))

    }

    topAndBotBadge()

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

    const priceAndDuration = handlePriceAndDuration()

    // console.log("hi")

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

            {topY &&
                topY.map(() => (
                    <>
                        {isTop ? <div onClick={() => scrollToTopService()} className='fixed top-14 left-5 w-full h-10 text-xl bg-red-300 top-selected-services'>
                            {topItemsLength.length}  top services
                        </div> : ""}
                    </>
                ))
            }


            {botY &&
                botY.map(() => (
                    <>
                        {isBot ? <div onClick={() => { scrollToBotService()() }} className='fixed bottom-24 left-5 w-full h-10 text-xl bg-blue-300 top-selected-services'>
                            {bottomItemsLength.length}   bot service
                        </div> : ""}
                    </>
                ))
            }

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
        </>
    )
}

export default BookingServices