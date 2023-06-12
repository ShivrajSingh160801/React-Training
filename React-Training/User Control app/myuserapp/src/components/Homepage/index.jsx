import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../../src/pngwing.com.png";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import MonthPickerWithLastDate from "./Datepicker";
import NewTable from "./Table";
import GetTable from "./GetTableByAPi"; // Assuming you have a GetTable component

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    let email = parsedUser.email;
    console.log('email: ', email);

    const currentPath = window.location.pathname;
    if (!token) {
      navigate("/");
    } else if (token && currentPath === "/" && currentPath !== "/home") {
      navigate("/home");
    }
  }, [navigate]);

  const [selectedDate, setSelectedDate] = useState("");
  const [tableData, setTableData] = useState([]);

  const fetchTableData = async (date) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/user/getTable?date=${date}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch table data");
    }
  };

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    try {
      const tableData = await fetchTableData(date); // Wait for the API call to complete
      setTableData(tableData);
      console.log('tableData: ', tableData);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
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
        </div>
      </section>
      {selectedDate ? (
        <section className="mt-3">
          {tableData.data?.TableEntry !== null ? (
            <GetTable selectedDate={selectedDate} tableData={tableData?.data?.TableEntry} />
          ) : (
            <NewTable selectedDate={selectedDate} />
          )}
        </section>
      ) : null}
    </>
  );
};

export default Navbar;
