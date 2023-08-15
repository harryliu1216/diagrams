import { useEffect, useState } from 'react'
import { jsPlumb } from 'jsplumb'
import styles from './index.less'
import { Card, Table, TableColumnProps } from '@arco-design/web-react';

const DocsPage = () => {


  useEffect(() => {
    let plumbIns = jsPlumb.getInstance()

    let defaultConfig = {
      // 对应上述基本概念
      anchor: 'AutoDefault',
      connector: ['StateMachine'],
      endpoint: 'Blank',
      // 添加样式
      paintStyle: { stroke: '#909399', strokeWidth: 2 }, // connector
      // endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 } // endpoint
      // 添加 overlay，如箭头
      overlays: [['Arrow', { width: 8, length: 8, location: 1 }]] // overlay
    }


    plumbIns.ready(function () {
      plumbIns.draggable('widget3')
      let anEndpoint = plumbIns.addEndpoint('7')
      setInterval(() => {
        console.log('..')
        jsPlumb.repaintEverything();
      }, 1000)


      let relations = [
        [anEndpoint, 'widget3'],
      ]

      for (let item of relations) {
        plumbIns.connect({
          source: item[0],
          target: item[1]
        }, defaultConfig)
      }
    })
  })

  const columns: TableColumnProps[] = [
    {
      title: 'FieldName',
      dataIndex: 'name',
      render: (value, others, index) => {
        return <div id={value}>
          {value}
        </div>
      }
    },
  ];
  const columns2: TableColumnProps[] = [
    {
      title: 'Info',
      dataIndex: 'data',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'name',
    },
    {
      key: '2',
      name: 'gender',
    },
    {
      key: '3',
      name: 'age',
    },
    {
      key: '4',
      name: 'class',
    },
    {
      key: '5',
      name: 'score',
    },
  ];

  const data2 = [
    {
      key: '1',
      data: 'Jane Doe',
    },
    {
      key: '2',
      data: 'Alisa Ross',
    },
    {
      key: '3',
      data: 'Kevin Sandra',
    },
    {
      key: '4',
      data: 'Ed Hellen',
    },
    {
      key: '5',
      data: 'William Smith',
    },
  ];


  return (
    <div id="wrapper" className={styles["wrapper"]}>
      {/* <Card style={{ width: 300, top: 150 }} className={styles.widget} id='widget1'>
        <Table columns={columns} data={data} />
      </Card> */}
      <Card className={styles.widget} style={{ width: 300, top: 150 }} id='widget1'>
        <div className={styles.list}>
          <div id='1'>row1</div>
          <div id='2'>row2</div>
          <div id='3'>row3</div>
          <div id='4'>row4</div>
          <div id='5'>row5</div>
          <div id='6'>row6</div>
          <div id='7'>row7</div>
        </div>

      </Card>
      <Card style={{ width: 300, left: 500, top: 50 }} className={styles.widget} id='widget2' >
        <div className={styles.list}>
          <div >row1</div>
          <div >row2</div>
          <div >row3</div>
          <div >row4</div>
          <div >row5</div>
          <div >row6</div>
          <div >row7</div>
        </div>
      </Card>
      <Card style={{ width: 300, left: 500, top: 450 }} className={styles.widget} id='widget3' >
        <div className={styles.list}>
          <div >row1</div>
          <div >row2</div>
          <div >row3</div>
          <div >row4</div>
          <div >row5</div>
          <div >row6</div>
          <div >row7</div>
        </div>
      </Card>
    </div >
  );
};

export default DocsPage;
