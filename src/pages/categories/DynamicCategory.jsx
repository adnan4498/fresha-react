import React from 'react'
import { useParams } from 'react-router-dom'
import hairSalonBanner from "../../../public/images/salons/hairSalon/hair-salon-banner.jpg"
import barberShopBanner from "../../../public/images/salons/barberSalon/barber-shop-banner.jpeg"
import eyeBrowBanner from "../../../public/images/salons/eyesBrowAndLashes/eye-brows-and-lashes-banner.webp"
import { Button } from 'antd'

const DynamicCategory = () => {
    let urlParam = useParams()

    console.log(urlParam.category, "use")

    let categoryName
    let categoryImg

    if (urlParam.category == "hair-salon") {
        categoryName = "Hair Salons"
        categoryImg = hairSalonBanner
    }
    else if (urlParam.category == "eyebrows-lashes") {
        categoryName = "Eye Salons"
        categoryImg = barberShopBanner
    }
    else if (urlParam.category == "barber-shop") {
        categoryName = "Barber Shop"
        categoryImg = eyeBrowBanner
    }



    return (
        <div>
            <hr className='mt-7 mb-3'></hr>
            <div className=''>
                breadcrums here
            </div>

            <div className='full-width-class'>
                <div className=' mt-5 relative brightness-[70%]'>
                    <img src={hairSalonBanner} />
                </div>

                <div className='bottom-10  text-center absolute text-white'>
                    <p className='text-2xl'>Find {categoryName} near me</p>
                    <span>Search for top {categoryName} near me</span>

                    <div>
                        <Button className="w-44 text-base bg-white text-black py-6 rounded-lg">
                            <p>Search near me</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DynamicCategory