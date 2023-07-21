import {
    MoneyCollectOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
  } from '@ant-design/icons';
  import UserImage from '../../../assets/images/UsersLogo.svg'
  import OrgImage from '../../../assets/images/OrgPage.svg'
  import RolesImage from '../../../assets/images/Rolespage.svg'
  import PreferenceImage from '../../../assets/images/PreferenceP.svg'
  import IntegrationImage from '../../../assets/images/IntegrationsPage.svg'
  import SubscriptionImage from '../../../assets/images/Subscription.svg'

  import type { MenuProps } from 'antd';
  import { Button, Layout, Menu } from 'antd';
  import styles from './index.module.scss';
  import { SidebarProps } from './types';
  import './index.css';
  
  // Creating a sidebar for the settings page
  const Sidebar = (props: SidebarProps) => {
    // Inits
    const { Sider } = Layout;
  
    const { handleSidebar } = props;
  
    // Dummy menu items
    const items2: MenuProps['items'] = [
      {
        key: 'users',
        icon:<img src={UserImage} alt="Users" className={styles.sidebar__icon} />,
        label: 'Users',
      },
      {
        key: 'organizations',
        icon:<img src={OrgImage} alt="Users" className={styles.sidebar__icon} />,
        label: 'Organization',
      },
      {
        key: 'roles',
        icon: <img src={RolesImage} alt="Users" className={styles.sidebar__icon} />,
        label: 'Roles',
      },
      {
        key: 'integrations',
        icon:<img src={IntegrationImage} alt="Users" className={styles.sidebar__icon} />,
        label: 'Integrations',
      },
      {
        key: 'preference',
        icon: <img src={PreferenceImage} alt="Users" className={styles.sidebar__icon} />,
        label: 'Preference',
      },
      {
        key: 'subscription',
        icon:<img src={SubscriptionImage} alt="Users" className={styles.sidebar__icon} />,
        label: 'Subscription',
      },
    ];
  
    // JSX
    return ( <Sider
        style={{
          background: '#fff',
          maxHeight: '100%',
          height: '100%',
        
        }}
        className={styles.sidebar}
      >
        <div className={styles.sidebar__wrapper}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['users']}
            // defaultOpenKeys={['sub1']}
            style={{ borderRight: 0, background: '#fff' }}
            items={items2}
            onClick={handleSidebar}
          />
          <div className={styles.sidebar__support}>
            <Button
              type="primary"
              ghost={true}
              className={styles['sidebar__support--button']}
            >
              Get Support
            </Button>
          </div>
        </div>
      </Sider>
    );
  };
  
  export default Sidebar;
  