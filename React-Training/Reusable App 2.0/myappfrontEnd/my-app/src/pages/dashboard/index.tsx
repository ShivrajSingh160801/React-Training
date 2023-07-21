import React from "react";
import {
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
import "./index.scss";
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
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ background: "#286FD1", minHeight: "100vh" }} // Add this line to set the background color to blue
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding:"15px"
          }}
        >
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
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Dashboard
              </span>{" "}
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
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bolder",
                          opacity:"100%"
                        }}
                      >
                        TP
                      </span>
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
                      <Paragraph
                        style={{
                          padding: "0px",
                          margin: "0px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        Thomas Peterson
                      </Paragraph>
                      <Paragraph
                        style={{
                          padding: "0px",
                          margin: "0px",
                          fontSize: "11px",
                          opacity: "0.8",
                        }}
                      >
                        My Profile
                      </Paragraph>
                    </div>
                  </Col>
                  <Col md={24}>
                    <Link to={'/'}>
                    <LogoutOutlined
                      style={{
                        fontSize: "25px",
                        display: "flex",
                        alignItems: "center",
                        color :"black"
                      }}
                    ></LogoutOutlined>
                    </Link>
                  </Col>
                </Space>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            maxHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "33px",
              opacity: "0.5",
              fontWeight: "bold",
            }}
          >
            Dashboard Screen will <br></br> be Coming Soon!
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
