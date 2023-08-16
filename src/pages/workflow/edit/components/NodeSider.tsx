import { Layout, Input, Menu } from '@arco-design/web-react';
import styles from './NodeSide.less';
import { IconDragArrow } from '@arco-design/web-react/icon';

const Sider = Layout.Sider;
const InputSearch = Input.Search;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const onDragStart = (event, node) => {
  console.log(node);
  event.dataTransfer.setData('application/reactflow', JSON.stringify(node));
  event.dataTransfer.effectAllowed = 'move';
};

const nodes = [
  {
    label: '工具包',
    key: '0',
    children: [
      {
        key: '0-1',
        label: '生成文件',
        config: {
          type: 'generateFile',
          title: '生成文件',
          fields: [
            {
              label: '脚本',
              key: 'script',
              type: 'textarea'
            },
            {
              label: '文件名称',
              key: 'fileName',
              tips: 'xxxx',
              type: 'input',
              attribute: {
                placeholder: '支持路径 axx/aaa.{xls,json,lua}'
              }
            }
          ]
        }
      }
    ]
  },
  {
    label: '发布',
    key: '1',
    children: [
      {
        key: '1-1',
        label: '下载',
        config: {
          type: 'download',
          title: '下载',
          fields: [
            {
              label: '压缩包名称',
              key: 'fileName',
              tips: 'xxxx',
              type: 'input',
              attribute: {
                placeholder: 'xx.zip'
              }
            }
          ]
        }
      },
      {
        key: '1-2',
        label: 'OpenAPI',
        config: {
          type: 'download',
          title: 'OpenAPI',
          fields: [
            {
              label: 'API 地址',
              key: 'url',
              type: 'input'
            },
            {
              label: 'key',
              key: 'key',
              tips: 'xxxx',
              type: 'input',
              attribute: {
                placeholder: 'API-xxxxxxx'
              }
            }
          ]
        }
      },
      {
        key: '1-3',
        label: '发送邮件',
        config: {
          type: 'download',
          title: '发送邮件',
          fields: [
            {
              label: '邮件地址',
              key: 'email',
              type: 'input'
            },
            {
              label: '邮件内容',
              key: 'content',
              tips: 'xxxx',
              type: 'textarea',
              attribute: {}
            }
          ]
        }
      }
    ]
  }
];

export default () => (
  <>
    <InputSearch allowClear placeholder="搜索节点" style={{ width: '100%', marginBottom: 16 }} />
    <Menu>
      {nodes.map((node, index) => {
        return (
          <SubMenu key={node.key} title={node.label}>
            {node.children.map((child, index) => {
              return (
                <MenuItem key={child.key}>
                  <div draggable onDragStart={(event) => onDragStart(event, child.config)}>
                    <IconDragArrow />
                    {child.label}
                  </div>
                </MenuItem>
              );
            })}
          </SubMenu>
        );
      })}
    </Menu>
  </>
);
