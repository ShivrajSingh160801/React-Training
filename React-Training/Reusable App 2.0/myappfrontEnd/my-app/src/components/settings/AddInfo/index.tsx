import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row, Typography } from "antd";
import styles from "./index.module.scss";
import { FC, useState } from "react";
import { AddInfoProps } from "./types";
import UserForm from "../Forms/addUser";
import OrgForm from "../Forms/addOrg";
import RoleForm from "../Forms/addRole";

const { Title, Link } = Typography;

const AddInfo: FC<AddInfoProps> = (props) => {
  const { title, addInfo } = props;
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const getDrawerContent = () => {
    if (title === "users") {
      return <UserForm />;
    } else if (title === "organizations") {
      return <OrgForm/>;
    } else {
      return <RoleForm></RoleForm>;
    }
  };

  const GetTitle = () => {
    return (
      <>
        <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span>
      </>
    );
  };

  const ButtonTitle = () => {
    return (
      <>
        <span>{"Add " + title.charAt(0).toUpperCase() + title.slice(1)}</span>
      </>
    );
  };

  return (
    <div className={styles["add-info"]}>
      <Row
        className={styles["add-info__wrapper"]}
        justify="space-between"
        align="middle"
      >
        <Col>
          <Title level={4}>
            <GetTitle />
            {title === "integrations" && (
              <>
                {" "}
                | <Link>View Active Connections (0)</Link>
              </>
            )}
          </Title>
        </Col>
        <Col>
          {addInfo && (
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              onClick={showDrawer}
            >
              {title === "users"
                ? "Add User"
                : title === "organizations"
                ? "Add Organization"
                : "Add Role"}
            </Button>
          )}
        </Col>
      </Row>
      <Drawer
        title={<ButtonTitle />}
        placement="right"
        visible={drawerVisible}
        onClose={onCloseDrawer}
        size="large"
        closable={false}
        extra={
          <div>
            <CloseOutlined
              onClick={onCloseDrawer}
            />
          </div>
        }
      >
        {getDrawerContent()}
      </Drawer>
    </div>
  );
};

export default AddInfo;
