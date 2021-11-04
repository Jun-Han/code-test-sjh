import { SortDirection } from '../../hooks/sort/types'

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