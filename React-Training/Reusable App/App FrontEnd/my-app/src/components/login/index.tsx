import React from "react";
import {
  Col,
  Row,
  Image,
  Typography,
  Form,
  Input,
  Button
} from "antd";
import { useForm } from "antd/lib/form/Form";
import loginImage from "../../images/Group 23.svg";
import animalPlanetLogo from "../../images/Mask Group 1/Mask Group 1.png";
import userLogo from "../../images/Group 57/Group 57.png";
import emailLogo from "../../images/Group 59/Group 59.png";
import phoneLogo from "../../images/phone_in_talk_FILL0_wght400_GRAD0_opsz48/phone_in_talk_FILL0_wght400_GRAD0_opsz48.png";
import passwordLogo from "../../images/Group 27.svg";

import "./index.css";

const { Title } = Typography;

const App: React.FC = () => {
  const [form] = useForm(); // Declare the 'form' variable using 'useForm' hook

  return (
    <>
      <Row>
        <Col xs={24} sm={12} md={9} className="loginImage">
          <Image src={loginImage} alt="" />
        </Col>
        <Col xs={24} sm={12} md={15}>
          <Row
            className="registerForm"
            gutter={[0, 40]}
            style={{
              marginTop: "80px",
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
                  Register
                </Title>
                <p
                  style={{
                    color: "#425465",
                    opacity: 1,
                    fontSize: "17px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Please
                  Register
                </p>
                <Form form={form} layout="vertical" autoComplete="off">
                  <Row gutter={[40, 0]}>
                    <Col xs={24} sm={9}>
                      <Form.Item
                        name="firstName"
                        label={
                          <span>
                            <Image
                              src={userLogo}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            FirstName*
                          </span>
                        }
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        <Input
                          size="large"
                          placeholder="Enter your First Name"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={9}>
                      <Form.Item
                        name="lastName"
                        label={
                          <span>
                            <Image
                              src={userLogo}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            LastName*
                          </span>
                        }
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        <Input
                          size="large"
                          placeholder="Enter your Last Name"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[40, 0]}>
                    <Col xs={24} sm={9}>
                      <Form.Item
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
                    <Col xs={24} sm={9}>
                      <Form.Item
                        name="phone"
                        label={
                          <span>
                            <Image
                              src={phoneLogo}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            Phone Number*
                          </span>
                        }
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        <Input
                          size="large"
                          type="number"
                          placeholder="Enter your Phone Number"
                          maxLength={10}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[40, 0]}>
                    <Col xs={24} sm={9}>
                      <Form.Item
                        name="password"
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
                        rules={[
                          {
                            message: "Please input your password!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input.Password
                          size="large"
                          placeholder="Enter your password"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={9}>
                      <Form.Item
                        name="confirm"
                        label={
                          <span>
                            <Image
                              src={passwordLogo}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            Re-Enter Password*
                          </span>
                        }
                        style={{
                          fontSize: "16px",
                        }}
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                          {
                            message: "Please confirm your password!",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  "The new password that you entered does not match!"
                                )
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password
                          size="large"
                          placeholder="Confirm your password"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[40, 0]}>
                    <Col xs={24} sm={9} md={18}>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          size="large"
                          style={{ width: "100%" }}
                        >
                          Register
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[40, 0]}>
                    <Col md={12} offset={4} xs={24} sm={9}>
                      <Form.Item>
                        <Button
                          type="primary"
                          size="large"
                          style={{
                            marginRight: "5px",
                          }}
                        >
                          Sign in with Intuit
                        </Button>
                        <Button
                          size="large"
                          style={{
                            backgroundColor: "#0B78C2",
                            color: "white",
                            marginLeft: "5px",
                          }}
                        >
                          Sign in with Xero
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[40, 0]}>
                    <Col
                      style={{
                        display: "flex",
                      }}
                    >
                      <Form.Item>
                        <Button type="text" block>
                          Already have an account?
                          <span>
                            <Button type="link" block>
                              Login Now!
                            </Button>
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

export default App;
