// columns.ts
import React from "react";
import { Space, Table, Switch } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export interface DataType {
  key: string;
  organizationName: string;
  emailAddress: string;
  phoneNumber: string;
  createdOn: string;
  status: string;
}

export const orgcolumns: ColumnsType<DataType> = [
  {
    title: "Organization Name",
    dataIndex: "organizationName",
    key: "organizationName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email Address",
    dataIndex: "emailAddress",
    key: "emailAddress",

  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
   
  },
  {
    title: "Created On",
    dataIndex: "createdOn",
    key: "createdOn",
 
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <>
        <Switch checked={record.status === "Active"} />
        <span style={{ marginLeft: 8 }}>Active</span>
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


export const Orgdata: DataType[] = [
  {
    key: "1",
    organizationName: "ABC Company",
    emailAddress: "abc@example.com",
    phoneNumber: "1234567890",
    createdOn: "2023-07-14",
    status: "Active",
  },
  {
    key: "2",
    organizationName: "XYZ Corporation",
    emailAddress: "xyz@example.com",
    phoneNumber: "0987654321",
    createdOn: "2023-07-13",
    status: "Inactive",
  },
  {
    key: "3",
    organizationName: "PQR Ltd.",
    emailAddress: "pqr@example.com",
    phoneNumber: "9876543210",
    createdOn: "2023-07-12",
    status: "Active",
  },
];
