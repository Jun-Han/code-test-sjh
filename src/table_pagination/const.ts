import type { PropType } from 'vue-types/dist/types'
import { TablePagination } from './types'

export const defaultPaginationOpt = {

    /** 数据总数 **/
    total: 0,

    /** 默认每页多少条, default: 50 **/
    pageSize: 50,

    /** 默认的分页可选项, default: [25, 50, 100]**/
    pageSizeList: [25, 50, 100],
    
    /** 默认显示第几页, default: 1**/
    pageIndex: 1
}

export const paginationProps = {
    options: {
        type: Object as PropType<TablePagination>,
        default: () => defaultPaginationOpt
    }
}

/** 默认起始页 */
export const defaultPageIndex = 1

/** 默认总数 */
export const defaultTotal = 0

/** 默认每页条数 */
export const defaultPageSize = 50