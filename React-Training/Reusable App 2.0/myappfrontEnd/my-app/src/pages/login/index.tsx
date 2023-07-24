import React from "react";
import {
  Col,
  Row,
  Image,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import loginImage from "../../assets/images/Group 23.svg";
import animalPlanetLogo from "../../assets/images/Mask Group 1/Mask Group 1.png";
import emailLogo from "../../assets/images/Group 59/Group 59.png";
import passwordLogo from "../../assets/images/Group 27.svg";
import xeroLogo from "../../assets/images/Mask Group 27/Mask Group 27.png";
import { Link } from "react-router-dom";
import "./index.css";

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [form] = useForm(); // Declare the 'form' variable using 'useForm' hook

  const handleFormSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <>
      <Row 
        style={{
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Col
          xs={24}
          sm={12}
          md={9}
          className="loginImage"
          style={{ minHeight: "100%" }}
        >
          <Image src={loginImage} preview={false} alt="" width={511} height={520} />
        </Col>
        <Col xs={24} sm={12} md={15}>
          <Row
            className="registerForm"
            gutter={[0, 0]}
            style={{
              marginTop: "25px",
              marginLeft: "100px",
            }}
          >
            <Col xs={24} sm={24} md={24}>
              <Image
                src={animalPlanetLogo}
                alt=""
                style={{ float: "left", marginRight: "10px" }}
              />
            </Col>
            <Col xs={24} sm={24} md={24}>
              <div>
                <Title
                  style={{
                    fontSize: "37px",
                  }}
                >
                  Login
                </Title>
                <p
                  style={{
                    color: "#425465",
                    opacity: 1,
                    fontSize: "17px",
                  }}
                >
                  Welcome to animal planet! Please Enter your Details.
                </p>
                <Form
                  form={form}
                  style={{
                    marginTop: "40px",
                  }}
                  layout="vertical"
                  autoComplete="off"
                  onFinish={handleFormSubmit}
                >
                  <Row gutter={[40, 0]}>
                    <Col xs={24} sm={9} md={12}>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please provide Email!",
                          },
                        ]}
                        name="email"
                        label={
                          <span>
                            <Image
                              src={emailLogo}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            Email Address*
                          </span>
                        }
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        <Input
                          size="large"
                          placeholder="Enter your Email Address"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[40, 0]}>
                    <Col xs={24} sm={9} md={12}>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Password!",
                                                      },
                        ]}
                        label={
                          <span>
                            <Image
                              src={passwordLogo}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            Password*
                          </span>
                        }
                        style={{
                          fontSize: "16px",
                        }}
                        hasFeedback
                      >
                        <Input.Password
                          size="large"
                          placeholder="Enter your password"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={[40, 0]}>
                    <Checkbox
                      style={{ fontSize: "larger", marginLeft: "16px" }}
                    >
                      Remember me
                    </Checkbox>
                    <div style={{ marginLeft: "150px" }}>
                      <Link to="/forgot-password" target="_blank">
                        <Text type="danger">Forgot Password ?</Text>
                      </Link>
                    </div>
                  </Row>
                  <Row
                    gutter={[40, 0]}
                    style={{
                      marginTop: "25px",
                    }}
                  >
                    <Col xs={24} sm={9} md={12}>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          size="large"
                          style={{ width: "100%" }}
                        >
                          Sign in
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={[40, 0]}>
                    <Col md={12} offset={1} xs={24} sm={9}>
                      <Form.Item>
                        <Button
                          type="primary"
                          size="large"
                          style={{
                            marginRight: "5px",
                          }}
                        >
                          <span  style={{
                              fontSize: "15px",
                             
                            }}>Sign in with Intuit</span>
                        </Button>
                        <Button
                          size="large"
                          style={{
                            backgroundColor: "white",
                            color: "black",

                            marginLeft: "5px",
                          }}
                        >
                          <Image src={xeroLogo}></Image>
                          <span
                            style={{
                              fontSize: "15px",
                              marginLeft: "5px",
                            }}
                          > Sign in with Xero</span>
                         
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Item>
                        <Button
                          type="text"
                          block
                          style={{
                            marginTop: "10px",
                            paddingLeft: "0px",
                          }}
                        >
                          Don't have an account?{" "}
                          <span>
                            <Link to="/register">
                              <Button
                                type="link"
                                style={{
                                  paddingLeft: "2px",
                                }}
                              >
                                Sign up Today!
                              </Button>
                            </Link>
                          </span>
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Login;
