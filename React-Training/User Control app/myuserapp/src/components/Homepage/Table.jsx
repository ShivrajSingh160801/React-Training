import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import getSupplierData from "./Tabledata";
import axios from "axios";

const MyGridComponent = ({ selectedDate }) => {
  console.log('New Table: ', selectedDate);
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([""]);

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const data = await getSupplierData();
        setColumnDefs(getColumnDefsFromData(data)); // Set the column definitions based on the fetched data
        setRowData(data);
      } catch (error) {
        console.error("Error fetching supplier data:", error);
      }
    };

    fetchSupplierData();
  }, []);

  const getColumnDefsFromData = (data) => {
    if (data.length > 0) {
      const keys = Object.keys(data[0]);
      return keys.map((key) => ({
        headerName: key,
        field: key,
        editable: true,
        onHeaderClick: handleHeaderClick,
      }));
    }
    return [];
  };

  const handleHeaderClick = (params) => {
    const newHeader = prompt(
      "Enter a new value for the header:",
      params.colDef.headerName
    );
    if (newHeader !== null && newHeader.trim() !== "") {
      const updatedDefs = [...columnDefs];
      const clickedColDef = updatedDefs.find(
        (def) => def.headerName === params.colDef.headerName
      );
      if (clickedColDef) {
        clickedColDef.headerName = newHeader;
        setColumnDefs(updatedDefs);
      }
    }
  };

  const onCellValueChanged = (params) => {
    const updatedData = [...rowData];
    updatedData[params.rowIndex] = params.data;
    setRowData(updatedData);
  };

  const handleSave = async () => {
    const tableData = {
      date: selectedDate,
      tableData: {
        columnDefs: columnDefs,
        rowData: rowData,
      },
    };
    console.log("tableData: ", tableData);
    try {
      await axios.post("http://localhost:3001/user/postTable", tableData);
      console.log("Table data saved successfully!");
    } catch (error) {
      console.error("Error saving table data:", error);
    }
  };

  return (
    <div>
      <div
        className="ag-theme-alpine"
        style={{ height: "400px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          enableCellEditing={true}
          onCellValueChanged={onCellValueChanged}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default MyGridComponent;
