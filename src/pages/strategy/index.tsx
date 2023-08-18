import { useEffect, useRef, useState } from 'react';
import { Layout, Tree } from '@arco-design/web-react';
import XSpreadsheet, { Cells } from '../../components/react-x-spreadsheet';
import { data } from '../table/initialNodes';
import styles from './index.less';
import { IconFolder } from '@arco-design/web-react/icon';

const Sider = Layout.Sider;
const Content = Layout.Content;

const generateTreeData = (data: any[]) => {
  return [
    {
      title: '默认文件夹',
      key: 'root',
      icon: <IconFolder />,

      children: data.map((item) => {
        return {
          title: item.name,
          key: item.name
        };
      })
    }
  ];
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

  const [selectedKeys, updateSelectedKeys] = useState(
    treeData[0].children[0] ? [treeData[0].children[0].key] : []
  );
  const [sheets, updateSheets] = useState<any[]>([]);
  const [toggleSheet, updateToggleSheet] = useState<boolean>(false);

  useEffect(() => {
    generateSheets(selectedKeys);
  }, []);

  useEffect(() => {
    if (toggleSheet) {
      spreadsheetInstance?.current && spreadsheetInstance?.current.toggleSheet(sheets.length - 1);
      updateToggleSheet(false);
    }
  }, [sheets]);

  const spreadsheetInstance = useRef(null);

  const handleSelect = (keys: string[]) => {
    if (keys[0] == 'root') {
      return;
    }
    let _keys = keys.map((item) => item.split('-')[0]);
    updateSelectedKeys(_keys);
    generateSheets(_keys);
  };

  const generateSheets = (keys) => {
    let cells: Cells = {};
    let cellIndex: { [key: string]: number } = {};
    const sheetIndex = sheets.findIndex((item) => item.name == keys[0]);
    console.log(sheetIndex);
    if (sheetIndex > -1) {
      spreadsheetInstance?.current && spreadsheetInstance?.current.toggleSheet(sheetIndex);
      return;
    } else {
      // spreadsheetInstance?.current.addSheet(keys[0]);
    }
    const tableData = generateTableData(data, keys[0]);
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

    // 不能直接切sheet index。新sheet还没load。在useEffect中切换index。
    updateToggleSheet(true);
    updateSheets([...sheets]);
  };

  return (
    <Layout className={styles['list-view']}>
      <Sider
        className={styles['layout-sider']}
        style={{
          height: 'calc(100vh - 48px)',
          borderRight: '1px solid var(--color-border)',
          padding: 12,
          boxSizing: 'border-box',
          width: 250
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
              width: () => document.documentElement.clientWidth - 250
            }
          }}
          spreadsheetInstance={spreadsheetInstance}
        />
      </Content>
    </Layout>
  );
}
