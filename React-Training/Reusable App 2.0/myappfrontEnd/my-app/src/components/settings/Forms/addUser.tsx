import React from "react";
import { Button, Col, Form, Input, Row, Space, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import './user.css'

const { Text } = Typography;

const UserForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values:any) => {
    console.log("Finish:", values);
  };

  return (
    <Form form={form} className="userForm" onFinish={onFinish} layout="vertical">
      <Row gutter={40}>
        <Col span={12}>
          <Form.Item
            name="name"
            label={
              <Text strong>
                First Name
              </Text>
            }
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Enter Your First Name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="lname"
            label={
              <Text strong>
                Last Name
              </Text>
            }
            rules={[{ required: true, message: "Please enter last name" }]}
          >
            <Input placeholder="Enter Your Last Name" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="email"
            label={
              <Text strong>
                Email Address
              </Text>
            }
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter email address",
              },
            ]}
          >
            <Input placeholder="Enter Your Email Address" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="phoneNumber"
            label={
              <Text strong>
                Phone Number
              </Text>
            }
            rules={[
              {
                required: true,
                message: "Please enter phone number",
              },
            ]}
          >
            <Input placeholder="Enter Your Phone Number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16} className="btnGrp">
        <Col span={12}>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button>Cancel</Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
};

export default UserForm;
