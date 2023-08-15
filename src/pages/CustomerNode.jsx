import { Handle, Position } from 'reactflow';
import styles from './index.less'

function FieldList({ id, data }) {
  const { list, title } = data
  return (
    <div className={styles['list']} id={id}>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
      />
      <div className={styles['title']}>{title}</div>
      {list.map(({ handleId, label }) => {
        return <div className={styles['row']} key={handleId} >
          <span>{label}</span>
          <Handle type="source" position={Position.Right} style={{ right: 5, visibility: 'hidden' }} id={handleId} />
        </div>
      })}

    </div>
  );
}

function List({ id, data }) {
  const { list, title } = data
  return (
    <div className={styles['list']} id={id}>
      <Handle type="target" position={Position.Left} />

      <div className={styles['title']}>{title}</div>
      {list.map(({ label }) => {
        return <div className={styles['row']} key={label} >
          <span>{label}</span>
        </div>
      })}

    </div>
  );
}

export {
  FieldList, List
} 
