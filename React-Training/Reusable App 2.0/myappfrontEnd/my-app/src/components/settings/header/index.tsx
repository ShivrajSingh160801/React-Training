import React from "react";
import { Layout, Space, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  fontSize: "21px",
  color: "black",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
};

const buttonStyle: React.CSSProperties = {
  marginLeft: "auto", // Move the button to the end of the line
};

const HeaderComponent: React.FC = () => (
  <Layout>
    <Header style={headerStyle}>
      <p>Settings</p>
      <Button shape="round" icon={<CloseOutlined />} style={buttonStyle} />
    </Header>
  </Layout>
);

export default HeaderComponent;