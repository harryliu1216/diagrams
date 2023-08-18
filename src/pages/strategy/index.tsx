import { useEffect, useState } from 'react';
import { Layout, Tree } from '@arco-design/web-react';
import XSpreadsheet, { Cells } from '../../components/react-x-spreadsheet';
import { data } from '../table/initialNodes';
import styles from './index.less';

const Sider = Layout.Sider;
const Content = Layout.Content;

const generateTreeData = (data: any[]) => {
  return data.map((item) => {
    return {
      title: item.name,
      key: item.name,
      children: []
    };
  });
};

const generateTableData = (data: any[], tableName: string) => {
  let table = data.find((item) => item.name === tableName);
  if (!table) {
    return { tableData: [], columns: [] };
  }
  let columns = table.fields.map((item: any) => {
    return {
      key: item.name,
      dataIndex: item.name,
      title: item.name
    };
  });

  let datasource = table.data;

  return { columns, data: datasource };
};

export default function StrategyPage() {
  const treeData = generateTreeData(data);

  const [selectedKeys, updateSelectedKeys] = useState(treeData[0] ? [treeData[0].key] : []);
  const [sheets, updateSheets] = useState<any[]>([]);

  useEffect(() => {
    generateSheets(selectedKeys);
  }, []);

  const handleSelect = (keys: string[]) => {
    updateSelectedKeys(keys.map((item) => item.split('-')[0]));
    generateSheets(keys);
  };

  const generateSheets = (keys) => {
    let cells: Cells = {};
    let cellIndex: { [key: string]: number } = {};

    console.log(keys);

    const isExist = sheets.find((item) => item.name == keys[0]);
    if (isExist) {
      return;
    }
    const tableData = generateTableData(data, selectedKeys[0]);

    // 生成表头
    tableData.columns.forEach((item, index: number) => {
      cells[index] = {
        text: item.title,
        editable: false,
        style: 0 // sheet styles index
      };
      cellIndex[item.key] = index;
    });

    // 生成数据
    let rows: { [key: number]: { cells: Cells } } = {};
    tableData.data.forEach((item, index: number) => {
      let cells: Cells = {};
      for (let key in item) {
        cells[cellIndex[key]] = {
          text: item[key]
        };
      }
      rows[index + 1] = {
        cells
      };
    });

    sheets.push({
      name: keys[0],
      freeze: 'A2',
      styles: [
        {
          font: {
            bold: true
          }
        }
      ],
      rows: {
        len: 0,
        0: {
          cells
        },
        ...rows
      }
    });
    updateSheets([...sheets]);
  };

  console.log(sheets);

  return (
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
      <Content style={{ padding: 0 }}>
        <XSpreadsheet
          data={sheets}
          options={{
            showToolbar: false,
            showContextmenu: false,
            view: {
              height: () => document.documentElement.clientHeight - 48,
              width: () => document.documentElement.clientWidth - 200
            }
          }}
        />
      </Content>
    </Layout>
  );
}
