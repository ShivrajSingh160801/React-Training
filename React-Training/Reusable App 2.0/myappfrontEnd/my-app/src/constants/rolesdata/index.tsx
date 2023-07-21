import React from "react";
import { Space, Table, Switch, Button , Drawer } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  DeleteOutlined,
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";

export interface RolesDataType {
  key: string;
  roleName: string;
  description: string;
  status: string;
  permissions: string;
  action: string;
}



export const Rolescolumns: ColumnsType<RolesDataType> = [
  {
    title: "Role Name",
    dataIndex: "roleName",
    key: "roleName",
    sorter: (a, b) => a.roleName.localeCompare(b.roleName), 
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Status",
    key: "status",
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
            }}
          >
            Inactive
          </Button>
        )}
      </>
    ),
  },
  {
    title: "Permissions",
    key: "permissions",
    render: (_, record) => (
      <>
        <Button
          type="primary"
          icon={<MenuOutlined />}
          style={{
            backgroundColor: "white",
            color: "blue",
            boxShadow: "none",
          }}
        >
          <span style={{
            textDecoration:"underline"
          }}>Permission Details</span>
        </Button>
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

const data: RolesDataType[] = [];


for (let i = 1; i <= 10; i++) {
  const entry: RolesDataType = {
    key: `key${i}`,
    roleName: `Role ${i}`,
    description: `Hello this is the description of the Role ${i}`,
    status: i % 2 === 0 ? "Active" : "Inactive",
    permissions: `Permissions ${i}`,
    action: `Action ${i}`,
  };

  data.push(entry);
}

export const RolesData: RolesDataType[] = data;
