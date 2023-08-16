import { Layout, Button, Table, Radio, Tabs } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;

const Content = Layout.Content;

export default function PackagePage() {
  const columns = [
    {
      title: '配置名称',
      dataIndex: 'name'
    },
    {
      title: '类型',
      dataIndex: 'salary'
    },
    {
      title: '说明',
      dataIndex: 'address'
    },
    {
      title: '更新日期',
      dataIndex: 'email'
    }
  ];
  const data = [
    {
      key: '1',
      name: '生成ZIP',
      salary: 23000,
      address: '32 Park Road, London',
      email: '2023-12-01'
    },
    {
      key: '2',
      name: '生成json',
      salary: 25000,
      address: '35 Park Road, London',
      email: '2023-12-01 12:09:12'
    },
    {
      key: '3',
      name: '生成XML',
      salary: 22000,
      address: '31 Park Road, London',
      email: '2023-12-01 12:09:12'
    },
    {
      key: '4',
      name: '生成文件',
      salary: 17000,
      address: '42 Park Road, London',
      email: '2023-12-01 12:09:12'
    },
    {
      key: '5',
      name: '生成文件',
      salary: 27000,
      address: '62 Park Road, London',
      email: '2023-12-01 12:09:12'
    }
  ];

  return (
    <div>
      <Content>
        <Tabs defaultActiveTab="1">
          <TabPane key="1" title="记录">
            <Table columns={columns} data={data} />
          </TabPane>
          <TabPane key="2" title="配置">
            <div className="table-filter">
              <Button type="primary">新增配置</Button>
            </div>
            <Table columns={columns} data={data} />
          </TabPane>
        </Tabs>
      </Content>
    </div>
  );
}
