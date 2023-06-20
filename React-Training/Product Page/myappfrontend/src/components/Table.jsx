import { useEffect, useState } from "react";
import { Table, Switch, Button } from "antd";

const App = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:3001/product/getProduct")
      .then((response) => response.json())
      .then((responseData) => {
        // Set the API response data in the state
        setData(responseData.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSwitchChange = (checked) => {
    setSortOrder(checked ? "desc" : "asc");
  };

  const handleSearch = () => {
    
    console.log("Search Value:", searchValue);
    console.log("Page Number:", pageNumber);
    console.log("Sort Order:", sortOrder);
    
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
      dataIndex: "image",
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
              onChange={(e) => setPageNumber(e.target.value)}
            />
            <Switch
              style={{
                width : '300px'
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
              onChange={(e) => setSearchValue(e.target.value)}
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
