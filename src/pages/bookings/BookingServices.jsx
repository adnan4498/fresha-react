import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Tabs } from "antd";
import { useLocation, useMatches } from 'react-router-dom';
import { CheckOutlined } from '@ant-design/icons';

const BookingServices = () => {

    const location = useLocation();

    let services = location.state.servicesWithoutUnderscore
    let serviceInCart = location.state.serviceInCart

    const [activeHeading, setActiveHeading] = useState()
    const [selected, setSelected] = useState([serviceInCart])

    useEffect(() => {
        const getAllElements = [...document.querySelectorAll(".headingClass")]
        const getAllElementsHeadings = document.querySelectorAll(".headingClass")

        window.addEventListener('scroll', () => {
            (handleScroll(getAllElements, getAllElementsHeadings))
        });
    }, [])




    // will scroll to selected service by user from previous page
    useEffect(() => {

        let serviceNameDiv = [document.querySelectorAll(".serviceNameDiv")]
        let scrollToService

        for (let items of serviceNameDiv) {
            for (let item of items) {
                selected[0].name == item.textContent && (scrollToService = item)
            }
        }

        let y = scrollToService.offsetTop - 100
        window.scroll({ top: y, behavior: 'smooth' })

    }, [])


    function handleScroll(ele, headings) {
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

    function scrollToDiv(e) {
        const div = document.getElementById(e.target.textContent)

        const yOffset = -90;
        const y = div.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    if (activeHeading) {
        const div = document.getElementsByClassName(activeHeading)[0]
        div.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }

    const handleSelect = (name, duration, price) => {
        let noDup

        let findDup = selected?.filter(item => item.name == name)
        findDup.length == 0 && (noDup = true)

        if (noDup) {
            setSelected(oldState => ([...oldState, { name: name, price: price, duration: duration }]))
        }
        else {
            let getItem = selected.filter(item => item.name != name)
            setSelected(getItem)
        }
    }

    let handleTick = (serviceName) => {

        let checkItem = []

        for (let item of selected) {
            item.name == serviceName && checkItem.push(item)
        }

        if (checkItem.length > 0) {
            return checkItem
        }
    }

    let serviceDuration

    const handleDuration = () => {

        let getDuration = []
        let replaceMin = []

        selected.forEach(item => getDuration.push(item.duration))

        getDuration.forEach((item) => {
            let replacing = item.replace("min", "")
            replaceMin.push(replacing)
        })

        replaceMin.length > 1 && (serviceDuration = replaceMin.reduce((accu, currentVal) => Number(accu) + Number(currentVal)) + " min")
    }

    let price

    const handlePrice = () => {

        let getPrice = []
        let replaceMin2 = []

        selected.forEach(item => getPrice.push(item.price))

        getPrice.forEach((item) => {
            let replacing = item.replace("OMR ", "")
            replaceMin2.push(replacing)
        })


        replaceMin2.length > 1 && (price = replaceMin2.reduce((accu, currentVal) => Number(accu) + Number(currentVal)))
    }

    let getcurrenySymbol = () => {
        let getPrice = selected[0].price
        return getPrice.includes("OMR") ? "OMR" : getPrice.includes("PKR") ? "PKR" : getPrice.includes("AED") ? "AED" : ""
    }

    let currenySymbol = useMemo(() => {
        return getcurrenySymbol()
    }, [])

    handlePrice()

    handleDuration()

    return (
        <>
            <div className="fixed top-0 left-5 w-full overflow-x-scroll h-20 py-5 bg-white">
                <div className="flex gap-16 w-[800px]">
                    {Object.entries(services).map((item, index) => (
                        <a key={index} href={`#${item[0]}`} onClick={(e) => { scrollToDiv(e); e.preventDefault(); }}>
                            <div className={`${item[0]} ${item[0] == activeHeading && "text-red-500"} headingDivs`} key={index}>
                                {item[0]}
                            </div>
                        </a>
                    ))}
                </div>
            </div>


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
                                                <div className="text-base font-medium serviceNameDiv">{service.name}</div>
                                            </div>

                                            <div>
                                                <h3>{service.duration}</h3>
                                            </div>

                                            <div className="mt-3">
                                                <h3>{service.price}</h3>
                                            </div>
                                        </div>

                                        <div onClick={() => [handleSelect(service.name, service.duration, service.price)]} className={`text-xl font-semibold border border-gray-300 ${selected.name?.includes(service.name) ? "bg-[#6950f3]" : "bg-white"}  rounded-lg px-3 py-1 pb-2`}>
                                            {handleTick(service.name) ? <CheckOutlined className='text-white bg-purple-300' /> : "+"}
                                        </div>

                                    </div>
                                ))}
                            </>
                        </div>
                    </>
                ))}
            </div>


            {/* selected[0] is first selected service from previous page */}
            {selected.length != 0 &&
                <div className="fixed flex justify-between px-5 mt-10 py-5 bottom-0 w-[100%] left-0 border-t border-gray-400 text-center bg-white">

                    <div className=''>
                        <div>
                            <h3 className='text-left font-semibold text-black'>
                                {/* this `${}` add space between currenySymbol and price */}
                                {price ? (`${currenySymbol } ${ price}`)  : selected[0].price}
                            </h3>
                        </div>

                        <div className='flex gap-2 text-sm'>
                            <div> {selected.length} service{selected.length > 1 && "s"} </div>

                            <div>
                                {serviceDuration ? serviceDuration : selected[0].duration}
                            </div>
                        </div>
                    </div>
                    <div className='bg-black text-white rounded-lg items-center flex px-8'>
                        <p>Continue</p>
                    </div>
                </div>}


            <div className='flex flex-col gap-4'>

                {/* {dummyNums.map((item, i) => (
                    <div onClick={()=> handleSelect(i)} key={i} className={`${selected.includes(i) && "text-red-500"}`}>
                        {item}
                    </div>
                ))} */}

            </div>

        </>
    )
}

export default BookingServices