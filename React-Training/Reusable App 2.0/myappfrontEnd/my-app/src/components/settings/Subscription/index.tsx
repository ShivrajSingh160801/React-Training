import { Button, Card, Col, Image, Row } from "antd";
import styles from "./index.module.scss";
import Title from "antd/es/typography/Title";

export default function SubscriptionCard(props: any) {
  const { subscription } = props;
  console.log("subscription: ", subscription);
  return (
    <div className={styles.subscriptions}>
      <Card
        title={subscription?.title}
        className={styles.subscription__card}
        extra={
          <Button shape="round" size={"small"} type="primary" ghost>
            Manage Subscription
          </Button>
        }
      >
        <Row>
          <Col md={12}>
            <Title
              style={{
                marginTop: "0px",
              }}
              level={5}
            >
              {subscription?.currentPlan}
            </Title>
            <div className={styles.subscription__logoLabelRow}>
              <Image preview={false} src={subscription?.logo} />
              <Title className={styles.subscription__label} level={5}>
                {subscription?.label}
              </Title>
            </div>
          </Col>
          <Col md={12}>
            <Title
              style={{
                marginTop: "0px",
              }}
              level={5}
            >
              {subscription?.pricing}
            </Title>
            <Title level={5}>{subscription?.price}</Title>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
