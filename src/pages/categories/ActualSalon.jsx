import React, { useContext, useMemo, useState } from "react";
import { useMatches, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { StarFilled } from "@ant-design/icons";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import { Tabs } from "antd";
import CarouselComp from "../../components/carousel/CarouselComp";
import SubCategories from "../../components/subCategories/SubCategories";
import { carouselResponsiveCode } from "../../ownModules/responsive/responsive";
import BookNow from "../../components/bookNow/BookNowAndContinue";
import getGlobalSalons from "../../data/salondata/global/globalSalonData";
import makingOfAllServicesArray from "../../ownModules/makeAllServicesArr/makingOfAllServicesArray";
import { useEffect } from "react";
import BookNowAndContinue from "../../components/bookNow/BookNowAndContinue";
import { salonDataZustandStore } from "../../zustandStore";
import servicesOfSpecialist from "../../ownModules/specialistServices/SpecialistServices";

const ActualSalon = () => {

  let globalSalons = getGlobalSalons()

  const { salonDataZustand, setSalonDataZustand } = salonDataZustandStore((state) => state)

  useEffect(() => {
    // setSalonDataZustand(getSalonDataForZustand)
    // setSalonDataZustand((store) => ({...store, salonDataZustand : {...store.salonDataZustand, getSalonDataForZustand}}))
    setSalonDataZustand(getSalonDataForZustand)
  }, [])

  let navigate = useNavigate()
  let match = useMatches();

  let partialVisibilityGutter = 70
  const responsive = carouselResponsiveCode(partialVisibilityGutter)

  let categoryName = match[0].params.category
  let cityName = match[0].params.city
  let salonName = match[0].params.name

  // get same city salons but not the actual salon (its already being displayed)
  let getNearbySalons = globalSalons.filter(item => item.city == match[1].params.city).filter(item => item.name != match[1].params.name)

  let getCitySalons = globalSalons.filter(
    (item) => item.name == match[0].params.name
  );

  const {
    img1,
    innerImgs,
  } = getCitySalons[0];

  let theSalon = getCitySalons;

  // adds allServicesArr 
  let getDups = true
  theSalon = makingOfAllServicesArray(theSalon, getDups);

  let allSalonImgs = [...innerImgs];
  allSalonImgs.unshift(img1);

  let getServices = theSalon[0].services;

  let getTeamMembers = theSalon.map((item) => item.teamMembers);
  let customers = theSalon.map((item) => item.customerReviews);

  // service heading first letter capitalized
  const serviceCapitalized = () => {
    let capitalized = Object.keys(getServices).map((item) => {
      let qomaReplaced = item.replaceAll("_", " ")

      let firstLetter = qomaReplaced[0]
      let makefirstLetterCapital = qomaReplaced[0].toUpperCase()

      let replaceFirstLetter = qomaReplaced.replace(firstLetter, makefirstLetterCapital)
      return replaceFirstLetter
    })
    return capitalized
  }

  let getServicesCapital = serviceCapitalized()

  function getcurrencySymbol() {
    // just to get currencySymbol
    let getPrice = theSalon[0].serviceNameAndPrice[0].price
    let getCurrency = getPrice?.includes("OMR") ? "OMR" : getPrice?.includes("PKR") ? "PKR" : getPrice?.includes("AED") ? "AED" : ""

    return getCurrency
  }

  let currencySymbol = getcurrencySymbol()

  let removeUnderscore = () => {
    let underScoreRemoved = {}
    let getServiceValues = []

    Object.values(getServices).forEach(item => getServiceValues.push(item))

    for (let i = 0; i < getServicesCapital.length; i++) {
      underScoreRemoved[getServicesCapital[i]] = Object.values(getServiceValues[i]).map(item => item)
    }
    return underScoreRemoved
  }

  let servicesWithoutUnderscore = removeUnderscore()

  let tabItems = [];

  let showClickedServiceInBookingService = (name, price, duration) => {
    let serviceInCartArr = {
      name: name,
      duration: duration,
      price: price,
    }

    let serviceInCartObj = [{
      name: name,
      duration: duration,
      price: price,
    }]

    setSalonDataZustand((prevState) => ({ ...prevState, priceAndDuration: serviceInCartArr, selectedServices: serviceInCartObj }));
  }

  const handleIsPackgeData = (subServices) => {
    console.log(subServices, "SS")

    

  }

  Object.entries(servicesWithoutUnderscore).forEach((item, index) => {
    tabItems.push({
      key: item[0],
      label: <h3 className="text-base text-blue-500"> {item[0]} </h3>,
      children: (
        <>
          {item[1].map((service, index) => (
            <div key={index} className="mt-5 flex justify-between items-center" >
              <div
              >
                <div>
                  <p className="text-xl">{service.name}</p>
                </div>

                {service?.isPackage && handleIsPackgeData(service.subServices)}


                <div>
                  <h3>{service.duration}</h3>
                </div>

                <div className="mt-3">
                  <h3>{service.price}</h3>
                </div>
              </div>
              <div onClick={() => {
                showClickedServiceInBookingService(service.name, service.price, service.duration), navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/bookingService`, {
                  state: {
                    servicesWithoutUnderscore,
                    serviceInCart: {
                      name: service.name,
                      duration: service.duration,
                      price: service.price,
                    },
                    currencySymbol,
                  }
                })
              }} className="text-base font-semibold border border-gray-300 rounded-full px-4 py-[6px] ">
                Book
              </div>
            </div>
          ))}
        </>
      ),
    });
  });

  const getSalonStars = () => {
    let salonStars = [];
    let ratingDigit = theSalon[0].rating.slice(0, 1);

    while (salonStars.length < ratingDigit) {
      salonStars.push("star");
    }

    return salonStars;
  };

  let getCustomerStars = (item) => {
    let countingStars = [];

    for (let i = 0; i < item; i++) {
      countingStars.push([item]);
    }

    return countingStars;
  };

  let getTimings = theSalon[0].openingTimes;

  let salonServicesLength = theSalon[0].serviceNameAndPrice.length

  let showBookNowBtn = true

  let serviceInCartObj = []

  let getSalonDataForZustand = {
    salonServicesLength: salonServicesLength,
    categoryName: categoryName,
    cityName: cityName,
    salonName: salonName,
    servicesWithoutUnderscore: servicesWithoutUnderscore,
    currencySymbol: currencySymbol,
    professionalsList: getTeamMembers,
    selectedServices: serviceInCartObj,
  }

  console.log(salonDataZustand, "salonData in actual")

  return (
    <>
      <div className="mt-5 relative">
        <BreadCrumbs />
      </div>


      <div className="mt-10 overflow-x-hidden">
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

          <div className="grid grid-cols-3 gap-10 mt-5">
            {getTeamMembers[0].map((item, index) => (
              <div onClick={() => {
                setSalonDataZustand((prevState) => ({ ...prevState, selectedServices: [] })), navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/bookingService/professionalWithService`, {
                  state: {
                    getSpecialistServices: servicesOfSpecialist(item, servicesWithoutUnderscore),
                    teamMember: item,
                    currencySymbol,

                    serviceInCart: []
                  }

                  // state: {
                  //   servicesWithoutUnderscore,
                  //   serviceInCart: {
                  //     name: service.name,
                  //     duration: service.duration,
                  //     price: service.price,
                  //   },
                  //   currencySymbol,
                  // }

                })
              }} className="relative">
                <div className="w-24 h-24 ">
                  <img
                    src={item.memberImg}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>

                <div className="absolute border top-20 left-5 border-gray-300 rounded-full bg-white px-2 flex gap-1">
                  <div>
                    <p>{item.memberRating}</p>
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
                    <h4 className="text-xs truncate">
                      {item.memberSpeciality}
                    </h4>
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
            {getSalonStars().map((item) => (
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

          <div className="flex flex-col gap-2">
            {customers[0].map((item, index) => (
              <>
                {index <= 5 ? (
                  <>
                    <div className="flex gap-2 items-center mt-4">
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
                    <div className="">
                      {getCustomerStars(item.customerReviewStars).map(
                        (item) => (
                          <StarFilled />
                        )
                      )}
                      <h3>{item.customerReviewMessage}</h3>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>

          <div className="text-lg border border-gray-300 rounded-lg text-center py-2 mt-10">
            <p>See all</p>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="mb-3">About</h2>

          {theSalon.map((item, index) => (
            <h3>{item.about}</h3>
          ))}
        </div>

        <div>
          <h2 className="mb-3">Opening Times</h2>
          {Object.entries(getTimings).map((item, index) => (
            <div className="flex justify-between">
              <div>{item[0]}</div>

              {item[1][0].closed ? (
                item[1][0]?.closed
              ) : (
                <div className="flex gap-2">
                  <div>{item[1][0].opening}</div>-
                  <div>{item[1][0].closing}</div>
                </div>
              )}

            </div>
          ))}
        </div>

        <div>
          <h2 className="mb-3 mt-5">Additional information</h2>

          {theSalon[0].additionalInformation.map((item, index) => (
            <div>{item}</div>
          ))}
        </div>

        <div className="my-6">
          <h2>Google Map Here</h2>

          {/* <div className="mt-5" onClick={()=> setSalonDataZustand((store) => ({...store, salonDataZustand: {}}))}> */}
          <div className="mt-5">
            {theSalon.map(item => item.address)}
            <span className="text-blue-700"> Get direction</span>
          </div>
        </div>

        <div>
          <h2>Venues nearby</h2>

          <div>
            <CarouselComp countrySalons={getNearbySalons} />
          </div>
        </div>


        <div className="my-6">
          <h2>Treat yourself anytime, anywhere</h2>

          <div className="text-sm border border-black w-52 bg-black text-white rounded-full text-center py-2 mt-4">
            <p>{`Other businesses in ${match[1].params.city}`}</p>
          </div>
        </div>

        <div className=" overflow-x-scroll">
          <SubCategories salon={getNearbySalons} />
        </div>

        {salonDataZustand.length != 0 && <div>
          <BookNowAndContinue showBookNowBtn={showBookNowBtn} />
        </div>}

      </div>
    </>
  );
};

export default ActualSalon;
