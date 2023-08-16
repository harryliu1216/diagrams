import { Layout, Button, Table, Link, Divider, Card, Space, Grid } from '@arco-design/web-react';
import { IconPlayCircle } from '@arco-design/web-react/icon';
import { Link as UmiLink } from 'umi';
import styles from './index.less';

const Content = Layout.Content;
const Row = Grid.Row;
const Col = Grid.Col;

export default function WorkflowPage() {
  return (
    <Content>
      <div className="table-filter">
        <Button type="primary">
          <UmiLink to="/workflow/edit">新增工作流</UmiLink>
        </Button>
      </div>

      <Row gutter={24}>
        <Col span={6}>
          <Card
            className="card-custom-hover-style"
            title="工作流1"
            hoverable
            extra={
              <Space>
                <Link>编辑</Link>
                <Link status="error">删除</Link>
              </Space>
            }
          >
            自定义节点1 <br /> 自定义节点1
            <Divider
              style={{
                borderBottomStyle: 'dashed'
              }}
            />
            {/* <Row justify="space-between" align="center">
              <Col span={8}>
                <IconPlayCircle fontSize={24} />
              </Col>
              <Col span={8} style={{ textAlign: 'right' }}>
                <Link type="primary">执行历史</Link>
              </Col>
            </Row> */}
            <div className="flex justify-between">
              <IconPlayCircle fontSize={24} />
              <Link type="primary">执行历史</Link>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card-custom-hover-style"
            title="工作流2"
            hoverable
            extra={
              <Space>
                <Link>编辑</Link>
                <Link status="error">删除</Link>
              </Space>
            }
          >
            自定义节点1 <br /> 自定义节点1
            <Divider
              style={{
                borderBottomStyle: 'dashed'
              }}
            />
            <div className="flex justify-between">
              <IconPlayCircle fontSize={24} />
              <Link type="primary">执行历史</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Content>
  );
}
