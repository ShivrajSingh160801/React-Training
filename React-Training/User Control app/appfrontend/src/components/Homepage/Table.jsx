import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import getSupplierData from "./Tabledata";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const MyGridComponent = ({ selectedDate }) => {
  console.log('New Table: ', selectedDate);
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);
  const [selectedRowIndices, setSelectedRowIndices] = useState([]);
  const [editedRowIndices, setEditedRowIndices] = useState([]);
  const [approvedRowIndices, setApprovedRowIndices] = useState([]);

  
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  const email = parsedUser?.email;


  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const data = await getSupplierData(selectedDate);
        console.log('data: ', data);
        setColumnDefs(getColumnDefsFromData(data));
        setRowData(data);
        setEditedRowIndices([]);
        setApprovedRowIndices([]); // Reset approvedRowIndices when selectedDate changes
      } catch (error) {
        console.error("Error fetching supplier data:", error);
      }
    };

    fetchSupplierData();
  }, [selectedDate]);

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
    if (!editedRowIndices.includes(params.rowIndex)) {
      setEditedRowIndices((prevState) => [...prevState, params.rowIndex]);
    }
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
    try {
      await axios.post(`http://localhost:3001/user/postTable?date=${selectedDate}`, tableData);
      console.log("Table data saved successfully!");
      setEditedRowIndices([]); // Reset editedRowIndices after saving
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
    setSelectedRowIndices([]);
    setApprovedRowIndices((prevState) => [
      ...prevState,
      ...selectedRowIndices.filter(
        (index) => !approvedRowIndices.includes(index)
      ),
    ]);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();

    const columns = columnDefs
      .filter((colDef) => colDef.field !== "checkbox")
      .map((colDef) => colDef.headerName);
    const rows = rowData.map((row) =>
      Object.values(row).filter((value, index) => index !== 0)
    );

    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save("table.pdf");
  };

  const handleEmail = () => {
    const tableData = rowData.map((row) => {
      const updatedRow = {};
      Object.keys(row).forEach((key) => {
        if (key !== 'checkbox') {
          updatedRow[key] = row[key];
        }
      });
      return updatedRow;
    });

    const tableDataString = JSON.stringify(tableData);
    const tableDataBase64 = btoa(tableDataString);

    const message = {
      Host: 'smtp.elasticemail.com',
      Username: 'shivraj7408@gmail.com',
      Password: 'CBACD93A2FBD13A8FDD8F1D0981B74FBDB25',
      Port: '2525',
      To: email,
      From: 'shivraj7408@gmail.com',
      Subject: 'CSV Export',
      Body: 'Please find the CSV file attached.',
      Attachments: [
        {
          name: 'gridData.json',
          data: tableDataBase64,
        },
      ],
    };

    window.Email.send(message)
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <style>{`
        .ag-theme-alpine .selected-row {
          background-color: white !important;
        }
        .ag-theme-alpine .approved-row {
          background-color: palegreen !important;
        }
        .button-container {
          margin-top: 16px;
        }
        .button {
          background-color: #007bff;
          color: #ffffff;
          border: none;
          padding: 8px 16px;
          margin-right: 8px;
          border-radius: 4px;
          cursor: pointer;
        }
        .button:hover {
          background-color: #0056b3;
        }
      `}</style>
      <div className="ag-theme-alpine" style={{ height: "400px", width: "100%" }}>
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
            "approved-row": (params) =>
              approvedRowIndices.includes(params.rowIndex),
          }}
          enableCellEditing={true}
          onCellValueChanged={onCellValueChanged}
        />
      </div>
      <div className="button-container">
        <button className="button" onClick={handleSave}>Save</button>
        <button className="button" onClick={handleApprove}>Approve</button>
        <button className="button" onClick={handleExportPDF}>Export PDF</button>
        <button className="button" onClick={handleEmail}>Email</button>
      </div>
    </div>
  );
};

export default MyGridComponent;
