import { SettingsLayout } from "../../layout/index";
import { MenuInfo } from "rc-menu/lib/interface";
import { Table } from "antd";
import React, { ChangeEvent, FC, useState } from "react";
import DynamicTable from "../../components/settings/dynamicTable";
import AddInfo from "../../components/settings/AddInfo";
import { IntegrationCardData } from "../../constants/integrationcarddata/index";
import SearchAndFilter from "../../components/settings/SearchAndFilter";
import IntegrationCard from "../../components/settings/IntegrationCards/index";
import PreferenceCard from "../../components/settings/PreferenceData";
import { PreferencesData } from "../../constants/preferenceData";
import { Row, Col } from "antd";
import styles from "./index.module.scss";

const SettingsPage = () => {
  const [settingComponent, setSettingComponent] = useState("users");
  const [searchValue, setSearchValue] = useState("");
  // Sidebar item click handler
  const handleSidebar = (event: MenuInfo) => {
    console.log("Event: ", event);
    setSettingComponent(event?.key);
  };

  // If add functionality required for the component or not
  const getAdd = () => {
    if (
      settingComponent === "users" ||
      settingComponent === "organization" ||
      settingComponent === "roles"
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <SettingsLayout handleSidebar={handleSidebar}>
      <div className={styles.settings}>
        <AddInfo title={settingComponent} addInfo={getAdd()} />
        {settingComponent === "users" && <DynamicTable />}
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
         </div>
      </SettingsLayout>
    </>
  );
};

export default SettingsPage;
