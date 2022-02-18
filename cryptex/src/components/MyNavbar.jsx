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
import icon from "../images/blockchain.jpg";
import { useState } from "react";

const { SubMenu } = Menu;
const MyNavbar = () => {
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState(1);

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title
            level={2}
            className="logo"
            style={{ color: "white" }}
          >
            <Link to="/">Cryptex</Link>
          </Typography.Title>
          <Button className="menu-control-container"></Button>
        </div>
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <Menu
          theme={theme}
          onClick={handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
        >
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/"> Home </Link>
          </Menu.Item>
          <Menu.Item icon={<TeamOutlined />}>
            <Link to="/account"> Account </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/market">Market</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/transactions"> Transactions </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default MyNavbar;
