import "./App.css";
import {
  MyNavbar,
  Home,
  Market,
  Transactions,
  Details,
  News,
  Footer,
  Account,
} from "./components";
import { Space, Typography, Layout, Sider } from "antd";
import { Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const { Content, Footer, Sider } = Layout;
  return (
    <BrowserRouter>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          {" "}
          <MyNavbar />{" "}
        </Sider>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/market" element={<Market />}></Route>{" "}
              {/* cryptocurrencies */}
              <Route path="/transactions" element={<Transactions />}></Route>
              {/* exchanges */}
              <Route path="/crypto/:coinId" element={<Details />}></Route>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        <Typography.Title
          level={5}
          style={{ color: "black", textAlign: "center" }}
        >
          Cryptex <br />
          &#169; All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/market">Market</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/news">News</Link>
          <Link to="/account">Account</Link>
        </Space>
      </Footer>
    </BrowserRouter>
  );
}
export default App;
