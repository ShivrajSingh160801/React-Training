import { Card, Switch } from 'antd';
import styles from './index.module.scss';
import React from 'react';

export default function PreferenceCard(props: any) {
  const { preference } = props;
  return (
    <Card
      title={preference?.title}
      className={styles.preferences__card}
      extra={<Switch defaultChecked={preference?.status} />}
    >
      <div className={styles.preferences__preference}>
        {preference?.preferences?.map((item: any, index: number) => (
          <div className={styles.preferences__card__button} key={index}>
            <Switch defaultChecked={item?.status} />
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}