import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import removingDuplicates from "../../ownModules/removeDuplicates/removeDuplicates";

const CarouselWithServices = ({
  salons,
  otherSimillarSalons,
  subCategoryName,
  seperatedSubCategoryNames,
}) => {
  const sliceNameAndPrice = (mapItem, firstNameBg) => {
    let pushServices = [];
    let getFirstServices = [];
    console.log(mapItem, "map items");
    let firstServiceName = mapItem.serviceNameAndPrice.filter(
      (item) => item.name == subCategoryName
    );

    for (let serviceName of mapItem.serviceNameAndPrice) {
      for (let firstName of firstServiceName) {
        serviceName.name == firstName.name
          ? getFirstServices.push(firstName)
          : "";
      }
    }

    for (let serviceName of mapItem.serviceNameAndPrice) {
      let servicesInString = serviceName.name.split(" ").join("");
      for (let subName of seperatedSubCategoryNames) {
        let nameToString = subName.join("");
        if (servicesInString.includes(nameToString)) {
          pushServices.push(serviceName);
        }
      }
    }

    let getSet = removingDuplicates(pushServices);

    let renderSalonsItems = getSet.filter(
      (item, i) => item.name == subCategoryName
    );

    // adding subCategoryName at first in renderingArray
    getSet.forEach((item) => {
      item.name == subCategoryName && getSet.unshift(item);
    });

    let getSet2 = removingDuplicates(getSet);

    console.log(getSet2, "gs");

    // add comments for what this logic does

    return (
      <>
        {/* {getFirstServices.map((item, i) => (*/}
        {/* {pushServices.map((item, i) => ( */}
        {/* {renderSalonsItems?.map((item, i) => ( */}
        {getSet2.map((item, i) => (
          <div className={`${i == 0 && firstNameBg ? "bg-[#dae1e2] rounded-lg" : ""} flex justify-between my-5`}>
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

  let firstNameBg = true

  return (
    <>
      <div>
        {salons.map((item, index) => (
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

                <div className="mt-5">{sliceNameAndPrice(item, firstNameBg)}</div>

                <div>
                  <h3 className="text-blue-500">See all services</h3>
                </div>
              </Link>
            </Card>
          </div>
        ))}
      </div>

      {/* {otherSimillarSalons.length != 0 && (
        <> */}
          <h2> Salons with Similar Services </h2>

          <div>
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
          </div>
        {/* </>
      )} */}
    </>
  );
};

export default CarouselWithServices;
