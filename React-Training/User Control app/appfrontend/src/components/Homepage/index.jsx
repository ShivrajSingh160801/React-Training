import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../../src/pngwing.com.png";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import MonthPickerWithLastDate from "./Datepicker";
import NewTable from "./Table";
import GetTable from "./GetTableByAPi";
import { Popover, Form, Input, Button } from "antd";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);

    const currentPath = window.location.pathname;
    if (!token) {
      navigate("/");
    } else if (token && currentPath === "/" && currentPath !== "/home") {
      navigate("/home");
    }
  }, [navigate]);

  const [selectedDate, setSelectedDate] = useState("");
  const [tableData, setTableData] = useState([]);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [form] = Form.useForm();

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
      const tableData = await fetchTableData(date);
      setTableData(tableData);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  const phone = parsedUser?.phone;
  const username = parsedUser?.name;
  const id = parsedUser?.id;

  const handleSaveUser = () => {
    form.validateFields().then(async (values) => {
      console.log("Form values:", values);
      console.log("Form values:", id);
      await axios
        .put(`http://localhost:3001/user/put?id=${id}`, values)
        .then((response) => {
          localStorage.setItem(
            "user",
            JSON.stringify(response?.data?.data?.user)
          );
          setIsPopoverVisible(false);
        })
        .catch((error) => {
          console.error("API error:", error);
        });
      setIsPopoverVisible(false);
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
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
                <Popover
                  content={
                    <Form form={form}>
                      <Form.Item
                        name="name"
                        label="Username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your name!",
                            whitespace: true,
                          },
                        ]}
                        initialValue={username}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="phone"
                        label="Phone"
                        initialValue={phone}
                        rules={[
                          {
                            required: true,
                            pattern : /^[6-9]\d{9}$/
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" onClick={handleSaveUser}>
                          Save
                        </Button>
                      </Form.Item>
                    </Form>
                  }
                  trigger="click"
                  visible={isPopoverVisible}
                  onVisibleChange={(visible) =>
                    setIsPopoverVisible(visible)
                  }
                >
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
                </Popover>
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
                  onClick={handleLogout}
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
            <GetTable
              selectedDate={selectedDate}
              tableData={tableData?.data?.TableEntry}
            />
          ) : (
            <NewTable selectedDate={selectedDate} />
          )}
        </section>
      ) : null}
    </>
  );
};

export default Navbar;
