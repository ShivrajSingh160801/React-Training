import React, { useEffect, useState } from "react";
import { Table, Switch } from "antd";
import axios from "axios";

const App = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/product/getProduct")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSwitchChange = (checked) => {
    setSortOrder(checked ? "desc" : "asc");
    handleSearch();
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    handleSearch();
  };

  const handlePageNumberChange = (e) => {
    setPageNumber(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search Value:", searchValue);
    console.log("Page Number:", pageNumber);
    console.log("Sort Order:", sortOrder);

    axios
      .get("http://localhost:3001/product/getProductonSearch", {
        params: {
          searchValue: searchValue,
          pageNumber: pageNumber,
          sortOrder: sortOrder,
        },
      })
      .then((response) => {
        // Handle the response here
        console.log(response.data.data);
        setData(response?.data?.data);
      })
      .catch((error) => {
        // Handle errors here
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Image",
      dataIndex: "  ",
      render: (text, record) => (
        <img
          src={`http://localhost:3001/${record.image}`}
          alt="Product Image"
          style={{ width: "100px", height: "100px" }}
        />
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-center">
          <form className="d-flex">
            <input
              className="form-control me-3"
              type="number"
              placeholder="Enter Page Number"
              aria-label="Page"
              value={pageNumber}
              onChange={handlePageNumberChange}
            />
            <Switch
              style={{
                width: "300px",
              }}
              checkedChildren="Descending"
              unCheckedChildren="Ascending"
              onChange={handleSwitchChange}
              defaultChecked={sortOrder === "desc"}
            />
            <input
              className="form-control mx-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={handleSearchValueChange}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
};

export default App;
    