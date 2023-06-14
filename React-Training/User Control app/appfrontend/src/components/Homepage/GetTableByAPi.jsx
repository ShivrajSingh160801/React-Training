import React, { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



const MyGridComponent = ({ selectedDate, tableData }) => {
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);
  const [selectedRowIndices, setSelectedRowIndices] = useState([]);
  const gridApiRef = useRef(null);

  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  const email = parsedUser?.email;



  useEffect(() => {
    setColumnDefs(getColumnDefsFromData(tableData?.tableData?.columnDefs));
    setRowData(tableData?.tableData?.rowData);
  }, [tableData]);

  const getColumnDefsFromData = (data) => {
    if (data && data.length > 0) {
      const checkboxColumnDef = {
        headerName: '',
        field: 'checkbox',
        width: 50,
        checkboxSelection: true,
      };
      const updatedColumnDefs = [
        checkboxColumnDef,
        ...data.map((colDef) => ({
          headerName: colDef.headerName,
          field: colDef.field,
          editable: colDef.editable,
        })),
      ];
      return updatedColumnDefs;
    }
    return [];
  };

  const calculateRowValues = (row) => {
    const customValues = Object.keys(row)
      .filter((key) => key.startsWith('Custom'))
      .map((key) => parseFloat(row[key]));

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

  const onCellValueChanged = (params) => {
    const updatedData = rowData.map((row, index) => {
      if (index === params.rowIndex) {
        return calculateRowValues({ ...row, [params.colDef.field]: params.newValue });
      }
      return row;
    });
    setRowData(updatedData);
  };
  const handleSave = async () => {
    const updatedTableData = {
      date: selectedDate,
      columnDefs: columnDefs
        .filter((colDef) => colDef.field !== 'checkbox')
        .map((colDef) => ({
          headerName: colDef.headerName,
          field: colDef.field,
          editable: colDef.editable,
        })),
      rowData: rowData,
    };
  
    const requestBody = { tableData: updatedTableData };
    console.log('requestBody: ', requestBody);
    try {
      await axios.put(`http://localhost:3001/user/putTable?date=${selectedDate}`, requestBody);
      console.log('Table data updated successfully!');
    } catch (error) {
      console.error('Error saving table data:', error);
    }
  };
  

const handleApprove = async () => {
  const updatedData = rowData.map((row, index) => {
    if (selectedRowIndices.includes(index)) {
      return { ...row, Approved: true };
    }
    return row;
  });
  setRowData(updatedData);

  const updatedTableData = {
    date: selectedDate,
    columnDefs: columnDefs
      .filter((colDef) => colDef.field !== 'checkbox')
      .map((colDef) => ({
        headerName: colDef.headerName,
        field: colDef.field,
        editable: colDef.editable,
      })),
    rowData: updatedData, // Use the updated row data
  };

  const requestBody = { tableData: updatedTableData };
  console.log('requestBody: ', requestBody);
  try {
    await axios.put(`http://localhost:3001/user/putTable?date=${selectedDate}`, requestBody);
    console.log('Table data updated successfully!');
  } catch (error) {
    console.error('Error saving table data:', error);
  }
};

const handleExportCSV = () => {
 if (gridApiRef.current && gridApiRef.current.api) {
      const params = {
        allColumns: true,
        fileName: 'gridData.csv',
      };
      gridApiRef.current.api.exportDataAsCsv(params);
    }
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



  const handlePdfDownload = () => {
    const doc = new jsPDF();
  
    const selectedRows = rowData.filter((row, index) => selectedRowIndices.includes(index));
  
    selectedRows.forEach((row, index) => {
      if (index !== 0) {
        doc.addPage();
      }
  
      const headers = Object.keys(row);
      const tableData = [headers.map((header) => row[header])];
  
      doc.autoTable({
        head: [headers],
        body: tableData,
      });
    });
  
    doc.save('gridData.pdf');
  };
  
  const rowClassRules = {
    'selected-row': (params) => selectedRowIndices.includes(params.rowIndex),
    'approved-row': (params) => params.data.Approved === true,
  };

  const buttonStyle = {
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
    marginLeft: '10px',
    marginBottom: '10px',
  };

  return (
    <div>
      <style>
        {`
          .ag-theme-alpine .selected-row {
            background-color: paleyellow !important;
          }
          .ag-theme-alpine .approved-row {
            background-color: palegreen !important;
          }
        `}
      </style>
      <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
        <div>
          <button onClick={handleSave} style={{ ...buttonStyle, background: 'rgb(93, 42, 214)' }}>
            Save
          </button>
          <button onClick={handleApprove} style={{ ...buttonStyle, background: '#17b42a' }}>
            Approve
          </button>
          <button onClick={handleEmail} style={{ ...buttonStyle, background: '#3984ff' }}>
            Email
          </button>
          <button onClick={handlePdfDownload} style={{ ...buttonStyle, background: '#ff8040' }}>
            Download PDF
          </button>
          <button onClick={handleExportCSV} style={{ ...buttonStyle, background: '#ff8040' }}>
            Export
          </button>
        </div>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowSelection="multiple"
          onSelectionChanged={(event) => {
            const selectedNodes = event.api.getSelectedNodes();
            const selectedIndices = selectedNodes.map((node) => node.rowIndex);
            setSelectedRowIndices(selectedIndices);
          }}
          rowClassRules={rowClassRules}
          enableCellEditing={true}
          onCellValueChanged={onCellValueChanged}
          onGridReady={(params) => (gridApiRef.current = params)}
        />
      </div>
    </div>
  );
};

export default MyGridComponent;


