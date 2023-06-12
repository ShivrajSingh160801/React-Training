import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyGridComponent = ({ selectedDate, tableData }) => {
  console.log("Get Table");
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);
  const [selectedRowIndices, setSelectedRowIndices] = useState([]);

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
          onHeaderClick: handleHeaderClick,
        })),
      ];
      return updatedColumnDefs;
    }
    return [];
  };

  const handleHeaderClick = (params) => {
    const newHeader = prompt('Enter a new value for the header:', params.colDef.headerName);
    if (newHeader !== null && newHeader.trim() !== '') {
      const updatedDefs = [...columnDefs];
      const clickedColDef = updatedDefs.find((def) => def.headerName === params.colDef.headerName);
      if (clickedColDef) {
        clickedColDef.headerName = newHeader;
        setColumnDefs(updatedDefs);
      }
    }
  };

  const onCellValueChanged = (params) => {
    const updatedData = rowData.map((row, index) => {
      if (index === params.rowIndex) {
        return { ...row, [params.colDef.field]: params.newValue };
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
      rowData: rowData.filter((row, index) => !selectedRowIndices.includes(index)),
    };

    const requestBody = { tableData: updatedTableData };
    try {
      await axios.put(`http://localhost:3001/user/putTable?date=${selectedDate}`, requestBody);
      console.log('Table data updated successfully!');
    } catch (error) {
      console.error('Error saving table data:', error);
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

  const rowClassRules = {
    'selected-row': (params) => selectedRowIndices.includes(params.rowIndex),
    'approved-row': (params) => params.data.Approved === true,
  };

  const buttonStyle = {
    border: 'none', // Remove default button border
    color: 'white', // Text color
    padding: '10px 20px', // Add padding
    textAlign: 'center', // Center align text
    textDecoration: 'none', // Remove underline
    display: 'inline-block', // Display as inline block
    fontSize: '16px', // Font size
    borderRadius: '4px', // Add border radius
    cursor: 'pointer', // Add cursor on hover
    marginTop : '15px', 
    marginLeft: '10px', // Add some space between buttons
    marginBottom:'10px'
  };


  return (
    <div>
      <style>
        {`
          .ag-theme-alpine .selected-row {
            background-color: palegreen !important;
          }
          .ag-theme-alpine .approved-row {
            background-color: palegreen !important;
          }
        `}
      </style>
      <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
      <div>
      <button onClick={handleSave} style={{ ...buttonStyle, background: 'rgb(93, 42, 214)' }}>Save</button>

        <button onClick={handleApprove} style={{ ...buttonStyle, background: '#17b42a' }}>Approve</button>
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
        />
      </div>
    
    </div>
  );
};

export default MyGridComponent;
