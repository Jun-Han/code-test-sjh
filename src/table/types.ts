import { SortDirection } from  '../sort/types'

/** 表格配置项 */
export interface TableOptions {

  /** 是否为本地表格,default: true **/
  isLocal: boolean;

  /** 是否需要分页器, default: true **/
  isNeedPagination: boolean;

  /** 表格宽度, default: '100%' **/
  width?: string | number;
}


