import { Layout, Button, Table, Link, Divider, Card, Space, Grid, Modal } from '@arco-design/web-react';
import { IconPlayCircle } from '@arco-design/web-react/icon';
import { Link as UmiLink, useModel, history } from 'umi';
import styles from './index.less';

const Content = Layout.Content;
const Row = Grid.Row;
const Col = Grid.Col;


export default function WorkflowPage() {
  const { workflows = [], runDeleteWorkflow } = useModel('workflowModel')
  const handleEdit = (id) => {
    history.push({ pathname: `/workflow/edit?id=${id}` })
  }
  const handleDelete = (id) => {
    Modal.confirm({
      title: '确认删除',
      content: ' 确认要删除该项目吗',
      onOk: () => {
        runDeleteWorkflow(id)
      }
    })

  }
  const handleExcute = () => { }
  const handleQueryExcute = () => { }

  return (
    <Content className={styles['list-container']}>
      <div className="table-filter">
        <Button type="primary">
          <UmiLink to="/workflow/edit">新增工作流</UmiLink>
        </Button>
      </div>

      <Row gutter={24} className={`scroll ${styles['list']}`}>
        {
          workflows.list.map(item => {
            return <Col xl={6} lg={8} xs={12} key={item.id}>
              <Card
                className={styles['card']}
                title={item.name}
                hoverable
                extra={
                  <Space>
                    <Link onClick={handleEdit.bind(this, item.id)}>编辑</Link>
                    <Link status="error" onClick={handleDelete.bind(this, item.id)}>删除</Link>
                  </Space>
                }
              >
                自定义节点1
                <br />
                自定义节点1
                <Divider
                  style={{
                    borderBottomStyle: 'dashed',
                    margin: '16px 0'
                  }}
                />
                <div className="flex justify-between">
                  <IconPlayCircle fontSize={24} onClick={handleExcute} />
                  <Link type="primary" onClick={handleQueryExcute}>执行历史</Link>
                </div>
              </Card>
            </Col>
          })
        }
      </Row>
    </Content>
  );
}
