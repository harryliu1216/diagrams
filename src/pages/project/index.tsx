import { useModel } from 'umi';
import styles from './index.less';
import { Button, Card, Dropdown, Menu, Space } from '@arco-design/web-react';
import Row from '@arco-design/web-react/es/Grid/row';
import Col from '@arco-design/web-react/es/Grid/col';
import { IconArrowDown } from '@arco-design/web-react/icon';

export default function Project() {
  document.body.setAttribute('arco-theme', 'dark');
  const { projects } = useModel('projectModel');
  const { userInfo, runLogin, logout } = useModel('userModel');

  const dropList = (
    <Menu>
      <Menu.Item key="logout" onClick={logout}>
        注销
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className={`container ${styles['header']}`}>
        <div className={styles['nav']}>
          <span style={{ flexGrow: 0, fontWeight: 500, fontSize: 22 }}>AeGPT</span>
          <Dropdown droplist={dropList}>
            {userInfo.nickname}
            <IconArrowDown />
          </Dropdown>
        </div>
      </div>
      <Card className={`container ${styles['content']}`}>
        <h3 style={{ marginBottom: 32 }}>我的项目</h3>
        <Row>
          {projects.list.map((item) => {
            return (
              <Col span={6} style={{ padding: '0 16px' }} key={item.id}>
                <div className={styles['item']}>
                  <div className={styles['info']}>
                    <div className={styles['desc']}>
                      <h3>{item.name}</h3>
                      <span>{item.createAt}</span>
                      <span></span>
                    </div>
                    <img src="https://axure-file.lanhuapp.com/md5__5bc7e012a000eddca76e44395ceafbbe.svg" />
                  </div>

                  <div>
                    <div className={styles['op']}>
                      <Button type="primary" style={{ width: 220, height: 36 }}>
                        进入项目
                      </Button>
                      <Dropdown>
                        <Button style={{ height: 36, float: 'right' }}>更多</Button>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Card>
    </div>
  );
}
