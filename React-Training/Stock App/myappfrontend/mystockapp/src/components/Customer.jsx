import { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Table,
  Space,
} from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { notification } from "antd";
import axios from "axios";

const { Option } = Select;

const MyComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [stocks, setStocks] = useState([]);

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
    axios
      .get("http://localhost:3001/stock/getcustomer")
      .then((response) => {
        const { data } = response.data;
        setDataSource(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/stock/getstock")
      .then((response) => {
        const { data } = response.data;
        setStocks(data);
      })
      .catch((error) => {
        console.error("Error fetching stocks:", error);
      });
  }, []);

  const onFinish = async (values) => {
    const { customername, stockId, orderqty } = values?.customer;
    const customerData = {
      customername,
      stockId,
      orderqty,
    };
    setIsModalVisible(false);
    try {
      const stock = stocks.find((stock) => stock.id === stockId);
      if (orderqty > stock.quantity) {
        notification.error({
          message: "Insufficient Quantity",
          description: "The selected stock does not have enough quantity.",
        });
        return;
      }

      const updatedStock = {
        stockname: stock.stockname,
        stockordered: stock.stockordered + orderqty,
        quantity: stock.quantity - orderqty,
      };

      await axios.put(
        `http://localhost:3001/stock/updatestock/${stock.id}`,
        updatedStock
      );

      await axios.post(
        "http://localhost:3001/stock/customerpost",
        customerData
      );
      form.resetFields();
      notification.success({
        message: "Stock Added",
        description: "The stock has been successfully added.",
      });
      fetchData();
    } catch (error) {
      notification.error({
        message: "Error",
        description: "An error occurred while adding the stock.",
      });
    }
  };

  const handleDelete = (id) => {
    const stockToDelete = dataSource.find((item) => item.id === id);
    if (!stockToDelete) {
      return;
    }
  
    axios
      .delete(`http://localhost:3001/stock/deletestock/${id}`)
      .then(async () => {
        setDataSource((prevDataSource) =>
          prevDataSource.filter((item) => item.id !== id)
        );
        notification.success({
          message: "Stock Deleted",
          description: "The stock has been successfully deleted.",
        });
  
        // Update stock information
        const updatedStock = {
          stockname: stockToDelete.stock.stockname,
          stockordered: stockToDelete.stock.stockordered - stockToDelete.orderqty,
          quantity: stockToDelete.stock.quantity + stockToDelete.orderqty,
        };
  
        try {
          await axios.put(
            `http://localhost:3001/stock/updatestock/${stockToDelete.stock.id}`,
            updatedStock
          );
        } catch (error) {
          console.error("Error updating stock:", error);
          notification.error({
            message: "Error",
            description: "An error occurred while updating the stock.",
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting stock:", error);
        notification.error({
          message: "Error",
          description: "An error occurred while deleting the stock.",
        });
      });
  };
  

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customername",
      key: "customername",
    },
    {
      title: "Stock Name",
      dataIndex: "stock",
      key: "stock",
      render: (stock) => stock.stockname,
    },
    {
      title: "Ordered Quantity",
      dataIndex: "orderqty",
      key: "orderqty",
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
            title="Enter Customer Information"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form form={form} onFinish={onFinish}>
              <Form.Item
                label="Customer Name"
                name={["customer", "customername"]}
                rules={[
                  {
                    required: true,
                    message: "Please enter the Customer name",
                  },
                ]}
              >
                <Input placeholder="Enter Customer Name" />
              </Form.Item>
              <Form.Item
                label="Stock Name"
                name={["customer", "stockId"]}
                rules={[
                  {
                    required: true,
                    message: "Please select a stock name",
                  },
                ]}
              >
                <Select placeholder="Select Stock Name">
                  {stocks.map((stock) => (
                    <Option key={stock.id} value={stock.id}>
                      {stock.stockname}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="order Quantity"
                name={["customer", "orderqty"]}
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
