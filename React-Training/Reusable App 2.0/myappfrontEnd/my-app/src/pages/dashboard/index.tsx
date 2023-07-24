import React from "react";
import {
  LoginOutlined,
  LogoutOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Image,
  Layout,
  Menu,
  Row,
  Space,
  theme,
} from "antd";
import animalPlanetLogo from "../../assets/images/Screenshot_2023-07-19_131133__1_-removebg-preview.png";
import settingLogo from "../../assets/images/Setting.svg";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import "./index.css";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {}}
        style={{ background: "#286FD1", minHeight: "100vh" }} // Add this line to set the background color to blue
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" />
        <div className="Imagediv">
          <Image
            src={animalPlanetLogo}
            alt=""
            style={{ width: "130px", height: "50px" }}
            preview={false}
          />
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row justify={"space-between"}>
            <Col>
              {" "}
              <span className="dashboardTitle">Dashboard</span>{" "}
            </Col>
            <Col style={{ marginRight: "10px" }}>
              <Row>
                <Space size={20}>
                  <Col md={24}>
                    <Link to={"/settings"}>
                      <Image src={settingLogo} preview={false} />
                    </Link>
                  </Col>
                  <Col md={24}>
                    <Avatar
                      style={{
                        backgroundColor: "#1677ff4a",
                        verticalAlign: "center",
                      }}
                      size="large"
                    >
                      <span className="avatarText">TP</span>
                    </Avatar>
                  </Col>
                  <Col
                    md={24}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Paragraph className="currentUser">
                        Thomas Peterson
                      </Paragraph>
                      <Paragraph className="myProfileText">
                        My Profile
                      </Paragraph>
                    </div>
                  </Col>
                  <Col md={24}>
                    <Link to={"/"}>
                      <LoginOutlined className="logoutIcon"></LoginOutlined>
                    </Link>
                  </Col>
                </Space>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content className="contentMain">
          <div className="contentText">
            Dashboard Screen will <br></br> be Coming Soon!
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
