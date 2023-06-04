import React from "react";
import { Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { UpdatePost } from "../redux/action/postAction";
import { GetPostData } from "../redux/action/postAction";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const MyUpdateForm = ({ record }) => {
  console.log("Update record: ", record);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const formData = values.user;
    dispatch(UpdatePost(formData, record.id)).then(() => {
      dispatch(GetPostData());
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
      initialValues={{
        user: record,
      }}
    >
      <Form.Item
        name={["user", "name"]}
        label="Posted By"
        rules={[
          {
            required: true,
            pattern: /^[A-Za-z\s]+$/,
            message: "Please enter only alphabets.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter Email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "title"]}
        label="Title"
        rules={[
          {
            required: true,
            message: "Title is Required",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={["user", "content"]} label="Content">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name={["user", "category"]}
        label="Category"
        rules={[
          {
            required: true,
            message: "Please select a blog post category!",
          },
        ]}
      >
        <Select placeholder="Select a category">
          <Option value="technology">Technology</Option>
          <Option value="fashion">Fashion</Option>
          <Option value="travel">Travel</Option>
          <Option value="food">Food</Option>
        </Select>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyUpdateForm;
