import React from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Space,
  Typography,
  message,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./org.css";
import TextArea from "antd/es/input/TextArea";

const { Text } = Typography;

const RoleForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  const [messageApi, contextHolder] = message.useMessage();

  return (
    <Form
      className="organization"
      form={form}
      onFinish={onFinish}
      layout="vertical"
    >
      <Row>
        <Col span={24}>
          <Form.Item
            name="RoleName"
            label={<Text strong>Role Name</Text>}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter role name" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={40}>
        <Col span={24}>
          <Form.Item
            name="decription"
            label={<Text strong>Description</Text>}
            rules={[
              { required: true, message: "Please enter description" },
            ]}
          >
            <TextArea placeholder="Enter description for role" />
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

export default RoleForm;
