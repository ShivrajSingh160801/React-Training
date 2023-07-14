import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./index.css";

interface DynamicTableProps {
  columns: ColumnsType<any>; // Update the type based on your column data structure
  data: any[]; // Update the type based on your data structure
}


const DynamicTable: React.FC<DynamicTableProps> = ({ columns, data }) => (

  
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
