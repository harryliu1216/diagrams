import { useEffect, useRef, useState } from 'react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.less';
import ReactFlow, { Background, Controls, MiniMap, useEdgesState, useNodesState } from 'reactflow';
import { nodes as initialNodes, edges as initialEdges, data } from './initialNodes';
import { FieldList, List } from './components/FlowNode';
import { Tree, Radio, Layout, Table, Button } from '@arco-design/web-react';
import 'reactflow/dist/style.css';

import { useModel } from 'umi';

const RadioGroup = Radio.Group;
const Sider = Layout.Sider;
const Content = Layout.Content;

const minimapStyle = {
  height: 120
};

const nodeTypes = {
  FieldList: FieldList,
  List: List
};

const generateTreeData = (data: any[]) => {
  return data.map((item) => {
    return {
      title: item.name,
      key: item.name,
      children: item.fields.map((field: any) => ({
        title: field.name,
        key: item.name + '-' + field.name
      }))
    };
  });
};

const generateTableData = (data: any[], tableName: string) => {
  let table = data.find((item) => item.name === tableName);

  if (!table) {
    return [];
  }

  return table.fields;
};

const columns = [
  {
    title: '字段名称',
    dataIndex: 'name'
  },
  {
    title: '字段描述',
    dataIndex: 'label'
  },
  {
    title: '字段类型',
    dataIndex: 'type'
  },
  {
    title: '字段长度',
    dataIndex: 'length',
    render: (value: number) => {
      return value !== undefined ? value : '不限';
    }
  },
  {
    title: '是否为空',
    dataIndex: 'isNull',
    render: (value: boolean) => {
      return value !== undefined ? value : '否';
    }
  }
];

export default function TablePage() {
  const treeData = generateTreeData(data);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [selectedKeys, updateSelectedKeys] = useState(treeData[0] ? [treeData[0].key] : []);
  const [mode, updateMode] = useState('view');

  const handleSelect = (keys: string[]) => {
    updateSelectedKeys(keys.map((item) => item.split('-')[0]));
  };

  const tableData = generateTableData(data, selectedKeys[0]);

  console.log(nodes, edges);

  return (
    <>
      <div className={styles['bar']}>
        <RadioGroup type="button" name="lang" defaultValue="view" onChange={updateMode}>
          <Radio value="view" style={{ width: 100, textAlign: 'center' }}>
            视图模式
          </Radio>
          <Radio value="list" style={{ width: 100, textAlign: 'center' }}>
            列表模式
          </Radio>
        </RadioGroup>
      </div>
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        {mode == 'view' && (
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
          >
            <MiniMap style={minimapStyle} zoomable pannable />
            <Controls />
            <Background color="#bbb" gap={32} />
          </ReactFlow>
        )}
        {mode == 'list' && (
          <div>
            <Layout className={styles['list-view']}>
              <Sider
                style={{
                  height: 'calc(100vh - 48px)',
                  borderRight: '1px solid var(--color-border)',
                  padding: 12,
                  boxSizing: 'border-box'
                }}
              >
                <Tree
                  treeData={generateTreeData(data)}
                  showLine={true}
                  onSelect={handleSelect}
                  selectedKeys={selectedKeys}
                />
              </Sider>
              <Content>
                <Table columns={columns} data={tableData} rowKey="id" />
              </Content>
            </Layout>
          </div>
        )}
      </div>
    </>
  );
}
