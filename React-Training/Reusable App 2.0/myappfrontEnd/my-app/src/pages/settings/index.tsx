import { SettingsLayout } from "../../layout/index";
import { MenuInfo } from "rc-menu/lib/interface";
import { DataType, Userdata } from "../../constants/userData";
import { Orgdata, orgcolumns } from "../../constants/organizationData";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import DynamicTable from "../../components/settings/dynamicTable";
import AddInfo from "../../components/settings/AddInfo";
import { IntegrationCardData } from "../../constants/integrationcarddata/index";
import IntegrationCard from "../../components/settings/IntegrationCards/index";
import PreferenceCard from "../../components/settings/PreferenceData";
import { PreferencesData } from "../../constants/preferenceData";
import { Row, Col, Switch, Space, Button, Drawer, Image, Modal } from "antd";
import styles from "./index.module.scss";
import { ColumnsType } from "antd/es/table";

import { RolesDataType } from "../../constants/rolesdata";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { RolesData, Rolescolumns } from "../../constants/rolesdata";
import EditImage from "../../assets/images/EditLogo.svg";
import DeleteLogo from "../../assets/images/DeleteLogo.svg";
import ModalDeleteLogo from "../../assets/images/DeleteModalImage.svg";
import SubscriptionCard from "../../components/settings/Subscription";
import { subscriptionData } from "../../constants/subscriptionData";
import AntTable from "../../constants/PermissionTable";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

const SettingsPage = () => {
  const [filteredData, setFilterData] = useState(Userdata);
  const [data, setData] = useState(filteredData);
  const [settingComponent, setSettingComponent] = useState("users");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [userData, setUserData] = useState(Userdata);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Sidebar item click handler
  const handleSidebar = (event: MenuInfo) => {
    console.log("Event: ", event);
    setSettingComponent(event?.key);
  };
  const [searchValue, setSearchValue] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // For perform the search operation
  const performSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const valueRegex = new RegExp(value, "ig");
    setSearchValue(value);
    const searchedRecords = Userdata.filter((singleRecord: any) =>
      valueRegex.test(singleRecord.name)
    );
    setFilterData(searchedRecords);
    setData(searchedRecords);
  };

  const showPermissionDetails = () => {
    setDrawerVisible(true);
  };

  // If add functionality required for the component or not
  const getAdd = () => {
    if (
      settingComponent === "users" ||
      settingComponent === "organizations" ||
      settingComponent === "roles"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const Usercolumns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => {
        return (
          <>
            <Switch
              onChange={(e) =>
                setUserData((prev) =>
                  prev.map((d, i: number) => {
                    if (i === _.key) {
                      return {
                        ..._,
                        status: e,
                      };
                    }
                    return d;
                  })
                )
              }
            />
            <span style={{ marginLeft: 8 }}>
              {_.status === true ? "Enable" : "Disable"}
            </span>
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <Image src={EditImage} preview={false}></Image>
          </a>
          <a>
            <Image src={DeleteLogo} preview={false} onClick={showModal}></Image>
          </a>
        </Space>
      ),
    },
  ];

  const Rolescolumns: ColumnsType<RolesDataType> = [
    {
      title: "Role Name",
      dataIndex: "roleName",
      key: "roleName",
      sorter: (a, b) => a.roleName.localeCompare(b.roleName),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      key: "status",
      render: (_: any, record: any) => (
        <>
          {record.status === "Active" ? (
            <Button
              type="primary"
              icon={<CheckOutlined />}
              style={{
                backgroundColor: "white",
                color: "green",
                boxShadow: "none",
                paddingLeft:"0px"
              }}
            >
              Active
            </Button>
          ) : (
            <Button
              type="primary"
              icon={<CloseOutlined />}
              style={{
                backgroundColor: "white",
                color: "red",
                boxShadow: "none",
                paddingLeft:"0px"
              }}
            >
              Inactive
            </Button>
          )}
        </>
      ),
    },
    {
      title: "Permissions",
      key: "permissions",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            icon={<MenuOutlined />}
            style={{
              backgroundColor: "white",
              color: "blue",
              boxShadow: "none",
              paddingLeft:"0px"
            }}
            onClick={showPermissionDetails}
          >
            <span
              style={{
                textDecoration: "underline",
              }}
            >
              Permission Details
            </span>
          </Button>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <Image src={EditImage} preview={false}></Image>
          </a>
          <a>
            <Image src={DeleteLogo} preview={false}></Image>
          </a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    console.log("userData: ", userData);
  }, [userData]);
  return (
    <>
      <SettingsLayout handleSidebar={handleSidebar}>
        <div className={styles.settings}>
          <AddInfo title={settingComponent} addInfo={getAdd()} />
          {settingComponent === "users" && (
            <DynamicTable
              data={userData}
              columns={Usercolumns}
              performSearchHandler={performSearchHandler}
              searchValue={searchValue}
            />
          )}

          {settingComponent === "organizations" && (
            <DynamicTable
              data={Orgdata}
              columns={orgcolumns}
              performSearchHandler={performSearchHandler}
              searchValue={searchValue}
            />
          )}

          {settingComponent === "roles" && (
            <DynamicTable
              data={RolesData}
              columns={Rolescolumns}
              performSearchHandler={performSearchHandler}
              searchValue={searchValue}
            />
          )}

          {settingComponent === "integrations" && (
            <div className={styles.integrations__container}>
              <Row gutter={16}>
                {IntegrationCardData?.map((card, index) => {
                  return (
                    <Col
                      key={index}
                      className="gutter-row"
                      xl={6}
                      lg={6}
                      md={12}
                      sm={12}
                      xs={24}
                    >
                      <IntegrationCard
                        title={card?.title}
                        buttonText={card?.buttonText}
                        logo={card?.logo}
                        ghost={card?.ghost}
                        backGroundColor = {card?.backGroundColor}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}

          {settingComponent === "preference" && (
            <div className={styles.integrations__container}>
              {PreferencesData?.map((preference, index) => (
                <React.Fragment key={index}>
                  <PreferenceCard preference={preference} />
                </React.Fragment>
              ))}
            </div>
          )}

          {settingComponent === "subscription" && (
            <div>
              {subscriptionData?.map((subscription, index) => (
                <div key={index}>
                  <SubscriptionCard subscription={subscription} />
                </div>
              ))}
            </div>
          )}
        </div>
        <Drawer
          title="Permission Details"
          size="large"
          closable={false}
          extra={
            <div>
              <CloseOutlined onClick={() => setDrawerVisible(false)} />
            </div>
          }
          visible={drawerVisible}
        >
          <AntTable></AntTable>
        </Drawer>
        <Modal
      centered
      title={
        <Row justify="center" gutter={[0, 25]} style={{ marginTop: "25px" }}>
          <Col md={24}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={ModalDeleteLogo}
                width={51}
                height={56}
                preview={false}
              />
            </div>
          </Col>
          <Col md={24}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Paragraph style={{
                fontSize: "26px",
                marginBottom: "0px"
              }}>Are you sure you want to Delete?</Paragraph>
            </div>
          </Col>
          <Col></Col>
        </Row>
      }
      open={isModalOpen} // Use "visible" prop instead of "open"
      footer={null} // Remove the default footer (cancel and ok buttons)
      onCancel={handleCancel}
    >
      <Row justify="center" gutter={[15, 0]}  style={{ marginTop: "25px" }}>
      <Col>
          <Button type="primary" danger onClick={handleOk}> {/* Custom primary danger button */}
            Delete
          </Button>
        </Col>
        <Col>
          <Button onClick={handleCancel}>Cancel</Button> {/* Secondary button */}
        </Col>
      </Row>
    </Modal>
      </SettingsLayout>
    </>
  );
};

export default SettingsPage;
