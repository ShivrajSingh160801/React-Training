import React from "react";
import { Space, Table, Switch } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { columns, data } from "../../../constants/userData/index";
import "./index.css";

const DynamicTable: React.FC = () => (
  <Table
    style={{
      paddingTop: "35px",
      paddingBottom: "20px",
      backgroundColor: "white",
    }}
    columns={columns}
    dataSource={data}
    pagination={{
      position: ["bottomCenter"],
      style: { color: "black" },
    }}
  />
);

export default DynamicTable;
