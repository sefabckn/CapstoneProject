import { Space, Typography } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Cryptex <br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/market">Market</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  );
};

export default Footer;
