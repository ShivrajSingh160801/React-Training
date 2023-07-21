import React from "react";
import { Space, Table, Switch, Button, Image } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  DeleteOutlined,
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import EditImage from "../../assets/images/EditLogo.svg";
import DeleteLogo from "../../assets/images/DeleteLogo.svg";

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
    sorter: (a, b) => a.organizationName.localeCompare(b.organizationName),
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
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (_, record) => (
      <>
        {record.status === "Active" ? (
          <Button
            type="primary"
            icon={<CheckOutlined />}
            style={{
              backgroundColor: "white",
              color: "green",
              boxShadow: "none",
              paddingLeft:"0px"
            }}
          >
            Active
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<CloseOutlined />}
            style={{
              backgroundColor: "white",
              color: "red",
              boxShadow: "none",
              paddingLeft:"0px"
            }}
          >
            Inactive
          </Button>
        )}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <Image src={EditImage} preview={false}></Image>
        </a>
        <a>
          <Image src={DeleteLogo} preview={false}></Image>
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
  {
    key: "4",
    organizationName: "Example Corp",
    emailAddress: "example@example.com",
    phoneNumber: "1111111111",
    createdOn: "2023-07-11",
    status: "Inactive",
  },
  {
    key: "5",
    organizationName: "Test Corp",
    emailAddress: "test@example.com",
    phoneNumber: "2222222222",
    createdOn: "2023-07-10",
    status: "Active",
  },
  {
    key: "6",
    organizationName: "NewCo",
    emailAddress: "newco@example.com",
    phoneNumber: "3333333333",
    createdOn: "2023-07-09",
    status: "Inactive",
  },
  {
    key: "7",
    organizationName: "Global Corp",
    emailAddress: "global@example.com",
    phoneNumber: "4444444444",
    createdOn: "2023-07-08",
    status: "Active",
  },
  {
    key: "8",
    organizationName: "Tech Solutions",
    emailAddress: "tech@example.com",
    phoneNumber: "5555555555",
    createdOn: "2023-07-07",
    status: "Inactive",
  },
  {
    key: "9",
    organizationName: "Innovative Ltd.",
    emailAddress: "innovative@example.com",
    phoneNumber: "6666666666",
    createdOn: "2023-07-06",
    status: "Active",
  },
  {
    key: "10",
    organizationName: "Alpha Corp",
    emailAddress: "alpha@example.com",
    phoneNumber: "7777777777",
    createdOn: "2023-07-05",
    status: "Inactive",
  },
  {
    key: "11",
    organizationName: "Mega Enterprises",
    emailAddress: "mega@example.com",
    phoneNumber: "8888888888",
    createdOn: "2023-07-04",
    status: "Active",
  },
  {
    key: "12",
    organizationName: "Prime Co",
    emailAddress: "prime@example.com",
    phoneNumber: "9999999999",
    createdOn: "2023-07-03",
    status: "Inactive",
  },
  {
    key: "13",
    organizationName: "Future Corp",
    emailAddress: "future@example.com",
    phoneNumber: "1212121212",
    createdOn: "2023-07-02",
    status: "Active",
  },
  {
    key: "14",
    organizationName: "Tech Solutions Ltd.",
    emailAddress: "techltd@example.com",
    phoneNumber: "1313131313",
    createdOn: "2023-07-01",
    status: "Inactive",
  },
  {
    key: "15",
    organizationName: "Infinity Corp",
    emailAddress: "infinity@example.com",
    phoneNumber: "1414141414",
    createdOn: "2023-06-30",
    status: "Active",
  },
];
