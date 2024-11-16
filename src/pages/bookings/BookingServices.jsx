import React, { useEffect, useRef } from 'react'
import { Tabs } from "antd";
import { useLocation } from 'react-router-dom';

const BookingServices = () => {

    const location = useLocation();

    let services = location.state
    let headingRef = useRef()

    function logit() {
        console.log(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });


    return (
        <>
            <div className="fixed top-0 left-5 w-full overflow-x-scroll h-20 py-5 bg-white">
                <div className="flex gap-16 w-[800px]">
                    {Object.entries(services).map((item, index) => (
                        <div className="" key={index}>
                            {item[0]}
                        </div>
                    ))}
                </div>
            </div>


            <div ref={headingRef} className='my-20'>
                {Object.entries(services).map((item, index) => (
                    <>
                        <div className='my-10'>
                            <h2> {item[0]} </h2>
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



            {/* <div className="text-lg border border-gray-300 rounded-lg text-center py-2 mt-10">
                <p>Continue</p>
            </div> */}
        </>
    )
}

export default BookingServices















// Object.entries(servicesWithoutUnderscore).forEach((item, index) => {
//     tabItems.push({
//         key: item[0],
//         label: <h3 className="text-base text-blue-500"> {item[0]} </h3>,
//         children: (
//             <>
//                 {item[1].map((service, index) => (
//                     <div className="mt-5 flex justify-between items-center" >
//                         <div
//                         >
//                             <div>
//                                 <p className="text-xl">{service.name}</p>
//                             </div>
//                             <div>
//                                 <h3>{service.duration}</h3>
//                             </div>

//                             <div className="mt-3">
//                                 <h3>{service.price}</h3>
//                             </div>
//                         </div>
//                         <div className="text-base font-semibold border border-gray-300 rounded-full px-4 py-[6px] ">
//                             Book
//                         </div>
//                     </div>
//                 ))}
//             </>
//         ),
//     });
// });

{/* <div>
<Tabs defaultActiveKey="1" items={tabItems} />
</div> */}