import React, { memo } from 'react';
import { Handle, useReactFlow, useStoreApi, Position } from 'reactflow';
import styles from './flowNode.less';

function FieldList({ id, data }) {
  const { list, title } = data;
  return (
    <div className={styles['list']} id={id}>
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} />
      <div className={styles['title']}>{title}</div>
      {list.map(({ handleId, label, key }) => {
        return (
          <div key={handleId}>
            <div className={styles.row}>
              <span>{key}</span>
              <span className={styles.label} title={label}>
                {label}
              </span>
            </div>

            <Handle
              type="source"
              position={Position.Right}
              style={{ right: 5, visibility: 'hidden' }}
              id={handleId}
            />
          </div>
        );
      })}
    </div>
  );
}

function List({ id, data }) {
  const { list, title } = data;
  return (
    <div className={styles['list']} id={id}>
      <Handle type="target" position={Position.Left} />

      <div className={styles['title']}>{title}</div>
      {list.map(({ label }) => {
        return (
          <div className={styles['row']} key={label}>
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export { FieldList, List };
