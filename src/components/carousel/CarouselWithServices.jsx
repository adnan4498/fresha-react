import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import removingDuplicates from "../../ownModules/removeDuplicates/removeDuplicates";
import { useState } from "react";

const CarouselWithServices = ({
  salons,
  subCategoryName,
  seperatedSubCategoryNames,
}) => {
  let firstNameBg = true;

  // salon is single salon item from salons
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

    getServicesFromSalon();

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

    let renderServices  = addingExtraServices();

    // only show 4 services
    renderServices = renderServices?.slice(0, 4);

    return (
      <>
        {renderServices?.map((item, i) => (
          <div
            key={i}
            className={`${
              i == 0 && firstNameBg ? "bg-[#dae1e2] rounded-lg" : ""
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

    for (let salon of salons) {
      let isOtherSalon = salon.serviceNameAndPrice.some((item) =>
        item.name.includes(subCategoryName)
      );

      // push non-sub-category salons 
      !isOtherSalon && otherSalonsArr.push(salon);
    }

    otherSalonsArr = otherSalonsArr.slice(0, 1);

    // only single non-sub-category name is enough to show salon heading
    return otherSalonsArr[0].name;
  };

  // used to show other salon heading
  let otherSalonName = showOtherSalonHeading();

  return (
    <>
      {salons.map((item, index) => (
        <>
          {item.name == otherSalonName && (
            <h2>Salons with Similar Services </h2>
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
                  {sliceNameAndPrice(item, firstNameBg)}
                </div>

                <div>
                  <h3 className="text-blue-500">See all services</h3>
                </div>
              </Link>
            </Card>
          </div>
        </>
      ))}

      {/* <h2> Salons with Similar Services </h2> */}

      {/* <div>
        {otherSimillarSalons.map((item, index) => (
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

                <div className="mt-5">{sliceNameAndPrice(item)}</div>

                <div>
                  <h3 className="text-blue-500">See all services</h3>
                </div>
              </Link>
            </Card>
          </div>
        ))}
      </div> */}
      {/* </>
      )} */}
    </>
  );
};

export default CarouselWithServices;
