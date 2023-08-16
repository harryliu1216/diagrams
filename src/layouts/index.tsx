import { Link, Outlet, useLocation } from 'umi';
import { Menu, Avatar, Input, Space, Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.less';

import Search from '@/components/Search';
import { IconSettings } from '@arco-design/web-react/icon';

const MenuItem = Menu.Item;

export default function LayoutComponent() {
  document.body.setAttribute('arco-theme', 'dark');
  const location = useLocation();

  const selectedKeys = [location.pathname || '/'];

  return (
    <div className={styles['layout']}>
      <div className={styles['header']}>
        <div style={{ flexGrow: 0, fontWeight: 500, fontSize: 26 }}>AeGPT</div>
        <div className={styles.right}>
          <Menu
            mode="horizontal"
            style={{ background: 'transparent', width: 400, height: 58 }}
            selectedKeys={selectedKeys}
          >
            <MenuItem key="/">
              <Link to="/">数据表</Link>
            </MenuItem>
            <MenuItem key="/strategy">
              <Link to="/strategy">策略</Link>
            </MenuItem>
            <MenuItem key="/workflow">
              <Link to="/workflow">工作流</Link>
            </MenuItem>
            <MenuItem key="/package">
              <Link to="/package">打包</Link>
            </MenuItem>
            <MenuItem key="/publish">
              <Link to="/publish">发布</Link>
            </MenuItem>
          </Menu>
          <Search />
          <Space size={'medium'} align="center">
            <Button type="primary">导入</Button>
            <IconSettings fontSize={18} />
            <Avatar size={32}>A</Avatar>
          </Space>
        </div>
      </div>
      <div style={{ position: 'relative', height: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
}
