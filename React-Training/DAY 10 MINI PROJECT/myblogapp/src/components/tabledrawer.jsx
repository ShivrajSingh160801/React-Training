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
import Table from "./table";

const TableDrawer = () => {
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
        View Posts
      </Button>
      <Drawer
        title={<h2 style={{ textAlign: "center" }}>Create a new account</h2>}
        width={720}
        height={550}
        onClose={onClose}
        open={open}
        placement="bottom"
        bodyStyle={{
          paddingBottom: 5,
        }}
      >
        {Table()}
      </Drawer>
    </>
  );
};

export default TableDrawer;
