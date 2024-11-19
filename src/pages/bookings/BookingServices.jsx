import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Tabs } from "antd";
import { useLocation } from 'react-router-dom';

const BookingServices = () => {
    const [activeHeading, setActiveHeading] = useState()

    const location = useLocation();

    // const stateValue = useMemo(() => {
    //     return location.state
    // }, [])

    let services = location.state

    useEffect(() => {

        const getAllElements = [...document.querySelectorAll(".headingClass")]

        const getAllElementsHeadings = document.querySelectorAll(".headingClass")

        window.addEventListener('scroll', () => {
            (myfunction(getAllElements, getAllElementsHeadings))
        });
    }, [])


    function myfunction(ele, headings) {
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

    function ScrollToX(e) {
        // console.log("hello")
        let div = e.target
        div.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }

    return (
        <>

            {/* <a href="#div1" onclick="scrollToDiv(); return false;">Link</a> */}
            {/* <a href="#div1" onClick={(event) => { scrollToDiv(event); event.preventDefault(); }}>div1</a> */}


            <div className="fixed top-0 left-5 w-full overflow-x-scroll h-20 py-5 bg-white">
                <div className="flex gap-16 w-[800px]">
                    {Object.entries(services).map((item, index) => (
                        <a href={`#${item[0]}`} onClick={(e) => { scrollToDiv(e); e.preventDefault(); }}>
                            <div onClick={(e) => ScrollToX(e)} className={`${item[0] == activeHeading && "bg-red-500"} headingDivs`} key={index}>
                                {item[0]}
                            </div>
                        </a>
                    ))}
                </div>
            </div>


            <div className='my-20'>
                {Object.entries(services).map((item, index) => (
                    <>
                        <div className='my-10'>
                            <h2 className='headingClass' id={`${item[0]}`}> {item[0]} </h2>
                        </div>
                        <div className='w-full'>
                            <>
                                {item[1].map((service, index) => (
                                    <div className="mt-5 flex justify-between items-center" >
                                        <div
                                        >
                                            <div>
                                                <div className="text-base font-medium">{service.name}</div>
                                            </div>
                                            <div>
                                                <h3>{service.duration}</h3>
                                            </div>

                                            <div className="mt-3">
                                                <h3>{service.price}</h3>
                                            </div>
                                        </div>
                                        <div className="text-base font-semibold border border-gray-300 rounded-full px-4 py-[6px] ">
                                            Book
                                        </div>
                                    </div>
                                ))}
                            </>
                        </div>
                    </>
                ))}
            </div>


            <div id="div1" class="myDiv bg-blue-300">
                one
            </div>

            <div class="h-[800px] my-[50px] bg-orange-500">
                one
            </div>

            <div id="div2" class="myDiv bg-red-300">
                one
            </div>



            {/* <div className="text-lg border border-gray-300 rounded-lg text-center py-2 mt-10">
                <p>Continue</p>
            </div> */}
        </>
    )
}

export default BookingServices