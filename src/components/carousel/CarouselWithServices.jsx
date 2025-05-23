import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import removingDuplicates from "../../ownModules/removing/removeDuplicates";
import TopReviewsSalons from "../reviews/TopReviewsSalons";
import GetBookingApp from "../getBookingApp/GetBookingApp";
import generateSubCategoryLink from "../../ownModules/categoryData/generateSubCategoryLink";

const CarouselWithServices = ({
  salons,
  subCategoryName,
  seperatedSubCategoryNames,
  isSeperatedCategory,
  showTopReviewsSalons,
  categoryName,
  cityName,
  getCountrySalons,
}) => {

  let navigate = useNavigate();

  let firstNameBg = true;

  let loadSameUrl

  useEffect(() => {
    // window.scrollTo(0, 0)
    loadSameUrl = window.location.href
  }, [triggerUseEffect])


  function triggerUseEffect() { }

  // salon in argument is single salon item from salons
  const sliceNameAndPrice = (salon, firstNameBg) => {
    let getServices = [];
    let otherSimilarServices = [];


    let getServicesFromSalon = () => {
      for (let serviceName of salon.serviceNameAndPrice) {
        let servicesInString = serviceName.name.split(" ").join("");
        for (let subName of seperatedSubCategoryNames) {
          let nameToString = subName.join("");
          if (servicesInString.includes(nameToString)) {
            getServices.push(serviceName);
          }
        }
      }
    };

    // only for parents sending seperatedSubCategoryNames prop
    isSeperatedCategory && getServicesFromSalon();

    let getServicesWithoutDup = removingDuplicates(getServices);

    // adding subCategoryName at first in following Array
    getServicesWithoutDup.forEach((item) => {
      item.name == subCategoryName && getServicesWithoutDup.unshift(item);
    });

    let subCategoryNameAtTopArr = removingDuplicates(getServicesWithoutDup);

    // pushing other similar services
    for (let services of salon.serviceNameAndPrice) {
      otherSimilarServices.push(services);
    }

    let addingExtraServices = () => {
      // adds extra services to fill the (show 4 services) criteria
      if (subCategoryNameAtTopArr.length != 0) {
        let getLength = subCategoryNameAtTopArr.length;

        // adds services against lenght eg: if lenth is 1, adds 3 services to make it 4
        let loopLength =
          getLength == 1 ? 3 : getLength == 2 ? 2 : getLength == 3 ? 1 : "";

        for (let i = 0; i < loopLength; i++) {
          subCategoryNameAtTopArr.push(otherSimilarServices[i]);
        }
        return subCategoryNameAtTopArr;
      } else {
        return otherSimilarServices;
      }
    };

    let renderServices = addingExtraServices();

    // only show 4 services
    renderServices = renderServices?.slice(0, 4);

    return (
      <>
        {renderServices?.map((item, i) => (
          <div
            key={i}
            className={`${i == 0 && firstNameBg ? "bg-[#dae1e2] rounded-lg" : ""
              } flex justify-between my-5`}
          >
            <div>
              <p className="text-base">{item.name}</p>
              <span>{item.duration}</span>
            </div>
            <div>{item.price}</div>
          </div>
        ))}
      </>
    );
  };

  // extracts single (other simillar salon) name
  const showOtherSalonHeading = () => {
    let otherSalonsArr = [];

    for (let salon of getCountrySalons) {
      let isOtherSalon = salon.serviceNameAndPrice?.some((item) =>
        item.name.includes(subCategoryName)
      );

      // push non-sub-category salons
      !isOtherSalon && otherSalonsArr.push(salon);
    }

    otherSalonsArr = otherSalonsArr.slice(0, 1);

    // only single non-sub-category name is enough to show salon heading
    return otherSalonsArr[0]?.name;
  };

  // used to show other salon heading
  let otherSalonName = showOtherSalonHeading();

  let sameServiceInOtherCities = []
  let category_or_sub_category_name = sameServiceInOtherCities.length != 0 ? subCategoryName : categoryName

  // console.log(subCategoryName, "subCategoryName")
  // console.log(categoryName, "categoryName")

  let settingCategory = () => {
    let sameCityServices = () => {

      // get salons on category or sub-category
      if (subCategoryName != undefined) {
        for (let salons of getCountrySalons) {
          for (let services of salons.serviceNameAndPrice) {
            if (services.name == category_or_sub_category_name) {
              sameServiceInOtherCities.push(salons)
              return
            }
          }
        }
      }
      else {
        for (let salons of getCountrySalons) {
          if (salons.category == category_or_sub_category_name) {
            sameServiceInOtherCities.push(salons)
            return
          }

        }
      }
    }

    sameCityServices()

  }

  settingCategory()

  console.log(salons, "ssss")

  return (
    <>
      {salons.map((item, index) => (
        <>
          {item.name == otherSalonName && (
            <>
              {/* <h2>Salons with Similar Services </h2> */}
              {(firstNameBg = false)}
            </>
          )}

          <div key={index} className=" my-10">
            <Card
              hoverable
              style={{}}
              cover={
                <img
                  alt="example"
                  src={item.img1}
                  className="h-36 object-cover"
                />
              }
            >
              {" "}
              <Link
                to={`/dynamic-category/${item.category}/${item.city}/${item.name}`}
              >
                <div>
                  <p className="text-lg truncate">{item.name}</p>
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
                  <span className="text-sm font-medium px-2">
                    {item.gender}
                  </span>
                </div>

                <div className="mt-5">
                  {item.serviceNameAndPrice &&
                    sliceNameAndPrice(item, firstNameBg)}
                </div>

                <div>
                  <h3 className="text-[#6950F3]">See all services</h3>
                </div>
              </Link>
            </Card>
          </div>
        </>
      ))}

      {showTopReviewsSalons && (
        <>
          <div>
            <h2 className="text-2xl">
              Top Reviews of {categoryName} near you in {cityName}
            </h2>
            <TopReviewsSalons salons={salons} />
          </div>

          <div>
            <div>
              <h2 className="text-[23px] mt-10"> Book your next {categoryName} appointment in {cityName} with Fresha</h2>
            </div>

            <div className="mt-5 text-">
              <span>
                <Link to={"/"} className="text-[#6950F3]"> Fresha </Link> is the number one wellness hub in the world. We're the infusion of excellence you need right now. Fresha can pair you with your perfect <span onClick={() => triggerUseEffect()}> <Link to={loadSameUrl} className="text-[#6950F3]">{categoryName}</Link> </span> salon,  to offer your favourite treatments in Muscat. Simply search your area and pick your preferred appointment time. We'll even send your appointment reminder straight to your mobile. Just turn up, and we'll sort the rest.
              </span>
            </div>

            <div className="mt-5">
              <span>
                And we make booking in a breeze. Discover over {salons.length} hair salons in your area that are ready and waiting to make you feel like your best self. Businesses in Muscat are renowned for their top-notch quality, too. Over {salons.length} of them have above 4.5-star reviews. So you can book with confidence. But if you need a little more persuading, there are over 2 million authentic customer reviews on Fresha. With everything in one place, we think you'll find your new favourite spot in no time at all.
              </span>
            </div>

            <div className="mt-5">
              <span>
                We've booked over 1 billion appointments already at Fresha. And with yours up next, we'll be achieving the next million at any moment. Making those stats possible are Fresha's 110,000 Oman and global business partners. They're using our free <Link className="text-[#6950F3]">booking software</Link>, which is packed with features for managing businesses large and small. We keep on getting better so that our business partners can do the same for you. So after your treatment, email <Link className="text-[#6950F3]"> hello@fresha.com </Link> to let us know how your Muscat appointment went. Go on, make yourself one of the many satisfied Fresha customers by booking in now.
              </span>
            </div>
          </div>

          <div>
            <GetBookingApp />
          </div>


          <div className="mt-10">
            <h2 className="text-2xl">
              Browse Cities
            </h2>

            {/* {console.log(sameServiceInOtherCities, "sameServiceInOtherCities")} */}

            <div className="mt-8">
              {sameServiceInOtherCities.length != 0 && (
                sameServiceInOtherCities.map((item, i) => (
                  <div key={i} onClick={() => generateSubCategoryLink(item, category_or_sub_category_name, navigate)} className="mt-3 text-[15px] font-medium">
                    <div className="flex">
                      {categoryName} in {item.city}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </>
      )}
    </>
  );
};

export default CarouselWithServices;
