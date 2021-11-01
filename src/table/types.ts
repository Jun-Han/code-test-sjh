export type SortDirection = 'asc' | 'des' | 'origin'

/** 排序配置项 */
export interface SortOpt {
    
   /** 默认以哪一列排序 **/
   sortKey?: string;
   
   /** 默认排序方向，default: 'origin'**/
   sortDirection?: SortDirection;

   /** 默认的排序函数，参考Array.sort **/
   sortFn?: (pre: object, after: object) => (0 | 1 | -1);
}

/** 排序参数，维护当前的排序状态 */
export interface SortParams {
    
  /** 默认以哪一列排序 **/
  sortKey?: string;
  
  /** 默认排序方向，default: '0'**/
  sortDirection?: (0 | 1 | 2);
}

/** 表格配置项 */
export interface TableOptions {

  /** 是否为本地表格,default: true **/
  isLocal: boolean;

  /** 是否需要分页器, default: true **/
  isNeedPagination: boolean;

  /** 表格宽度, default: '100%' **/
  width?: string | number;
}

/** 表头的参数类型 */
export interface TableColumn {

  /** 当前列的表头名 **/
  title: string;
 
  /** 当前列的数据字段名 **/
  key?: string;
 
  /** 当前列的宽度, **/
  width?: string | number; 
 
  /** 是否可排序，default: false **/
  sortable?: boolean;
  
  /** 支持的排序方向,升序，降序，原始顺序 **/
  sortDirection?: SortDirection[]
}


