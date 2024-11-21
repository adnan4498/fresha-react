import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Tabs } from "antd";
import { useLocation, useMatches } from 'react-router-dom';
import { CheckOutlined } from '@ant-design/icons';

const BookingServices = () => {
    const [activeHeading, setActiveHeading] = useState()
    const [selected, setSelected] = useState([])
    const [dummyState, setDummyState] = useState([{
        name : "a"
    }])

    const location = useLocation();

    let services = location.state.servicesWithoutUnderscore

    let cartService = location.state.serviceInCart

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

    if (activeHeading) {
        const div = document.getElementsByClassName(activeHeading)[0]
        div.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }

    const handleSelect = (name) => {
        selected == undefined && setSelected((serviceNames) => [...serviceNames, {name : name}])

        if (selected.includes(name)) {
            let removeSelected = selected.filter(serviceNames => serviceNames != name)
            setSelected({name : removeSelected})
        }
        else {

            setSelected((serviceNames) => [...serviceNames, {name : name}])
        }
    }

    let dummyFunc = () =>{
        setDummyState(dummyState[0].name = "hi")
    }

    console.log(dummyState[0].name, "selected")

    return (
        <>
            <div className="fixed top-0 left-5 w-full overflow-x-scroll h-20 py-5 bg-white">
                <div className="flex gap-16 w-[800px]">
                    {Object.entries(services).map((item, index) => (
                        <a href={`#${item[0]}`} onClick={(e) => { scrollToDiv(e); e.preventDefault(); }}>
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
                                {item[1].map((service, index) => (
                                    <div key={index} className="mt-5 flex justify-between items-center" >
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

                                        <div onClick={() => [handleSelect(service.name), dummyFunc()]} className={`text-xl font-semibold border border-gray-300 ${selected.includes(service.name) ? "bg-[#6950f3]" : "bg-white"}  rounded-lg px-3 py-1 pb-2`}>
                                            {selected.includes(service.name) ? <CheckOutlined className='text-white' /> : "+"}
                                        </div>

                                    </div>
                                ))}
                            </>
                        </div>
                    </>
                ))}
            </div>



            {/* {cartService &&
                <div className="fixed flex justify-between px-5 mt-10 py-5 bottom-0 w-[100%] left-0 border-t border-gray-400 text-center bg-white">

                    <div className=''>
                        <div>
                            <h3 className='text-left font-semibold'>
                                {cartService.price}
                            </h3>
                        </div>

                        <div>
                            <span>1 Service</span>
                            <span>{cartService.duration}</span>
                        </div>
                    </div>
                    <div>
                        <p>Continue</p>
                    </div>
                </div>} */}


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