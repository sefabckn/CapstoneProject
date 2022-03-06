import millify from "millify"; //Converts long numbers into pretty, human-readable strings.
import { Typography, Layout, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { Carousel, Image } from "antd";
import { useGetCryptosQuery } from "../services/CryptoApi";
import isLoading from "../components/isLoading";
import { isAllOf } from "@reduxjs/toolkit";
import { Market, News } from ".";
const { Title } = Typography;

const Home = () => {
  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if (isFetching) return <isLoading />;

  console.log(data);
  console.log(globalStats);
  return (
    <>
      <Row>
        <Col></Col>
      </Row>
      <Title level={2} className="heading">
        {" "}
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/market">Show more</Link>
        </Title>
      </div>
      <Market simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Home;
