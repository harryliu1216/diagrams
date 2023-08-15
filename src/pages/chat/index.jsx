import { Layout, Button, Table, Radio, Avatar, Input, Mentions } from '@arco-design/web-react';
import { IconSend } from '@arco-design/web-react/icon';
import styles from './index.less';

const Content = Layout.Content;

export default function ChatPage() {
  return (
    <Content style={{ height: 'calc(100vh - 48px)', boxSizing: 'border-box' }}>
      <div className={styles.card}>
        <div className={styles['chat-content']}>
          <div className={styles['chat-record']}>
            <div className={styles['chat-record-row']}>
              <div className={styles['chat-record-name']}>
                <Avatar size={32} style={{ background: 'rgb(var(--primary-6))' }}>
                  GM
                </Avatar>
              </div>
              <div className={styles['chat-record-content']}>
                很抱歉，我无法为你生成或计算 GoJS
                或其他软件的许可证密钥。这些许可证密钥是由软件供应商提供并管理的，只能从官方渠道获取。未经授权使用软件可能会涉及法律问题，我建议你通过正规渠道获取合法的许可证。
              </div>
            </div>
            <div className={styles['chat-record-row'] + ' ' + styles['send']}>
              <div className={styles['chat-record-name']}>
                <Avatar size={32}>A</Avatar>
              </div>
              <div className={styles['chat-record-content']}>
                很抱歉，我无法为你生成或计算 GoJS
                或其他软件的许可证密钥。这些许可证密钥是由软件供应商提供并管理的，只能从官方渠道获取。未经授权使用软件可能会涉及法律问题，我建议你通过正规渠道获取合法的许可证。
              </div>
            </div>
            <div className={styles['chat-record-row']}>
              <div className={styles['chat-record-name']}>
                <Avatar size={32} style={{ background: 'rgb(var(--primary-6))' }}>
                  GM
                </Avatar>
              </div>
              <div className={styles['chat-record-content']}>
                很抱歉，我无法为你生成或计算 GoJS
                或其他软件的许可证密钥。这些许可证密钥是由软件供应商提供并管理的，只能从官方渠道获取。未经授权使用软件可能会涉及法律问题，我建议你通过正规渠道获取合法的许可证。
              </div>
            </div>
          </div>
          <div className={styles['input-wrapper']}>
            <Mentions
              className={styles.input}
              placeholder="发送消息"
              height={48}
              prefix="/"
              options={['查询 ', '创建记录 ', '打包 ']}
            />
            <IconSend className={styles['send-btn']} fontSize={26} />
          </div>
        </div>
      </div>
    </Content>
  );
}
