import React from "react";
import { useMatches } from "react-router-dom";
import globalSalons from "../../data/salondata/global/globalSalonData";
import CarouselWithServices from "../../components/carousel/CarouselWithServices";
import Carousel from "react-multi-carousel";
import { StarFilled } from "@ant-design/icons";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";

const ActualSalon = () => {
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
      </div>
    </>
  );
};

export default ActualSalon;
