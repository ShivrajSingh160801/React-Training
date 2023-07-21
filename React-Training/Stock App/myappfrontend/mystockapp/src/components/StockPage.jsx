import { useState, useEffect } from 'react';
import { Modal, Button, Form, Input, InputNumber, Table, Space } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { notification } from "antd";
import axios from "axios";

const MyComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields(); // Clear form fields
  };

  const fetchData = () => {
    axios.get("http://localhost:3001/stock/getstock")
      .then((response) => {
        const { data } = response.data;
        setDataSource(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const onFinish = async (values) => {
    let { stockname, quantity } = values.stock;
    const stockordered = 0;
  
    // Check if stock with similar name already exists
    const isStockNameDuplicate = dataSource.some(
      (item) => item.stockname === stockname
    );
  
    if (isStockNameDuplicate) {
      notification.error({
        message: "Error",
        description: "A stock with a similar name already exists.",
      });
      return; // Prevent addition if stock name is duplicate
    }
  
    let stockData = {
      stockname,
      quantity,
      stockordered,
    };
  
    setIsModalVisible(false);
  
    try {
      let post = await axios.post(
        "http://localhost:3001/stock/stockpost",
        stockData
      );
      console.log('post: ', post);
      form.resetFields();
      notification.success({
        message: "Stock Added",
        description: "The stock has been successfully added.",
      });
      fetchData(); // Refresh data after successful addition
    } catch (error) {
      notification.error({
        message: "Error",
        description: "An error occurred while adding the stock.",
      });
    }
  };
  

  const handleDelete = (id) => {
    const itemToDelete = dataSource.find((item) => item.id === id);
    if (itemToDelete.stockordered === 0) {
      notification.error({
        message: "Error",
        description: "Cannot delete a row with stockordered value 0.",
      });
      return; // Prevent deletion if stockordered value is 0
    }
  
    axios
      .delete(`http://localhost:3001/stock/deletestock/${id}`)
      .then(() => {
        setDataSource((prevDataSource) =>
          prevDataSource.filter((item) => item.id !== id)
        );
        notification.success({
          message: "Stock Deleted",
          description: "The stock order has been successfully deleted.",
        });
      })
      .catch((error) => {
        console.error("Error deleting stock order:", error);
        notification.error({
          message: "Error",
          description: "An error occurred while deleting the stock order.",
        });
      });
  };
  

  useEffect(() => {
    fetchData(); // Fetch data from API
  }, []);

  const columns = [
    {
      title: "Stock Name",
      dataIndex: "stockname",
      key: "stockname",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Ordered",
      dataIndex: "stockordered",
      key: "stockordered",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            danger
            onClick={() => handleDelete(record.id)}
            icon={<DeleteOutlined />}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
        <div className="container-fluid d-flex justify-content-center">
          <Button type="primary" onClick={showModal}>
            <span>Add</span> <PlusOutlined />
          </Button>
          <Modal
            title="Enter Your Information"
            open={isModalVisible} // Use "visible" instead of "open"
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form form={form} onFinish={onFinish}>
              <Form.Item
                label="Stock Name"
                name={["stock", "stockname"]}
                rules={[
                  {
                    required: true,
                    message: "Please Enter Stock Name",
                  }
                ]}
              >
                <Input placeholder="Enter Stock Name" />
              </Form.Item>
              <Form.Item
                label="Stock Quantity"
                name={["stock", "quantity"]}
                rules={[
                  {
                    required: true,
                    message: "Please enter Quantity in Numbers",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Enter Stock Quantity"
                  min={0}
                  style={{ width: "200px" }}
                />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </nav>
      <section className="mt-2">
        <Table dataSource={dataSource} columns={columns} />
      </section>
    </>
  );
};

export default MyComponent;
