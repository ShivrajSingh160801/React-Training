import React from 'react';
import { Card, Image, Button } from 'antd';
import styles from './index.module.scss';

export default function IntegrationCard(props: any) {
  return (
    <Card bordered={false} className={styles.integration__card}>
      <Image preview={false} src={props?.logo} />
      <p className={styles.integration__card__company}>Company:</p>
      <p style={{ paddingBottom: '10px' }}>{props?.title}</p>
      <Button type="primary" ghost={props?.ghost} style={{backgroundColor : `${props?.backGroundColor}`}}>
        {props?.buttonText}
      </Button>
    </Card>
  );
}