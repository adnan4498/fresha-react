import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React from "react";

const Booking = () => {
  return (
    <div className="mt-5">
      <div className="border border-gray-200 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <div className="">
            <Input
              className="py-3 flex gap-2 text-base "
              placeholder="Any treatment or venue"
              prefix={<SearchOutlined style={{ fontSize: "18px" }} />}
            />
          </div>

          <div className="">
            <Input
              className="py-3 flex gap-2 text-base "
              placeholder="Current location"
              prefix={<SearchOutlined style={{ fontSize: "18px" }} />}
            />
          </div>

          <div className="flex gap-3">
            <div className="">
              <Input
                className="py-3 flex gap-2 text-base "
                placeholder="Any date"
                prefix={<SearchOutlined style={{ fontSize: "18px" }} />}
              />
            </div>

            <div className="">
              <Input
                className="py-3 flex gap-2 text-base "
                placeholder="Any time"
                prefix={<SearchOutlined style={{ fontSize: "18px" }} />}
              />
            </div>
          </div>
          <div>
            <Button className="w-full text-base bg-[#0d1619] text-white py-6 rounded-lg">
              <p>Search Fresha</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
