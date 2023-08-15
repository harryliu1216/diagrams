import { Layout, Timeline, Button } from '@arco-design/web-react';
import { IconClockCircle, IconCheck, IconExclamationCircleFill } from '@arco-design/web-react/icon';
const TimelineItem = Timeline.Item;

const Content = Layout.Content;

export default function PublishPage() {
  return (
    <div>
      <Content>
        <Button style={{ marginBottom: 12 }}>发布新配置</Button>
        <Timeline>
          <TimelineItem
            label="2020-04-12"
            dot={<IconClockCircle style={{ fontSize: 12, color: '#F53F3F' }} />}
          >
            七日活动
          </TimelineItem>
          <TimelineItem label="2020-04-12" dotColor="#00B42A">
            七日活动
          </TimelineItem>
          <TimelineItem label="2020-04-12" dotColor="#00B42A">
            七日活动
          </TimelineItem>
          <TimelineItem label="2020-04-12" dotColor="#00B42A">
            七日活动
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
          </TimelineItem>
          <TimelineItem label="2020-06-22">Fix 难度多大，通关数低</TimelineItem>
          <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
            初始化配置
          </TimelineItem>
        </Timeline>
      </Content>
    </div>
  );
}
