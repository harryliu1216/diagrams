import { Link, Outlet } from 'umi';
import { Menu, Radio } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";
import styles from './index.less';


const MenuItem = Menu.Item

export default function LayoutComponent() {
  document.body.setAttribute('arco-theme', 'dark');
  return (
    <div className={styles['layout']}>
      <div className={styles['header']}>
        <div style={{ flexGrow: 0, fontWeight: 500, fontSize: 26 }}>AeGPT</div>
        <Menu mode='horizontal' style={{ background: 'transparent', width: 400, height: 58 }} defaultSelectedKeys={['1']}>
          <MenuItem key='1'><Link to='/'>数据表</Link></MenuItem>
          <MenuItem key='2'><Link to='/'>策略</Link></MenuItem>
          <MenuItem key='3'><Link to='/'>发布</Link></MenuItem>
        </Menu>

      </div>
      <div style={{ position: 'relative', height: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
}
