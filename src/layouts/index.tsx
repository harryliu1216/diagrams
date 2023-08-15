import { Link, Outlet } from 'umi';
import { Menu, Avatar, Input, Space, Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.less';
import { IconSearch, IconUpload } from '@arco-design/web-react/icon';

const MenuItem = Menu.Item;

export default function LayoutComponent() {
  document.body.setAttribute('arco-theme', 'dark');
  const { pathname } = window.location;

  return (
    <div className={styles['layout']}>
      <div className={styles['header']}>
        <div style={{ flexGrow: 0, fontWeight: 500, fontSize: 26 }}>AeGPT</div>
        <div className={styles.right}>
          <Menu
            mode="horizontal"
            style={{ background: 'transparent', width: 400, height: 58 }}
            defaultSelectedKeys={['1']}
          >
            <MenuItem key="1">
              <Link to="/">数据表</Link>
            </MenuItem>
            <MenuItem key="2">
              <Link to="/">策略</Link>
            </MenuItem>
            <MenuItem key="package">
              <Link to="/package">打包</Link>
            </MenuItem>
            <MenuItem key="publish">
              <Link to="/publish">发布</Link>
            </MenuItem>
          </Menu>
          <Input
            prefix={<IconSearch />}
            style={{ width: 550, marginTop: 3 }}
            allowClear
            placeholder="Search"
            size="large"
          />
          <Space size="medium">
            <Button type="primary" icon={<IconUpload />}>
              导入
            </Button>
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
