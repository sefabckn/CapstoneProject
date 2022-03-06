import { Button, Menu, Typography, Avatar, Switch } from "antd";

import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import icon from "../images/icon2.png";
import { useState } from "react";

const MyNavbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo">
            <Link to="/">Cryptex</Link>
          </Typography.Title>
          <Button className="menu-control-container"></Button>
        </div>

        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/"> Home </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/market">Market</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
          <Menu.Item icon={<TeamOutlined />}>
            <Link to="/account"> Account </Link>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default MyNavbar;
