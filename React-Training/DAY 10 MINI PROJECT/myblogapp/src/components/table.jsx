// App.js
import React, { useState, useEffect } from "react";
import { Button, Modal, Space, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { GetPostData, DeletePost } from "../redux/action/postAction";
import { useDispatch, useSelector } from "react-redux";
import MyUpdateForm from "./UpdateForm"; // Import the MyUpdateForm component

const App = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state?.get_data?.data);

  const columns = [
    {
      title: "Posted By",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
      render: (category) => (
        <Tag color={category.length > 5 ? "geekblue" : "green"}>
          {category.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => {
              console.log("Delete clicked for record:", record);
              handleDelete(record?.id);
            }}
          >
            Delete
          </Button>
          <Button
            type="default"
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
          >
            View
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(GetPostData());
  }, []);

  const handleView = (record) => {
    setSelectedRecord(record);
    setIsViewModalOpen(true);
  };

  const handleEdit = (record) => {
    console.log('EDIT CLICKED record: ', record);
    setSelectedRecord(record);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(DeletePost(id)).then(() => {
      dispatch(GetPostData())
    });
  };

  const handleViewModalCancel = () => {
    setIsViewModalOpen(false);
  };

  const handleEditModalCancel = () => {
    setIsEditModalOpen(false);
    setSelectedRecord(null); // Reset selectedRecord to clear the form fields
  };

  return (
    <div>
      <Table
        columns={columns}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 5,
        }}
        dataSource={data}
      />
      {selectedRecord && (
        <Modal
          title="View Post"
          open={isViewModalOpen}
          onCancel={handleViewModalCancel}
          footer={[
            <Button key="cancel" onClick={handleViewModalCancel}>
              Cancel
            </Button>,
          ]}
        >
          {Object.entries(selectedRecord).map(([key, value]) => (
            <p key={key}>
              <strong>{key}: </strong> {value}
            </p>
          ))}
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal
          title="Edit Post"
          open={isEditModalOpen}
          onCancel={handleEditModalCancel}
          footer={[
            <Button key="cancel" onClick={handleEditModalCancel}>
              Cancel
            </Button>,
          ]}
        >
          <MyUpdateForm record={selectedRecord} />
        </Modal>
      )}
    </div>
  );
};

export default App;
