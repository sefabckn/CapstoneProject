import PieChart from "./PieChart";
import { Typography, Row, Col, Image, List } from "antd";
import profile from "../images/profile.jpg";
import { Card, Form, Input, InputNumber, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import {
  useGetUsersQuery,
  useCreateUsersMutation,
  useUpdateUsersMutation,
} from "../services/Users";
import { useNavigate } from "react-router-dom";
import { isLoading } from "./isLoading";
import { useState } from "react";

const { Title } = Typography;

const Account = () => {
  const { data, isFetching } = useGetUsersQuery();
  const [createUser, userData] = useCreateUsersMutation();
  const [updateUser, updatedData] = useUpdateUsersMutation();
  const navigate = useNavigate();
  console.log(userData);

  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    email: "",
    job: "",
    age: "",
    description: "",
  });

  const [updateInfo, setUpdateInfo] = useState({
    id: "",
    name: "",
    email: "",
    job: "",
    age: "",
    description: "",
  });
  const [form, setForm] = useState(false);
  const { Meta } = Card;
  if (isFetching) return <isLoading />;

  const createNewUser = async (e) => {
    e.preventDefault();
    await createUser(userInfo);
    navigate("/account");
  };
  const handleInput = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const updateExistUser = async (e) => {
    e.preventDefault();
    await updateUser(updateInfo);
    navigate("/account");
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  console.log(data);
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <>
      <Title level={3}>Account</Title>
      <Row>
        <Col span={12}>
          <Card
            hoverable
            cover={
              <Image
                width={80}
                src={profile}
                style={{ borderRadius: "50%", margin: ".25rem" }}
              />
            }
            style={{ width: 300, marginTop: 16 }}
          >
            {" "}
            <EditOutlined
              style={{ display: "block" }}
              onClick={(e) => setForm(true)}
            />
            <br />
            {form && (
              <>
                <Form
                  {...layout}
                  name="nest-messages"
                  validateMessages={validateMessages}
                  onSubmitCapture={createNewUser}
                >
                  <Form.Item
                    name={["user", "name"]}
                    label="Name"
                    rules={[{ required: true }]}
                  >
                    <Input
                      onChange={handleInput}
                      name="name"
                      value={userInfo.name}
                    />
                  </Form.Item>
                  <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[{ type: "email" }]}
                  >
                    <Input
                      onChange={handleInput}
                      name="email"
                      value={userInfo.email}
                    />
                  </Form.Item>

                  <Form.Item name={["user", "job"]} label="Job">
                    <Input
                      onChange={handleInput}
                      name="job"
                      value={userInfo.job}
                    />
                  </Form.Item>
                  <Form.Item
                    name={["user", "age"]}
                    label="Age"
                    rules={[{ type: "number", min: 0, max: 99 }]}
                  >
                    <InputNumber onChange={handleInput} value={userInfo.age} />
                  </Form.Item>
                  <Form.Item name={["user", "description"]} label="Description">
                    <Input.TextArea
                      onChange={handleInput}
                      value={userInfo.description}
                      name="description"
                    />
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </>
            )}
            <Meta title="Sefa Böçkün" description="Front End developer"></Meta>
            <List>
              <List.Item>E-mail : sefabckn@gmail.com</List.Item>
              <List.Item>Age : 25</List.Item>
              <List.Item>Description : Investor</List.Item>
            </List>
          </Card>
        </Col>
        <Col span={8}>
          <Title level={5}> My Assets</Title>
          <PieChart />
        </Col>
      </Row>
      <Row></Row>
    </>
  );
};
export default Account;
