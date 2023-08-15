import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const data = [
  {
    name: 'student',
    fields: [
      { name: 'name', target: { name: '' } },
      { name: 'age', target: { name: '' } },
      { name: 'gender', target: { name: '' } },
      { name: 'major', target: { name: 'major' } },
      { name: 'score', target: { name: '' } },
      { name: 'class', target: { name: 'class' } }
    ],
    data: [
      { name: '张三', age: '18', gender: 'M', major: '工程技术', score: '496', class: '3', id: '1' },
      { name: '李四', age: '17', gender: 'F', major: '英语', score: '468', class: '1', id: '2' },
      { name: '王五', age: '18', gender: 'M', major: '计算机科学与技术', score: '489', class: '2', id: '3' }
    ]
  },
  {
    name: 'major',
    fields: [
      { name: 'college', target: { name: '' } },
      { name: 'number', target: { name: '' } },
      { name: 'name', target: { name: '' } },
      { name: 'school', target: { name: 'school' } },
    ],
    data: [
      { college: '信息学院', number: '120', name: '计算机科学与技术', school: '上海海洋大学', id: '4' },
      { college: '工程学院', number: '115', name: '工程技术', school: '上海第二工业大学', id: '5' },
      { college: '外语学院', number: '118', name: '英语', school: '上海杉达学院', id: '6' }
    ]
  },
  {
    name: 'school',
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
    name: 'class',
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
]

export const nodes = [

  {
    id: 'studentTable',
    type: 'FieldList',
    position: { x: 100, y: 200 },
    data: {
      title: 'student',
      list: [
        { label: 'name', handleId: 'name' },
        { label: 'age', handleId: 'age' },
        { label: 'gender', handleId: 'gender' },
        { label: 'major', handleId: 'major' },
        { label: 'score', handleId: 'score' },
        { label: 'class', handleId: 'class' },
      ]
    },
  },
  {
    id: 'majorTable',
    type: 'FieldList',
    data: {
      title: 'Major',
      list: [
        { label: 'college', handleId: 'college' },
        { label: 'number', handleId: 'number' },
        { label: 'type', handleId: 'type' },
        { label: 'name', handleId: 'name' },
        { label: 'school', handleId: 'school' },
      ]
    },
    position: { x: 400, y: 200 },
  },
  {
    id: 'schoolTalbe',
    type: 'FieldList',
    data: {
      title: 'School',
      list: [
        { label: 'name', handleId: 'name' },
        { label: 'area', handleId: 'area' },
        { label: 'type', handleId: 'type' },
        { label: 'city', handleId: 'city' },
      ]
    },
    position: { x: 600, y: 400 },
    targetPosition: Position.Left,
  },
  {
    id: 'classTable',
    type: 'FieldList',
    data: {
      title: 'Class',
      list: [
        { label: 'number', handleId: 'number' },
        { label: 'index', handleId: 'index' },
        { label: 'averageScore', handleId: 'averageScore' }
      ]
    },
    position: { x: 400, y: 575 },
    targetPosition: Position.Left,
  }
];

export const edges = [
  {
    id: 'e1-2',
    source: 'studentTable',
    target: 'majorTable',
    sourceHandle: 'major',
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
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
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
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
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: {
      stroke: '#7678ed'
    }
  },
];
