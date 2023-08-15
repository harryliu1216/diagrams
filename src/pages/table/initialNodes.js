import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const data = [
  {
    name: '道具表',
    fields: [
      { name: 'name', target: { name: '' } },
      { name: 'age', target: { name: '' } },
      { name: 'gender', target: { name: '' } },
      { name: 'major', target: { name: 'major' } },
      { name: 'score', target: { name: '' } },
      { name: 'class', target: { name: 'class' } }
    ],
    data: [
      {
        name: '张三',
        age: '18',
        gender: 'M',
        major: '工程技术',
        score: '496',
        class: '3',
        id: '1'
      },
      { name: '李四', age: '17', gender: 'F', major: '英语', score: '468', class: '1', id: '2' },
      {
        name: '王五',
        age: '18',
        gender: 'M',
        major: '计算机科学与技术',
        score: '489',
        class: '2',
        id: '3'
      }
    ]
  },
  {
    name: '商城表',
    fields: [
      { name: 'college', target: { name: '' } },
      { name: 'number', target: { name: '' } },
      { name: 'name', target: { name: '' } },
      { name: 'school', target: { name: 'school' } }
    ],
    data: [
      {
        college: '信息学院',
        number: '120',
        name: '计算机科学与技术',
        school: '上海海洋大学',
        id: '4'
      },
      { college: '工程学院', number: '115', name: '工程技术', school: '上海第二工业大学', id: '5' },
      { college: '外语学院', number: '118', name: '英语', school: '上海杉达学院', id: '6' }
    ]
  },
  {
    name: '技能表',
    fields: [
      { name: 'name', target: { name: '' } },
      { name: 'area', target: { name: '' } },
      { name: 'type', target: { name: '' } },
      { name: 'city', target: { name: '' } }
    ],
    data: [
      { name: '上海海洋大学', area: '浦东新区', type: '农业类', city: '上海', id: '7' },
      { name: '上海第二工程技术大学', area: '浦东新区', type: '理工类', city: '上海', id: '8' },
      { name: '上海杉达学院', area: '浦东新区', type: '综合类', city: '上海', id: '9' }
    ]
  },
  {
    name: '七天任务',
    fields: [
      { name: 'number', target: { name: '' } },
      { name: 'index', target: { name: '' } },
      { name: 'averageScore', target: { name: '' } }
    ],
    data: [
      { number: '40', index: '1', averageScore: '500', id: '10' },
      { number: '38', index: '2', averageScore: '470', id: '11' },
      { number: '38', index: '2', averageScore: '499', id: '12' }
    ]
  }
];

export const nodes = [
  {
    id: 'studentTable',
    type: 'FieldList',
    position: { x: 100, y: 200 },
    data: {
      title: '道具表',
      list: [
        { key: 'name', label: '名称', handleId: 'name' },
        { key: 'page', label: '商城页面', handleId: 'age' },
        { key: 'toSize', label: '每次购买数量', handleId: 'gender' },
        { key: 'toValue', label: '对应道具ID', handleId: 'major' },
        { key: 'toType', label: '商店类型分类', handleId: 'score' },
        { key: 'ifHot', label: '是否显示', handleId: 'class' }
      ]
    },
    targetPosition: Position.Right
  },
  {
    id: 'majorTable',
    type: 'FieldList',
    data: {
      title: '商城表',
      list: [
        { key: 'name', label: '名称', handleId: 'college' },
        { key: 'image_hexie', label: '图片ID', handleId: 'number' },
        { key: 'rate', label: '质量', handleId: 'type' },
        { key: 'isDebris', label: '是否碎片', handleId: 'name' },
        { key: 'score', label: '装备碎片评分', handleId: 'school' }
      ]
    },
    position: { x: 400, y: 200 }
  },
  {
    id: 'schoolTalbe',
    type: 'FieldList',
    data: {
      title: '技能表',
      list: [
        { key: 'name', label: '名称', handleId: 'name' },
        { key: 'info', label: '信息', handleId: 'info' },
        { key: 'type', label: '类型', handleId: 'type' },
        { key: 'typeName', label: '类型名称', handleId: 'typeName' },
        { key: 'rare', label: '品质', handleId: 'rare' },
        { key: 'isToTarget', label: '是否技能有指定目标', handleId: 'isToTarget' },
        { key: 'isRemote', label: '是否远程技能', handleId: 'isRemote' },
        { key: 'skillType', label: '技能类型', handleId: 'skillType' },
        { key: 'skillTypeInfo', label: '技能类型名称', handleId: 'skillTypeInfo' },
        { key: 'propTypeId', label: '技能属性', handleId: 'propTypeId' },
        { key: 'attribute', label: '加成属性', handleId: 'attribute' }
      ]
    },
    position: { x: 640, y: 200 },
    targetPosition: Position.Left
  },
  {
    id: 'classTable',
    type: 'FieldList',
    data: {
      title: 'Buff',
      list: [
        { key: 'name', label: '名称', handleId: 'name' },
        { key: 'buffType', label: '类型', handleId: 'collebuffTypege' },
        { key: 'buffSubType', label: '子类型', handleId: 'buffSubType' },
        { key: 'triggerValue', label: '触发值', handleId: 'triggerValue' }
      ]
    },
    position: { x: 400, y: 405 },
    targetPosition: Position.Left
  },
  {
    id: 'classTable1',
    type: 'FieldList',
    data: {
      title: '七日任务',
      list: [
        { key: 'name', label: '名称', handleId: 'name' },
        { key: 'info', label: '任务详情', handleId: 'info' },
        { key: 'taskTyp', label: '任务类型', handleId: 'taskTyp' },
        { key: 'taskValue', label: '任务需求', handleId: 'taskValue' },
        { key: 'isLogin', label: '是否登陆', handleId: 'isLogin' }
      ]
    },
    position: { x: 650, y: 555 },
    targetPosition: Position.Left
  }
];

export const edges = [
  {
    id: 'e1-2',
    source: 'studentTable',
    target: 'majorTable',
    sourceHandle: 'major',
    data: {
      selectIndex: 0
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    style: {
      stroke: '#7678ed'
    }
  },
  {
    id: 'e1-3',
    source: 'majorTable',
    target: 'schoolTalbe',
    sourceHandle: 'school',
    data: {
      selectIndex: 1
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    style: {
      stroke: '#7678ed'
    }
  },
  {
    id: 'e1-4',
    source: 'studentTable',
    target: 'classTable',
    sourceHandle: 'class',
    data: {
      selectIndex: 1
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    style: {
      stroke: '#7678ed'
    }
  }
];
