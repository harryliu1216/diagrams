import { Input, Form, Space } from '@arco-design/web-react';
import styles from './CustomNode.less';
import {
  IconCopy,
  IconDelete,
  IconInfoCircle,
  IconExpand,
  IconEdit,
  IconExclamationCircle
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
    type: string;
    fields: any[];
  };
};

const getFormController = ({ type, attribute }) => {
  switch (type) {
    case 'input':
      return <Input {...attribute} />;
    case 'textarea':
      return <Input.TextArea {...attribute} />;
  }
};

export default function CustomNode({ data }: { data: NodeData }) {
  const { onCopy, onDelete, onShowInfo, onConnect, onExpand } = data;
  const { title, fields } = data.data;
  return (
    <div className={styles['node-wrapper']}>
      <Handle type="target" position={Position.Left} onConnect={onConnect} />
      <div className={styles.node}>
        <div className={styles['node-header']}>
          {title}
          <IconEdit />
        </div>
        <div className={styles['node-form']}>
          {fields && (
            <Form autoComplete="off" layout="vertical">
              {fields.map((item) => {
                return (
                  <FormItem key={item.label} label={item.label}>
                    {getFormController(item)}
                  </FormItem>
                );
              })}
            </Form>
          )}
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
