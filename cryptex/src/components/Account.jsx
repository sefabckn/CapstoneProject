import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Account = () => {
  return (
    <>
      <div>
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
    </>
  );
};
export default Account;
