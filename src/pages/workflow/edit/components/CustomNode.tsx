import { Input, Form, Space } from '@arco-design/web-react';
import styles from './index.less';
import {
  IconCopy,
  IconDelete,
  IconInfoCircle,
  IconExpand,
  IconEdit
} from '@arco-design/web-react/icon';
import { Handle, Position } from 'reactflow';

const FormItem = Form.Item;

export type NodeData = {
  onCopy: () => void;
  onDelete: () => void;
  onShowInfo: () => void;
  onConnect: () => {};
  onExpand: () => {};
  data: {
    title: string;
  };
};

export default function CustomNode({ data }: { data: NodeData }) {
  const { onCopy, onDelete, onShowInfo, onConnect, onExpand } = data;
  const { title } = data.data;
  return (
    <div className={styles['node-wrapper']}>
      <Handle type="target" position={Position.Left} onConnect={onConnect} />
      <div className={styles.node}>
        <div className={styles['node-header']}>
          {title}
          <IconEdit />
        </div>
        <div className={styles['node-form']}>
          <Form autoComplete="off" layout="vertical">
            <FormItem label="文件名称">
              <Input placeholder="输入文件名称" />
            </FormItem>
          </Form>
        </div>
      </div>
      <Handle type="source" position={Position.Right} />
      <div className={styles['node-tooltip']}>
        <Space direction="vertical">
          <IconExpand onClick={onExpand} />
          <IconCopy
            className={styles['icon']}
            onClick={() => {
              onCopy();
            }}
          />
          <IconDelete className={styles['icon']} onClick={onDelete} />
          <IconInfoCircle className={styles['icon']} onClick={onShowInfo} />
        </Space>
      </div>
    </div>
  );
}
