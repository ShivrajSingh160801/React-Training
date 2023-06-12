import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import getSupplierData from "./Tabledata";
import axios from "axios";

const MyGridComponent = ({ selectedDate }) => {
  console.log('New Table: ', selectedDate);
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);
  const [selectedRowIndices, setSelectedRowIndices] = useState([]);

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const data = await getSupplierData();
        setColumnDefs(getColumnDefsFromData(data));
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
      return [
        {
          headerName: "",
          field: "checkbox",
          width: 50,
          checkboxSelection: true,
        },
        ...keys.map((key) => ({
          headerName: key,
          field: key,
          editable: true,
          onCellValueChanged: onCellValueChanged,
        })),
      ];
    }
    return [];
  };

  const onCellValueChanged = (params) => {
    const updatedData = [...rowData];
    updatedData[params.rowIndex] = calculateRowValues(params.data);
    setRowData(updatedData);
  };

  const calculateRowValues = (row) => {
    const customValues = Object.keys(row)
      .filter(key => key.startsWith("Custom"))
      .map(key => parseFloat(row[key]));

    const net = customValues.reduce((sum, value) => sum + value, 0.0);
    const vat = 0.1 * net;
    const advance = parseFloat(row.Advance);
    const balance = net + vat - advance;

    return {
      ...row,
      Net: parseFloat(net.toFixed(2)),
      VAT: parseFloat(vat.toFixed(2)),
      Balance: parseFloat(balance.toFixed(2)),
    };
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

  const handleSave = async () => {
    const updatedData = rowData.map((row, index) => {
      if (selectedRowIndices.includes(index)) {
        return { ...row, Approved: true };
      }
      return row;
    });

    const tableData = {
      date: selectedDate,
      tableData: {
        columnDefs: columnDefs,
        rowData: updatedData,
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

  const handleApprove = () => {
    const updatedData = rowData.map((row, index) => {
      if (selectedRowIndices.includes(index)) {
        return { ...row, Approved: true };
      }
      return row;
    });

    setRowData(updatedData);
  };

  return (
    
    <div>
            <style>{`
        .ag-theme-alpine .selected-row {
          background-color: palegreen !important;
        }
      `}</style>
      <div
        className="ag-theme-alpine"
        style={{ height: "400px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowSelection="multiple"
          onSelectionChanged={(event) => {
            const selectedNodes = event.api.getSelectedNodes();
            const selectedIndices = selectedNodes.map((node) => node.rowIndex);
            setSelectedRowIndices(selectedIndices);
          }}
          rowClassRules={{
            "selected-row": (params) =>
              selectedRowIndices.includes(params.rowIndex),
          }}
          enableCellEditing={true}
          onCellValueChanged={onCellValueChanged}
        />
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleApprove}>Approve</button>
      </div>
    </div>
  );
};

export default MyGridComponent;
