import React from 'react'
import allDubaiSalons from '../data/salondata/dubai/dubaiData';
import allPakistanSalons from '../data/salondata/pakistan/pakistanData';
import CarouselComp from '../components/carousel/CarouselComp';
import CarouselToShop from '../components/carousel/CarouselToShop';

const SalonCarousels = () => {

    return (
        <div>
            <div>
                <div className='mb-3'>
                    <h2>Dubai</h2>
                </div>

                <CarouselComp countrySalons={allDubaiSalons}/>
            </div>



            <div>
                <div className='mb-3 mt-10'>
                    <h2>Pakistan</h2>
                </div>

                {/* <CarouselComp countrySalons={allPakistanSalons}/> */}
                <CarouselToShop countrySalons={allPakistanSalons}/>

            </div>
        </div>
    )
}

export default SalonCarousels