import {
  Button,
  Form,
  Input,
  Col,
  Row,
  Select,
  DatePicker,
  TimePicker,
  InputNumber,
  Checkbox,
  Slider,
  ColorPicker,
  Radio,
  Upload,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";

const { Option } = Select;
const { RangePicker } = DatePicker;

const onFinish = (values) => {
  // Send the form data to the API
  axios
    .post("http://localhost:3001/form/post", values?.user)
    .then((response) => {
      console.log("API response:", response.data);
      // Handle the API response if needed
    })
    .catch((error) => {
      console.error("API error:", error);
      // Handle the API error if needed
    });
};

const validateNumber = (number) => {
  if (number % 10 === 0) {
    return {
      validateStatus: "success",
      errorMsg: null,
    };
  }
  return {
    validateStatus: "error",
    errorMsg: "Number Divisible By 10 Between 1-100",
  };
};

const App = () => {
  const [form] = Form.useForm();
  const [number, setNumber] = useState({
    value: 10,
  });

  const onNumberChange = (value) => {
    setNumber({
      ...validateNumber(value),
    });
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <Form form={form}  layout="vertical" onFinish={onFinish}>
          
          <Form.Item name={["user", "name"]} label="Name" rules={[
              {
                type: "string",
                pattern:  /^[a-zA-Z\s]+$/,
                message: "Enter Valid Name",
                required: true,
              },
            ]}>
            <Input placeholder="Input placeholder" />
          </Form.Item>

          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type:"string",
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter Valid Mail",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "password"]}
            label="Password"
            rules={[
              {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                message: "Please input your password!",
                required: true,
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name={["user", "gender"]}
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select placeholder="Select your gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item label="DateTime" name={["user", "dateTime"]}>
            <DatePicker
              placeholder="Select Date and Time"
              showTime
              format="YYYY-MM-DD HH:mm:ss"

              style={{ marginRight: "10px" }}
            />
          </Form.Item>

          <Form.Item
            label="Divisible By 10 Between 1 to 100"
            name={["user", "number"]}
            validateStatus={number.validateStatus}
            help={number.errorMsg}
          >
            <InputNumber
              min={1}
              max={100}
              value={number.value}
              onChange={onNumberChange}
            />
          </Form.Item>

          <Form.Item name={["user", "radio"]} label="Select Favourite">
            <Radio.Group>
              <Radio value="Car">Car</Radio>
              <Radio value="Bike">Bike</Radio>
              <Radio value="Plane">Plane</Radio>
              <Radio value="Rocket">Rocket</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name={["user", "checkbox"]} label="Select Favourite">
            <Checkbox.Group>
              <Checkbox value="Car">Car</Checkbox>
              <Checkbox value="Bike">Bike</Checkbox>
              <Checkbox value="Plane">Plane</Checkbox>
              <Checkbox value="Rocket">Rocket</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item name={["user", "slider"]} label="Slider">
            <Slider
              marks={{
                0: "A",
                20: "B",
                40: "C",
                60: "D",
                80: "E",
                100: "F",
              }}
            />
          </Form.Item>

          <Form.Item name={["user", "color"]} label="Choose Colour">
            <ColorPicker trigger="hover" />
          </Form.Item>

          <Form.Item label="Dragger" name={["user", "file"]}>
            <Upload.Dragger
              multiple
              accept=".pdf"
              listType="picture"
              beforeUpload={(file) => {
                const isSizeValid = ((file.size / 1024 )/ 1024) < 10; // Check if file size is less than 10 MB
                if (!isSizeValid) {
                  // Display an error message or handle the validation failure as per your requirements
                  console.log("File size exceeds the limit of 10 MB");
                }
                return isSizeValid; // Return false to prevent uploading if file size exceeds the limit
              }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default App;
