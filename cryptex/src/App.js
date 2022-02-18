import "./App.css";
import {
  MyNavbar,
  Home,
  Market,
  Transactions,
  Details,
  News,
  Footer,
} from "./components";
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/market" element={<Market />}></Route>{" "}
          {/* cryptocurrencies */}
          <Route path="/transactions" element={<Transactions />}></Route>
          {/* exchanges */}
          <Route path="/crypto/:coinId" element={<Details />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptex <br />
          &#169; All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/market">Market</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </BrowserRouter>
  );
}
export default App;
