import React, { useState } from "react";
import logo from "../../public/images/logo4.png";
import { Button, Drawer, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import hamburgerIcon from "../../public/images/hamburger-icon.png";
import { CloseOutlined, RightOutlined } from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <Link to={"/"}>
          <div className="w-[74px]">
            <img src={logo} />
          </div>
        </Link>
        <div onClick={showDrawer}>
          <img src={hamburgerIcon} className="w-9" />
        </div>

        <Drawer
          title={
            <div className="flex justify-between items-center">
              <div className="w-[74px]">
                <img src={logo} />
              </div>
              <div onClick={() => onClose()} className="pt-1">
                <CloseOutlined className="text-lg" />
              </div>
            </div>
          }
          placement={"bottom"}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <div>
            <div className="flex flex-col gap-10 text-base text-clr-1 font-semibold roberto-medium">
              <div className="flex justify-between items-center">
                <div>Log in</div>
                <div className="text-sm">
                  <RightOutlined />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>Download the app</div>
                <div className="text-sm">
                  <RightOutlined />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>Customers support</div>
                <div className="text-sm">
                  <RightOutlined />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>GB English</div>
                <div className="text-sm">
                  <RightOutlined />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>Fresha for business</div>
                <div className="text-sm">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
