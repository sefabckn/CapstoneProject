import "./App.css";
import {
  MyNavbar,
  Home,
  Market,
  Transactions,
  Details,
  News,
} from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/market" element={<Market />}></Route>{" "}
        {/* cryptocurrencies */}
        <Route path="/transactions" element={<Transactions />}></Route>
        {/* exchanges */}
        <Route path="/crypto/:coinId" element={<Details />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
