import { useParams } from "react-router";
import PieChart from "./PieChart";
import { Typography } from "antd";

const { Title } = Typography;

const Account = () => {
  let params = useParams();
  return (
    <>
      <Title level={3}> My Assets</Title>
      <PieChart />
    </>
  );
};
export default Account;
