import { Layout, Button, Message } from '@arco-design/web-react';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  useEdgesState,
  useNodesState
} from 'reactflow';
import styles from './index.less';
import CustomNode from './components/CustomNode';
import NodeSider from './components/NodeSider';
import { useLocation, useModel, history } from 'umi';
import queryString from 'query-string';

const Sider = Layout.Sider;

export default function WorkflowEditPage() {
  const reactFlowWrapper = useRef(null);
  const { runSaveWorkflowAsync, runQueryWorkflow, runQueryDetailAsync } = useModel('workflowModel');
  const { project } = useModel('projectModel');
  const location = useLocation();
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);

  const [nodeTypes, setNodeTypes] = useState({
    customNode: CustomNode
  });

  const [originData, updateOriginData] = useState();

  const query = queryString.parse(location.search);
  const { id } = query;

  useEffect(() => {
    if (id) {
      runQueryDetailAsync(id).then((res) => {
        if (res.code == 0) {
          if (res.data) {
            updateOriginData(res.data);
            setEdges(res.data.edges);
            setNodes(res.data.nodes);
          }
        }
      });
    }
  }, [location]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      console.log(event);
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      console.log(reactFlowBounds);

      let nodeData = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof nodeData === 'undefined' || !nodeData) {
        return;
      }

      nodeData = JSON.parse(nodeData);

      const position = {
        x: event.clientX - reactFlowBounds.left - 100,
        y: event.clientY - reactFlowBounds.top - 50
      };

      const newNodeId = 'node-' + new Date().getTime(); //getUniqueNodeId(nodeData, reactFlowInstance.getNodes());
      const newNode = {
        id: newNodeId,
        position,
        type: 'customNode',
        data: {
          onCopy: () => {
            console.log('copy');

            setNodes((nds) => {
              console.log('22');
              const copyNode = { ...newNode };
              copyNode.id = 'node-' + new Date().getTime();
              copyNode.position.x += 100 + 250;
              console.log(nds.concat(copyNode));
              return nds.concat(copyNode);
            });
          },
          onDelete: () => {},
          onShowInfo: () => {},
          onConnect: () => {
            console.log('onConnect');
          },
          data: nodeData
        }
      };

      // setSelectedNode(newNode);
      setNodes((nds) =>
        nds.concat(newNode).map((node) => {
          if (node.id === newNode.id) {
            node.data = {
              ...node.data,
              selected: true
            };
          } else {
            node.data = {
              ...node.data,
              selected: false
            };
          }

          return node;
        })
      );
      setTimeout(() => setDirty(), 0);
    },

    []
  );

  const onConnect = ({ source, target }) => {
    const newEdge = {
      id: 'e1-' + new Date().getTime(),
      source,
      target,
      animated: true,
      markerEnd: {
        type: MarkerType.Arrow
      },
      style: { stroke: '#fff' }
    };
    setEdges((es) => es.concat(newEdge));
  };

  const setDirty = () => {
    console.log('setDirty');
  };

  const handleClick = async () => {
    let { code, data, msg } = await runSaveWorkflowAsync(project.id, 'test', nodes, edges, id);

    if (code == 0) {
      runQueryWorkflow(project.id);
      Message.success(id ? '保存成功' : '新建成功');
      history.replace('/workflow');
    } else {
      Message.error(msg);
    }
  };

  return (
    <Layout style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Sider className={styles.slider}>
        <NodeSider></NodeSider>
        <Button type="primary" className={styles['submit']} onClick={handleClick}>
          保存
        </Button>
      </Sider>
      <Layout>
        <div
          className="reactflow-wrapper"
          ref={reactFlowWrapper}
          style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeDragStop={setDirty}
            onConnect={onConnect}
          >
            <Controls
              style={{
                display: 'flex',
                flexDirection: 'row',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            <Background color="#bbb" gap={32} />
          </ReactFlow>
        </div>
      </Layout>
    </Layout>
  );
}
