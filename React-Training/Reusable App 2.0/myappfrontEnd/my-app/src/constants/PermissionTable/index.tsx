import React from "react";
import { Checkbox, Table } from "antd";

interface Module {
  moduleName: string;
  all: any;
  view: any;
  edit: any;
  delete: any;
}

const data: Module[] = [
  { moduleName: "Admin", all: false, view: false, edit: false, delete: false },
  { moduleName: "Users", all: false, view: false, edit: false, delete: false },
  { moduleName: "Organizations", all: false, view: false, edit: false, delete: false },
  { moduleName: "Roles", all: false, view: false, edit: false, delete: false },
  { moduleName: "Connection", all: false, view: false, edit: false, delete: false },
  { moduleName: "Perferece", all: false, view: false, edit: false, delete: false },
  { moduleName: "Subscription", all: false, view: false, edit: false, delete: false },
  { moduleName: "Custom 1", all: false, view: false, edit: false, delete: false },
  { moduleName: "Custom 2", all: false, view: false, edit: false, delete: false },
  { moduleName: "Custom 3", all: false, view: false, edit: false, delete: false },


];

const columns = [
  {
    title: "Module Name",
    dataIndex: "moduleName",
    key: "moduleName",
    width:"30%"
  },
  {
    title: "All",
    width:"10%",
    dataIndex: "all",
    key: "all",
    render: (_: any, record: Module) => {
      if (record.moduleName === "Admin") {
        return null; // Render nothing for the first row
      }
      return (
        <Checkbox
          checked={record.all}
          onChange={(e) => console.log(e.target.checked)}
        />
      );
    },
  },
  {
    title: "View",
    width:"10%",
    dataIndex: "view",
    key: "view",
    render: (_: any, record: Module) => {
      if (record.moduleName === "Admin") {
        return null; // Render nothing for the first row
      }
      return (
        <Checkbox
          checked={record.view}
          onChange={(e) => console.log(e.target.checked)}
        />
      );
    },
  },
  {
    title: "Edit",
    width:"10%",
    dataIndex: "edit",
    key: "edit",
    render: (_: any, record: Module) => {
      if (record.moduleName === "Admin") {
        return null; // Render nothing for the first row
      }
      return (
        <Checkbox
          checked={record.edit}
          onChange={(e) => console.log(e.target.checked)}
        />
      );
    },
  },
  {
    title: "Delete",
    width:"10%",
    dataIndex: "delete",
    key: "delete",
    render: (_: any, record: Module) => {
      if (record.moduleName === "Admin") {
        return null; // Render nothing for the first row
      }
      return (
        <Checkbox
          checked={record.delete}
          onChange={(e) => console.log(e.target.checked)}
        />
      );
    },
  },
];

const AntTable: React.FC = () => {
  return <Table<Module> dataSource={data} columns={columns} pagination={false} />;
};

export default AntTable;
