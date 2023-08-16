import { Layout, Input, Collapse, Divider, Menu } from '@arco-design/web-react';
import { useCallback, useContext, useRef, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  useEdgesState,
  useNodesState
} from 'reactflow';
import styles from './index.less';
import CustomNode from './components/CustomNode';
import { IconDragArrow } from '@arco-design/web-react/icon';
import NodeSider from './components/NodeSider';

const Sider = Layout.Sider;
const InputSearch = Input.Search;
const CollapseItem = Collapse.Item;

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default function WorkflowEditPage() {
  const reactFlowWrapper = useRef(null);

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);

  const [nodeTypes, setNodeTypes] = useState({
    customNode: CustomNode
  });

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

  return (
    <Layout style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Sider className={styles.slider}>
        <NodeSider></NodeSider>
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
