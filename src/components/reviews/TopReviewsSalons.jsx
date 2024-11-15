import { StarFilled } from '@ant-design/icons'
import React from 'react'
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import { carouselResponsiveCode } from '../../ownModules/responsive/responsive';

const TopReviewsSalons = ({ salons }) => {

  let partialVisibilityGutter = 20
  const responsive = carouselResponsiveCode(partialVisibilityGutter)

  let totalReviews = salons.map(item => Number(item.reviews)).reduce((acc, currentVal) => acc + currentVal)

  let allRatings = salons.map(item => Number(item.rating))
  let averageRating = allRatings.reduce((acc, currentVal) => acc + currentVal) / allRatings.length

  // will round the values eg : 4.65 to 4.6
  const flooredAverageRating = Math.floor(averageRating * 10) / 10;

  let customerReviewAndSalon = []

  // for (let salon of salons) {
  for (let salon of salons) {
    for (let customer of salon.customerReviews) {
      let topReviewsObj = { ...customer, name: salon.name, category: salon.category, city: salon.city, rating: salon.rating, reviews: salon.reviews, address: salon.address, image: salon.img1 }
      customerReviewAndSalon.push(topReviewsObj)
      break;
    }
  }


  let getCustomerStars = (item) => {
    let countingStars = [];

    for (let i = 0; i < item; i++) {
      countingStars.push([item]);
    }

    return countingStars;
  };


  return (
    <div className=''>
      <div className='text-base mt-2'>
        {flooredAverageRating} <StarFilled /> Average of {totalReviews} reviews of {salons.length} venues
      </div>

      <div >
        <div>
          <Carousel responsive={responsive} partialVisible={true} arrows={false} infinite={true}>
            {customerReviewAndSalon.map((item, index) => (
              <Link
                to={`/dynamic-category/${item.category}/${item.city}/${item.name}`}
              >
                <div className=' border border-gray-500 rounded-md bg-[#f2f2f2] mt-3 mr-3 overflow-hidden'>
                  <div className='p-5 h-[270px] flex flex-col justify-between'>
                    <div>
                      <div>
                        {getCustomerStars(item.customerReviewStars).map(
                          (item) => (
                            <StarFilled />
                          )
                        )}
                      </div>
                      <div className='h-[50px]'>
                        <h3>{item.customerReviewMessage}</h3>
                      </div>
                    </div>

                    <div>
                      <div className="flex gap-2 items-center ">
                        <div className="w-16">
                          <img
                            src={item.customerImg}
                            className="rounded-full w-full"
                          />
                        </div>

                        <div>
                          <h4>{item.customerName}</h4>
                          <h4>{item.reviewDateTime}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white p-5 font-semibold  text-sm'>
                    <div className='flex justify-between gap-2'>
                      <div className='w-8/12'>
                        <div className='truncate text-base'>
                          {item.name}
                        </div>
                        <div className='flex gap-1'>
                          <div> {item.rating} </div>
                          <div> <StarFilled /> </div>
                          <div> {item.reviews} reviews </div>
                        </div>
                        <div className='font-normal truncate'> {item.address} </div>
                      </div>

                      <div className='w-3/12 '>
                        <img src={item.image} className='w-full rounded-md h-16' />
                      </div>
                    </div>
                    <div className='mt-5'>
                      <h3 className="text-blue-600">See all services</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default TopReviewsSalons