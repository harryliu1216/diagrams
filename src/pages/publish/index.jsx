import { Layout, Timeline, Button, Space } from '@arco-design/web-react';
import {
  IconClockCircle,
  IconCheck,
  IconStop,
  IconExclamationCircleFill
} from '@arco-design/web-react/icon';
import styles from './index.less';

const TimelineItem = Timeline.Item;
const Content = Layout.Content;

export default function PublishPage() {
  return (
    <div>
      <Content>
        <Button style={{ marginBottom: 12 }} type="primary">
          发布新配置
        </Button>
        <Timeline mode={{}} labelPosition="relative">
          <TimelineItem
            label="2020-04-12"
            dot={<IconClockCircle style={{ fontSize: 12, color: '#F53F3F' }} />}
            className={styles['info']}
          >
            <div className={styles['info-title']}>
              <Space>
                七日活动
                <Button size="mini" icon={<IconStop />}>
                  终止
                </Button>
              </Space>
            </div>
            <div className={styles['info-desc']}>
              # 道具表 #商城表 <br />
              七日活动七日活动七日活动七日活动七日活动七日活动
            </div>
          </TimelineItem>
          <TimelineItem label="2020-04-12" dotColor="#00B42A">
            <div className={styles['info-title']}>
              <Space>七日活动</Space>
            </div>
            <div className={styles['info-desc']}>
              # 道具表 #商城表 <br />
              七日活动七日活动七日活动动七日活动
            </div>
          </TimelineItem>
          <TimelineItem label="2020-04-12" dotColor="#00B42A">
            <div className={styles['info-title']}>
              <Space>七日活动</Space>
            </div>
            <div className={styles['info-desc']}>
              # 道具表 #商城表 <br />
              七日活动七日活动七日活动七日
            </div>
          </TimelineItem>
          <TimelineItem label="2020-04-12" dotColor="#00B42A">
            <div className={styles['info-title']}>
              <Space>七日活动</Space>
            </div>
            <div className={styles['info-desc']}>
              # 道具表 #商城表 <br />
              七日活动七日活动七日活动七日活动七日活动七日活动
            </div>
          </TimelineItem>
          <TimelineItem label="2020-05-17" dotColor="#F53F3F">
            七夕活动二发布
            <IconExclamationCircleFill
              style={{
                color: 'F53F3F',
                fontSize: 12,
                marginLeft: 4
              }}
            />
            <div className={styles['info-desc']}>
              # 道具表 #商城表 <br />
              七日活动七日活动七日活动七日活动七日活动七日活动
            </div>
          </TimelineItem>
          <TimelineItem label="2020-06-22">
            Fix 难度多大，通关数低
            <div className={styles['info-desc']}>
              # 道具表 #商城表 <br />
              七日活动七日活动七日活动七日活动七日活动七日活动
            </div>
          </TimelineItem>
          <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
            <div className={styles['info-title']}>
              <Space>
                七日活动
                <Button size="mini" icon={<IconStop />}>
                  终止
                </Button>
              </Space>
            </div>
            <div className={styles['info-desc']}>
              # 道具表 #商城表 <br />
              七日活动七日活动七日活动七日活动七日活动七日活动
            </div>
          </TimelineItem>
        </Timeline>
      </Content>
    </div>
  );
}
