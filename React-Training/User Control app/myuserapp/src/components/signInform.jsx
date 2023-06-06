import React, { useState } from "react";
import "../css/signinform.css";
import {
  LockOutlined,
  UserOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input} from "antd";
import { CheckUser } from "../redux/action/userAction";
import { useDispatch } from "react-redux";
import MyLoader from "./Loader";
import SignUpDrawer from "./Drawer";

const SignInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onFinish = async (values) => {
    const formData = { email: values.email, password: values.password };
    try {
      await dispatch(CheckUser(formData));
    } catch (error) {
      console.error(error.message);
    }
  };
  
  return (
    <>
     <MyLoader/>
      <div className="container">
        <div className="form-wrapper">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password",
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? (
                    <EyeOutlined onClick={toggleShowPassword} />
                  ) : (
                    <EyeInvisibleOutlined onClick={toggleShowPassword} />
                  )
                }
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a href="#">Forgot password</a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <SignUpDrawer />
            </Form.Item>
          </Form>
        </div>
      </div>
    
    </>
   
  );
};

export default SignInForm;
