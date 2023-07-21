// columns.ts
import React from "react";
import { Space, Table, Switch } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export interface DataType {
  key: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: boolean;
}

let StatusValue = true;

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
  // StatusValue = checked;
  // console.log('StatusValue: ', StatusValue);
};

export const Usercolumns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
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
    render: (_, record) => {
      console.log("_record::>", record, _);
      return (
        <>
          <Switch onChange={onChange} />
          <span style={{ marginLeft: 8 }}>
            {StatusValue === true ? "Active" : "Inactive"}
          </span>
        </>
      );
    },
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
    name: "John Brown",
    email: "john@example.com",
    phone: "1234567890",
    address: "New York No. 1 Lake Park",
    status: false,
  },
  {
    name: "Jim Green",
    email: "jim@example.com",
    phone: "0987654321",
    address: "London No. 1 Lake Park",
    status: false,
  },
  {
    name: "Joe Black",
    email: "joe@example.com",
    phone: "9876543210",
    address: "Sydney No. 1 Lake Park",
    status: false,
  },
  {
    name: "Alice White",
    email: "alice@example.com",
    phone: "4567890123",
    address: "Los Angeles No. 1 Lake Park",
    status: true,
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "7890123456",
    address: "Toronto No. 1 Lake Park",
    status: true,
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "2345678901",
    address: "Chicago No. 1 Lake Park",
    status: false,
  },
  {
    name: "David Lee",
    email: "david@example.com",
    phone: "8765432109",
    address: "Paris No. 1 Lake Park",
    status: true,
  },
  {
    name: "Emily Johnson",
    email: "emily@example.com",
    phone: "5678901234",
    address: "Berlin No. 1 Lake Park",
    status: false,
  },
  {
    name: "Michael Anderson",
    email: "michael@example.com",
    phone: "5432109876",
    address: "Tokyo No. 1 Lake Park",
    status: true,
  },
  {
    name: "Sarah Parker",
    email: "sarah@example.com",
    phone: "3456789012",
    address: "Madrid No. 1 Lake Park",
    status: true,
  },
  {
    name: "William Turner",
    email: "william@example.com",
    phone: "8901234567",
    address: "Rome No. 1 Lake Park",
    status: false,
  },
  {
    name: "Linda Wilson",
    email: "linda@example.com",
    phone: "4321098765",
    address: "Moscow No. 1 Lake Park",
    status: true,
  },
  {
    name: "Chris Evans",
    email: "chris@example.com",
    phone: "9012345678",
    address: "Seoul No. 1 Lake Park",
    status: false,
  },
  {
    name: "Olivia Brown",
    email: "olivia@example.com",
    phone: "2109876543",
    address: "Beijing No. 1 Lake Park",
    status: false,
  },
  {
    name: "Daniel Miller",
    email: "daniel@example.com",
    phone: "6543210987",
    address: "Sao Paulo No. 1 Lake Park",
    status: true,
  },
].map((d, i) => {
  return {
    ...d,
    key: i,
  };
});
