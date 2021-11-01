/**
 * @file 常量
 */

import { TableColumn } from '../src/table/types'

/** 表格数据类型 */
interface TRecord {
    name: string;
    employNum: string;
    age: number | string;
    sex: string;
    station: string;
}

export const TColumns:TableColumn[] = [{
    key: 'name',
    title: '姓名',
    width: 200
  }, {
    key: 'employNum',
    title: '工号'
  }, {
    key: 'age',
    title: '年龄',
    sortable: true,
    sortDirection: ['asc' , 'des']
  }, {
    key: 'sex',
    title: '性别'
  }, {
    key: 'station',
    title: '岗位'
  }, {
    key: 'opr',
    title: '操作'
  }]

export const DEFAULT_TDATA:TRecord[]  = [{
    name: '张三',
    employNum: '65914',
    age: 16,
    sex: '男',
    station: '前端开发'
  }, {
    name: '李四',
    employNum: '65914',
    age: 17,
    sex: '男',
    station: '前端开发'
  }, {
    name: '阿斯顿',
    employNum: '65914',
    age: 18,
    sex: '男',
    station: '前端开发'
  }, {
    name: '阿斯顿',
    employNum: '65914',
    age: 19,
    sex: '男',
    station: '前端开发'
  }, {
    name: '多少啊',
    employNum: '65914',
    age: 20,
    sex: '男',
    station: '前端开发'
  }, {
    name: '啊啊啊',
    employNum: '65914',
    age: 21,
    sex: '男',
    station: '前端开发'
  }, {
    name: '叔叔说',
    employNum: '65914',
    age: 38,
    sex: '男',
    station: '前端开发'
  }, {
    name: '访达',
    employNum: '65914',
    age: 48,
    sex: '男',
    station: '前端开发'
  }, {
    name: '发发发',
    employNum: '65914',
    age: 18,
    sex: '男',
    station: '前端开发'
  }, {
    name: '1的',
    employNum: '65914',
    age: 18,
    sex: '男',
    station: '前端开发'
  }, {
    name: '张三',
    employNum: '65914',
    age: 18,
    sex: '男',
    station: '前端开发'
  }, {
    name: '张三',
    employNum: '65914',
    age: 18,
    sex: '男',
    station: '前端开发'
  }, {
    name: '1的',
    employNum: '65914',
    age: 18,
    sex: '男',
    station: '前端开发'
  }, {
    name: '张三',
    employNum: '65914',
    age: 18,
    sex: '男',
    station: '前端开发'
  }, {
    name: '张三',
    employNum: '65914',
    age: 18,
    sex: '男',
    station: '前端开发'
  }]

