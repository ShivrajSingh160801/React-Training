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
import { Row, Col, Switch, Space } from "antd";
import styles from "./index.module.scss";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { RolesData, Rolescolumns } from "../../constants/rolesdata";
import SubscriptionCard from "../../components/settings/Subscription";
import { subscriptionData } from "../../constants/subscriptionData";

const SettingsPage = () => {
  const [settingComponent, setSettingComponent] = useState("users");
  const [userData, setUserData] = useState(Userdata);
  // Sidebar item click handler
  const handleSidebar = (event: MenuInfo) => {
    console.log("Event: ", event);
    setSettingComponent(event?.key);
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
      render: (text) => <a>{text}</a>,
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
              {_.status === true ? "Active" : "Inactive"}
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
            <EditOutlined
              style={{
                fontSize: "20px",
                color: "black",
              }}
            />
          </a>
          <a>
            <DeleteOutlined
              style={{
                fontSize: "20px",
                color: "black",
              }}
            />
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
            <DynamicTable data={userData} columns={Usercolumns} />
          )}

          {settingComponent === "organizations" && (
            <DynamicTable data={Orgdata} columns={orgcolumns} />
          )}

          {settingComponent === "roles" && (
            <DynamicTable data={RolesData} columns={Rolescolumns} />
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
      </SettingsLayout>
    </>
  );
};

export default SettingsPage;
