/**
 * @file 常量
 */

/** 表格列配置项类型 */
interface TColumns {
    /** 当前列的表头名 **/
   title: string;

   /** 当前列的数据字段名 **/
   dataIndex?: string;
 
   /** 当前列的宽度, **/
  width?: string | number; 
 
    /** 是否可排序，default: false **/
  sortable?: boolean;
 
  /** 支持的排序方向,升序，降序，原始顺序 **/
  sortDirection?: string[]
}

/** 表格数据类型 */
interface TRecord {
    name: string;
    employNum: string;
    age: number | string;
    sex: string;
    station: string;
}

export const TColumns:TColumns[] = [{
    dataIndex: 'name',
    title: '姓名',
    width: 200
  }, {
    dataIndex: 'employNum',
    title: '工号'
  }, {
    dataIndex: 'age',
    title: '年龄',
    sortable: true,
    sortDirection: ['asc' , 'des']
  }, {
    dataIndex: 'sex',
    title: '性别'
  }, {
    dataIndex: 'station',
    title: '岗位'
  }, {
    title: '操作'
  }]

export const DEFAULT_TDATA:TRecord[]  = [{
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

