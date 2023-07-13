import HeaderComponent from '../../components/settings/header';
import Sidebar from '../../components/settings/sidebar';
import { Layout } from 'antd';
import styles from './index.module.scss';
// General layout for settings page
const Settings = (props: any) => {
  // Inits
  const { children, handleSidebar }: any = props;
  // JSX
  return (
    <>
      <HeaderComponent />
      <Layout hasSider={true} className={styles.layout}>
        <div className={styles.layout__sidebar}>
          <Sidebar handleSidebar={handleSidebar} />
        </div>
        <div className={styles.layout__body}>{children}</div>
      </Layout>
    </>
  );
};

export default Settings;
