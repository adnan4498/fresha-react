import React, { useEffect, useState } from "react";
import { useMatches } from "react-router-dom";
import globalSalons from "../../data/salondata/global/globalSalonData";
import CarouselWithServices from "../../components/carousel/CarouselWithServices";
import Carousel from "react-multi-carousel";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import { Tabs } from 'antd';

const ActualSalon = () => {

  const [starCount, setStarCount] = useState([])

  var customerStarsCount = []

  useEffect(() => {
    console.log(customerStarsCount, "hiii")
    // setStarCount(customerStarsCount)
  }, [customerStarsCount])
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 70,
    },
  };

  let match = useMatches();

  let getCitySalons = globalSalons.filter(
    (item) => item.name == match[0].params.name
  );

  const {
    id,
    name,
    rating,
    reviews,
    city,
    gender,
    img1,
    innerImgs,
    salonSlug,
    speciality,
  } = getCitySalons[0];

  let theSalon = getCitySalons;

  let allSalonImgs = [...innerImgs];
  allSalonImgs.unshift(img1);

  let getServices = theSalon[0].services

  let tabItems = []

  Object.entries(getServices).forEach((item, index) => {
    tabItems.push(
      {
        key: item[0],
        label: <h3 className="text-base text-blue-500"> {item[0]} </h3>,
        children:
          <>
            {item[1].map((service, index) => (
              <div className="mt-5">
                <div>
                  <p className="text-xl">{service.name}</p>
                </div>
                <div>
                  <h3>{service.duration}</h3>
                </div>

                <div className="mt-3">
                  <h3>{service.price}</h3>
                </div>
                {/* <hr className="mt-3"></hr> */}
              </div>
            ))}
            <div>
              <div>
              </div>
            </div>
          </>
      },
    )
  })

  let getTeamMembers = theSalon.map(item => item.teamMembers)

  let stars = []
  let ratingDigit = theSalon[0].rating.slice(0, 1)

  while (stars.length < ratingDigit) {
    stars.push("star")
  }

  let customers = theSalon.map(item => item.customerReviews)

  console.log(customers, "customers")

  let getStars = (customerStars) => {

    while (customerStarsCount.length < customerStars) {
      // setStarCount("star")
      customerStarsCount.push("stars")
    }

    console.log(customerStarsCount, "ssss")
    // setStarCount(customerStarsCount)
  }


  return (
    <>
      {/* <div>Actual Salon</div> */}

      <div className="mt-5">
        <BreadCrumbs />
      </div>

      <div className=" mt-10">
        <div className="full-width-class">
          <Carousel responsive={responsive}>
            {allSalonImgs.map((item, index) => (
              <div key={index} className="h-80">
                <img src={`${item}`} className="h-full object-cover w-full" />
              </div>
            ))}
          </Carousel>
        </div>

        <div>
          {theSalon.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="mt-4">
                <h2 className="text-3xl truncate">{item.name}</h2>
              </div>
              <div className="flex gap-[6px]">
                <div>
                  <span className="font-bold ">
                    {item.rating} <StarFilled />
                  </span>
                </div>
                <div>
                  <span className="text-[#616769] font-semibold">
                    ({item.reviews})
                  </span>
                </div>
              </div>
              <div>
                <span className="line-clamp-1 text-[#838b8d]">
                  {item.address}
                </span>
              </div>
              <div className="border border-blue-200 rounded-full w-fit text-center mt-2 bg-blue-100 text-blue-600">
                <span className="text-sm font-medium px-2">{item.gender}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="my-8">
          <div>
            <h2>Services</h2>
          </div>

          <div>
            <div>
              <Tabs defaultActiveKey="1" items={tabItems} />
            </div>
            <div className="text-lg border border-gray-300 rounded-lg text-center py-2 mt-10">
              <p>See all</p>
            </div>
          </div>
        </div>

        <div className="">
          <div>
            <h2>Team</h2>
          </div>

          {/* {console.log(theSalon[0].teamMembers[0].memberImg, "tttt")} */}

          <div className="grid grid-cols-3 gap-10 mt-5">
            {getTeamMembers[0].map((item, index) => (
              <div className="relative">
                <div className="w-24 h-24 ">
                  <img src={item.memberImg} className="rounded-full w-full h-full object-cover" />
                </div>

                <div className="absolute border top-20 left-5 border-gray-300 rounded-full bg-white px-2 flex gap-1">
                  <div>
                    <p >{item.memberRating}</p>
                  </div>
                  <div>
                    <StarFilled />
                  </div>
                </div>

                <div className="text-center w-24 mt-3">
                  <div>
                    <p>{item.memberName}</p>
                  </div>

                  <div className="text-ellipsis text-center">
                    <h4 className="text-xs truncate">{item.memberSpeciality}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10">
          <div>
            <h2>Reviews</h2>
          </div>

          <div className="flex gap-[10px] mt-4">
            {stars.map((item) => (
              <div className="text-3xl">
                <StarFilled />
              </div>
            ))}
          </div>

          {theSalon.map((item, index) => (
            <div className="flex gap-1 mt-2">
              <div>
                <p>{item.rating}</p>
              </div>
              <div>
                <h3 className="text-blue-500">({item.reviews})</h3>
              </div>
            </div>
          ))}

          <hr className="my-5"></hr>

          <div className="flex flex-col gap-4">
            {customers[0].map((item, index) => (
              <div className="flex gap-2 items-center">
                {getStars(item.customerReviewStars)}
                <div className="w-16">
                  <img src={item.customerImg} className="rounded-full w-full" />
                </div>

                <div>
                  <h4>{item.customerName}</h4>
                  <h4>{item.reviewDateTime}</h4>

                  <h4>{item.customerReviewStars}</h4>

                  <div>{customerStarsCount.map((item, index) => (
                    <div className="text-3xl">
                      <StarFilled />
                    </div>
                  ))}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActualSalon;
