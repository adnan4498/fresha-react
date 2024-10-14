import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CarouselWithServices = ({ salons }) => {
//   console.log(salons, "salons");
  const sliceNameAndPrice = (item) => {
    //   console.log(item.serviceNameAndPrice, "item");
    let slicedServices = item.serviceNameAndPrice.slice(0, 4);
    return (
      <>
        {slicedServices.map((item, i) => (
          <div className="flex justify-between my-5">
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

  return (
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
                <span className="text-sm font-medium px-2">{item.gender}</span>
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
  );
};

export default CarouselWithServices;
