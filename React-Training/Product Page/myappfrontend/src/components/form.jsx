import React, { useState } from "react";
import { Form, Input, Upload, Button, Card, Select } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const App = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  const selection = async () => {
    const response = await axios.get(
      "http://localhost:3001/product/getCategory"
    );
    const fetchedCategoriesData = response?.data?.data;
    setCategoriesData(fetchedCategoriesData);
  };

  const onFinish = async (values) => {
    console.log('values: ', values);
    var formData = new FormData();
    formData.append("image", values?.product?.image[0]?.originFileObj);
    formData.append("title", values?.product?.title);
    formData.append("description", values?.product?.description);
    formData.append("categoryId", values?.product?.category);
    let postedData = await axios.post("http://localhost:3001/product/post",formData)
    console.log('postedData: ', postedData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card title="Upload Form" style={{ width: 400 }}>
        <Form onFinish={onFinish}>
          <Form.Item
            name={["product", "title"]}
            label="Title"
            rules={[
              {
                type:"string",
                required: true,
                message: "Please enter the title",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["product", "category"]}
            label="Select"
            hasFeedback
            rules={[{ required: true, message: "Please select Category!" }]}
          >
            <Select
              placeholder="Please select Category!"
              onClick={selection}
              optionLabelProp="label"
            >
              {categoriesData.map((category) => (
                <Option
                  key={category.id}
                  value={category.id}
                  label={category.name}
                >
                  {category.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name={["product", "description"]}
            label="Description"
            rules={[
              {
                type:"string",
                required: true,
                message: "Please enter the description",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name={["product", "image"]}
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra=""
            rules={[
              {
                required: true
              }
            ]}
          >
            <Upload
              name="logo"
              accept="image/jpeg"
              beforeUpload={(file) => {
                return false;
              }}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default App;
