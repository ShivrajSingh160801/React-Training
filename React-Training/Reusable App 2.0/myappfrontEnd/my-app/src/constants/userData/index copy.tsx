// columns.ts
import React from "react";
import { Space, Table, Switch } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export interface DataType {
  key: string;
  name: string;
  email: string;
  phone: string;
  address: string
  status : boolean
}

let StatusValue = true;

const onChange = (checked: boolean) => {
  console.log(`switch to ${ checked}`);
  StatusValue = checked;
  console.log('StatusValue: ', StatusValue);
};


export const Usercolumns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email Address",
    dataIndex: "email",
    key: "email",
    align: "center",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
    align: "center",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    align: "center",
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <>
        <Switch onChange={onChange}  />
        <span style={{ marginLeft: 8 }}>
          {StatusValue === true ? "Active" : "Inactive"}
        
        </span>
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <EditOutlined
            style={{
              fontSize: "20px",
              color: "black",
            }}
          />
        </a>
        <a>
          <DeleteOutlined
            style={{
              fontSize: "20px",
              color: "black",
            }}
          />
        </a>
      </Space>
    ),
  },
];


export const Userdata: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    email: "john@example.com",
    phone: "1234567890",
    address: "New York No. 1 Lake Park",
    status : StatusValue
  },
  {
    key: "2",
    name: "Jim Green",
    email: "jim@example.com",
    phone: "0987654321",
    address: "London No. 1 Lake Park",
    status : StatusValue
  },
  {
    key: "3",
    name: "Joe Black",
    email: "joe@example.com",
    phone: "9876543210",
    address: "Sydney No. 1 Lake Park",
     status : StatusValue
  },
];
