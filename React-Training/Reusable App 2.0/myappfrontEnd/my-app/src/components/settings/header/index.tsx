import React from "react";
import { Layout, Space, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";
import { Link } from "react-router-dom";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  fontSize: "21px",
  color: "black",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  paddingLeft:"18px",
  paddingRight:"15px"
};

const buttonStyle: React.CSSProperties = {
  marginLeft: "auto"
};

const HeaderComponent: React.FC = () => (
  <Layout>
    <Header style={headerStyle}>
      <p style={{
        fontWeight:"bold"
      }}>Settings</p>
      <Link to={'/dashboard'} style={buttonStyle}>
      <Button shape="round" icon={<CloseOutlined />} style={{
        border:"none",boxShadow:"none"

      }} />
      </Link>
    </Header>
  </Layout>
);

export default HeaderComponent;