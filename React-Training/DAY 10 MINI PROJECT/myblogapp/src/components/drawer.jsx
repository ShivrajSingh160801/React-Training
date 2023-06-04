import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import MyForm from "./postForm";

const MyDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New Post
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        height={500}
        onClose={onClose}
        open={open}
        placement="top"
        bodyStyle={{
          paddingBottom: 5,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        {MyForm()}
      </Drawer>
    </>
  );
};

export default MyDrawer;
