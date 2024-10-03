import React, { useState } from "react";
import logo from "../../public/images/logo4.png";
import { Button, Drawer, Radio, Space } from "antd";
import { Link } from "react-router-dom";

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
        <Button type="primary" onClick={showDrawer}>
          X
        </Button>

        <Drawer
          title="Basic Drawer"
          placement={"bottom"}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
