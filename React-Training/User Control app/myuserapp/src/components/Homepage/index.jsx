import React, { useState, useEffect } from "react";
import logo from "../../../src/pngwing.com.png";
import { UserOutlined } from "@ant-design/icons";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import MonthPickerWithLastDate from "./Datepicker";
import EditableTable from "./Table";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentPath = window.location.pathname;
    if (!token) {
      navigate("/");
    } else if (token && currentPath === "/" && currentPath !== "/home") {
      navigate("/home");
    }
  }, [navigate]);

  const [selectedDate, setSelectedDate] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Make an API call or perform any other necessary operations
    // to fetch the table data based on the selected date
    const tableData = fetchTableData(date); // Replace fetchTableData with your actual function
    setTableData(tableData);
  };

  // Placeholder function for fetching table data
  const fetchTableData = (date) => {
    // Replace this with your actual implementation to fetch the table data
    // based on the selected date
    return [
      // Example data
      { id: 1, name: "John", age: 30 },
      { id: 2, name: "Jane", age: 25 },
      // ...
    ];
  };

  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand ps-4" href="#">
            <img src={logo} width={"200px"} height={"45px"} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end pe-5"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item pe-4">
                <button
                  className="icon-button"
                  style={{
                    fontSize: "28px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <UserOutlined />
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="icon-button"
                  style={{
                    fontSize: "28px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <LogoutOutlined />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="mt-3">
        <div className="row">
          <MonthPickerWithLastDate onDateChange={handleDateChange} />
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <button className="button button-primary">Hello</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="button button-primary">Hello</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="button button-primary">Hello</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {selectedDate && (
        <section className="mt-3">
          <EditableTable selectedDate={selectedDate} tableData={tableData} />
        </section>
      )}
    </>
  );
};

export default Navbar;
