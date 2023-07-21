import React, { ChangeEvent } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./index.css";
import SearchAndFilter from "../SearchAndFilter";

interface DynamicTableProps {
  columns: any;
  data: any;
  performSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  columns,
  data,
  performSearchHandler,
  searchValue,
}) => (
  <div >
    <SearchAndFilter
      performSearchHandler={performSearchHandler}
      searchValue={searchValue}
    />
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ["bottomCenter"],
        style: { color: "black" },
      }}
      size="small"

    />
  </div>
);

export default DynamicTable;
