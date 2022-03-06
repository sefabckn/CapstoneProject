import { useParams } from "react-router";
import PieChart from "./PieChart";
import { Typography, Row, Col } from "antd";
import profile from "../images/profile.jpg";
import { Form, Input, InputNumber, Button } from "antd";

const { Title } = Typography;

const Account = () => {
  let params = useParams();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
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
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Title level={3}> My Assets</Title>
      <Row>
        <Col span={12}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <img
              src={profile}
              alt="profile-photo"
              width={84}
              style={{ borderRadius: "50%" }}
            />
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
        </Col>
        <Col span={12}>
          <PieChart />
        </Col>
      </Row>
    </>
  );
};
export default Account;
