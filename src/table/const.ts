
import type { PropType } from 'vue-types/dist/types' 
import { TableOptions, TableColumn } from "./types"
import { SortParams } from "./types"
import { TablePagination } from "../table_pagination/types"
import { defaultPaginationOpt } from "../table_pagination/const"

/** 排序方向 */
export enum sortDirection {

    /** 数据的原始数据 */
    origin = 0,

    /** 升序 */
    asc = 1,

    /** 降序 */
    des = 2
}
  
/** 排序参数的默认值 */
export const defaultSortParams:SortParams = {

    /** 排序字段 */
    sortKey: '',

    /** 排序方向 */
    sortDirection: sortDirection.origin
}

/** 表格Props */
export const tableProps = {
    options: {
        type: Object as PropType<TableOptions>,
        default: () => ({

            /** 是否为本地表格,default: true **/
            isLocal: true,

            /** 是否需要分页器, default: true **/
            isNeedPagination: true,

            /** 表格宽度, default: '100%' **/
            width: '100%'
        })
    },
    columns: {
        type: Array as PropType<TableColumn[]>,
        default: () => [],
        required: true
    },
    data: {
        type: Array as PropType<object[]>,
        default: () => [],
        required: true
    },
    sort: {
        type: Object as PropType<TablePagination>,
        default: () => {}
    },
    pagination: {
        type: Object as PropType<TablePagination>,
        default: () => defaultPaginationOpt
    }
}


