import {
    MoneyCollectOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Button, Layout, Menu } from 'antd';
  import styles from './index.module.css';
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
        icon: <UsergroupAddOutlined />,
        label: 'Users',
      },
      {
        key: 'organizations',
        icon: <UsergroupAddOutlined />,
        label: 'Organization',
        // children: [
        //   {
        //     key: 'sidebar-items-2',
        //     icon: <UsergroupAddOutlined />,
        //     label: 'Organization',
        //   },
        // ],
      },
      {
        key: 'roles',
        icon: <UsergroupAddOutlined />,
        label: 'Roles',
      },
      {
        key: 'integrations',
        icon: <UsergroupAddOutlined />,
        label: 'Integrations',
      },
      {
        key: 'preference',
        icon: <SettingOutlined />,
        label: 'Preference',
      },
      {
        key: 'subscription',
        icon: <MoneyCollectOutlined />,
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
  