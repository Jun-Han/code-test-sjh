
import type { PropType } from 'vue-types/dist/types' 
import { TableOptions } from "./types"
import { TableColumn } from "../table_head/types"
import { TablePagination } from "../table_pagination/types"
import { defaultPaginationOpt } from "../table_pagination/const"

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
        type: Array as PropType<unknown[]>,
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


