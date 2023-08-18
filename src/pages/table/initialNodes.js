import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const data = [
  {
    name: '道具表',
    fields: [
      { name: 'name', label: '名称', type: 'string', target: { name: '' } },
      { name: 'page', label: '商城页面', type: 'string', target: { name: '' } },
      { name: 'toSize', label: '每次购买数量', type: 'number', target: { name: '' } },
      { name: 'toValue', label: '对应道具ID', type: 'string', target: { name: 'major' } },
      { name: 'toType', label: '商店类型分类', type: 'string', target: { name: '' } },
      { name: 'ifHot', label: '是否显示', type: 'boolean', target: { name: 'class' } }
    ],
    data: [
      {
        name: '太阳水',
        page: '5',
        toSize: '5',
        toValue: '4',
        score: 'medical',
        toType: '1',
        ifHot: true
      }
    ]
  },
  {
    name: '商城表',
    fields: [
      { name: 'name', label: '名称', type: 'string', target: { name: '' } },
      { name: 'image_hexie', label: '图片ID', type: 'string', target: { name: '' } },
      { name: 'rate', label: '质量', type: 'string', target: { name: '' } },
      { name: 'isDebris', label: '是否碎片', type: 'boolean', target: { name: 'school' } },
      { name: 'score', label: '装备碎片评分', type: 'string', target: { name: 'school' } }
    ],
    data: [
      {
        name: '裁决',
        image_hexie: '120',
        rate: 55,
        isDebris: true,
        score: '4'
      }
    ]
  },
  {
    name: 'Buff',
    fields: [
      { name: 'name', label: '名称', type: 'string', target: { name: '' } },
      { name: 'buffType', label: '类型', type: 'string', target: { name: '' } },
      { name: 'buffSubType', label: '子类型', type: 'string', target: { name: '' } },
      { name: 'isDebris', label: '是否碎片', type: 'boolean', target: { name: 'school' } },
      { name: 'triggerValue', label: '触发值', type: 'string', target: { name: 'school' } }
    ],
    data: [
      {
        name: '中毒',
        buffType: 'debuff',
        buffSubType: 55,
        isDebris: false,
        triggerValue: 'skill'
      }
    ]
  },
  {
    name: '技能表',
    fields: [
      { name: 'name', label: '名称', type: 'string', target: { name: '' } },
      { name: 'info', label: '信息', type: 'string', target: { name: '' } },
      { name: 'type', label: '类型', type: 'string', target: { name: '' } },
      { name: 'typeName', label: '类型名称', type: 'string', target: { name: '' } },
      { name: 'rare', label: '品质', type: 'string', target: { name: '' } },
      { name: 'isToTarget', label: '是否技能有指定目标', type: 'boolean', target: { name: '' } },
      { name: 'isRemote', label: '是否远程技能', type: 'boolean', target: { name: '' } },
      { name: 'skillType', label: '技能类型', type: 'string', target: { name: '' } },
      { name: 'skillTypeInfo', label: '技能类型名称', type: 'string', target: { name: '' } },
      { name: 'propTypeId', label: '技能属性', type: 'string', target: { name: '' } },
      { name: 'attribute', label: '加成属性', type: 'string', target: { name: '' } }
    ],
    data: [
      { name: '野蛮冲撞', info: '用肩膀把敌人撞开', type: '', typeName: '辅助', rare: '60', isToTarget: true, isRemote: false, skillTYpe: 'solider', skillTypeInfo: '战士技能', propTypeId: '', attribute: '' }
    ]
  },
  {
    name: '七天任务',
    fields: [
      { name: 'name', label: '名称', type: 'string', target: { name: '' } },
      { name: 'info', label: '任务详情', type: 'string', target: { name: '' } },
      { name: 'taskTyp', label: '任务类型', type: 'string', target: { name: '' } },
      { name: 'taskValue', label: '任务需求', type: 'string', target: { name: '' } },
      { name: 'isLogin', label: '是否登陆', type: 'boolean', target: { name: '' } }
    ],
    data: [
      { name: '签到', info: '每日签到', taskTyp: 'common', taskValue: 'login', isLogin: true },
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
