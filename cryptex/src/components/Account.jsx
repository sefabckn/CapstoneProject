import PieChart from "./PieChart";
import { Typography, Row, Col, Image, List } from "antd";
import profile from "../images/profile.jpg";
import { Card, Form, Input, InputNumber, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useGetUsersQuery } from "../services/Users";
import { isLoading } from "./isLoading";
import { useState } from "react";

const { Title } = Typography;

const Account = () => {
  const { data, isFetching } = useGetUsersQuery();
  const [form, setForm] = useState(false);
  const { Meta } = Card;
  if (isFetching) return <isLoading />;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
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
            <Meta title="Sefa Böçkün" description="Front End Developer"></Meta>{" "}
            <List>
              <List.Item>UserId: 1231546548</List.Item>
              <List.Item>E-mail: sefabckn@gmail.com</List.Item>
              <List.Item>Age : 25</List.Item>
              <List.Item>Country: Poland</List.Item>
              <List.Item>Title: Investor</List.Item>
            </List>
          </Card>
        </Col>
        <Col span={8}>
          <Title level={5}> My Assets</Title>
          <PieChart />
        </Col>
      </Row>
      <Row>
        {!form && (
          <>
            <Form
              {...layout}
              name="nest-messages"
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "age"]}
                label="Age"
                rules={[{ type: "number", min: 0, max: 99 }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item name={["user", "website"]} label="Website">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "introduction"]} label="Introduction">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </Row>
    </>
  );
};
export default Account;
