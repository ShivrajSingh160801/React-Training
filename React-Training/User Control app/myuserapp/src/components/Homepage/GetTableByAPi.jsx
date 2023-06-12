import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyGridComponent = ({ selectedDate, tableData }) => {
  console.log('tableData: ', tableData);
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);

  useEffect(() => {
    setColumnDefs(getColumnDefsFromData(tableData.data.TableEntry.tableData.columnDefs));
    setRowData(tableData.data.TableEntry.tableData.rowData);
  }, [tableData]);

  const getColumnDefsFromData = (data) => {
    if (data && data.length > 0) {
      return data.map((colDef) => ({
        headerName: colDef.headerName,
        field: colDef.field,
        editable: colDef.editable,
        onHeaderClick: handleHeaderClick
      }));
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
    const updatedData = [...rowData];
    updatedData[params.rowIndex] = params.data;
    setRowData(updatedData);
  };

  const handleSave = async () => {
    const updatedTableData = {
      date: selectedDate,
      columnDefs: columnDefs.map((colDef) => ({
        headerName: colDef.headerName,
        field: colDef.field,
        editable: colDef.editable
      })),
      rowData: rowData
    };

    const requestBody = { tableData: updatedTableData };

    try {
      await axios.post('http://localhost:3001/user/postTable', requestBody);
      console.log('Table data saved successfully!');
    } catch (error) {
      console.error('Error saving table data:', error);
    }
  };

  const handleCellDataChange = (event) => {
    const { rowIndex, colId, newValue } = event.target.dataset;
    const updatedData = [...rowData];
    updatedData[rowIndex][colId] = newValue;
    setRowData(updatedData);
  };

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          enableCellEditing={true}
          onCellValueChanged={onCellValueChanged}
          onCellEditingStopped={handleCellDataChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default MyGridComponent;
