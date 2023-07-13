import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import styles from "./index.module.scss";
import { FC } from "react";
import { AddInfoProps } from "./types";

const { Title, Link } = Typography;

// For do something to table section
const AddInfo: FC<AddInfoProps> = (props) => {
  // Inits
  const { title, addInfo } = props;

  // Get capitalize title
  const GetTitle = () => {
    return <>{title.charAt(0).toUpperCase() + title.slice(1)}</>;
  };

  // JSX
  return (
    <div className={styles["add-info"]}>
      <Row
        className={styles["add-info__wrapper"]}
        justify={"space-between"}
        align={"middle"}
      >
        <Col>
          <Title level={4}>
            <GetTitle />{" "}
            {title === "integrations" && (
              <>
                | <Link>View Active Connections (0)</Link>
              </>
            )}
          </Title>
        </Col>
        <Col>
          {addInfo && (
            <Button type="primary" size="large" icon={<PlusOutlined />}>
              Add User
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AddInfo;
