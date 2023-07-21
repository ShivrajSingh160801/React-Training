import React from "react";
import { Col, Row, Image, Typography, Form, Input, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import registerImage from "../../assets/images/RegisterImage/Group 87.png";
import animalPlanetLogo from "../../assets/images/Mask Group 1/Mask Group 1.png";
import userLogo from "../../assets/images/Group 57/Group 57.png";
import emailLogo from "../../assets/images/Group 59/Group 59.png";
import xeroLogo from "../../assets/images/Mask Group 27/Mask Group 27.png";
import phoneLogo from "../../assets/images/phone_in_talk_FILL0_wght400_GRAD0_opsz48/phone_in_talk_FILL0_wght400_GRAD0_opsz48.png";
import passwordLogo from "../../assets/images/Group 27.svg";

import "./index.css";
import { Link } from "react-router-dom";

const { Title } = Typography; 

const Register: React.FC = () => {
  const [form] = useForm(); // Declare the 'form' variable using 'useForm' hook

  return (
    <>
      <Row
        style={{
          minHeight: "100vh",
        }}
      >
        <Col xs={24} sm={12} md={9} className="loginImage" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Image src={registerImage} alt="" preview={false} style={{width:'90%'}}/>
        </Col>
        <Col xs={24} sm={12} md={15}>
          <Row
            className="registerForm"
            gutter={[0, 15]}
            style={{
              paddingLeft: "100px",
            }}
          >
            <Col xs={24} sm={24} md={24}>
              <Image
                src={animalPlanetLogo}
                alt=""
                style={{
                  paddingTop: "15px",
                }}
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
                  <Row>
                    <Col
                      xs={24}
                      sm={9}
                      style={{
                        marginRight: "25px",
                      }}
                    >
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
                        rules={[
                          {
                            required: true,
                            message: "Please input your firstname!",
                          },
                        ]}
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
                        rules={[
                          {
                            required: true,
                            message: "Please input your lastname!",
                          },
                        ]}
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
                  <Row>
                    <Col
                      xs={24}
                      sm={9}
                      style={{
                        marginRight: "25px",
                      }}
                    >
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            type: "email",
                            message: "Please input your email!",
                          },
                        ]}
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
                        rules={[
                          {
                            required: true,
                            message: "Please input Phone Number",
                          },
                        ]}
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
                  <Row>
                    <Col
                      xs={24}
                      sm={9}
                      style={{
                        marginRight: "25px",
                      }}
                    >
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
                  <Row>
                    <Col xs={24} sm={9} md={19}>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          size="large"
                          style={{ width: "99%" }}
                        >
                          Register
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} offset={4} xs={24} sm={9}>
                      <Form.Item>
                        <Button
                          type="primary"
                          size="large"
                          style={{
                            marginRight: "5px",
                          }}
                        >
                           <span style={{
                          fontSize:"14px",
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
                         <span style={{
                          fontSize:"14px",
                          marginLeft: "5px",
                         }}>Sign in with Xero</span> 
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      style={{
                        display: "flex",
                      }}
                    >
                      <Form.Item>
                        <Link to="/">
                          <Button type="text" block>
                            Already have an account?
                            <span>
                              <Button
                                type="link"
                                block
                                style={{
                                  padding: "0px",
                                }}
                              >
                                Login Now!
                              </Button>
                            </span>
                          </Button>
                        </Link>
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

export default Register;
