import type { PropType } from 'vue-types/dist/types'
import { TablePagination } from './types'

export const paginationProps = {
    options: {
        type: Object as PropType<TablePagination>,
        default: () => ({

            /** 数据总数 **/
            total11: 0,
        
            /** 默认每页多少条, default: 50 **/
            defaultPageSize: 50,
        
            /** 默认的分页可选项, default: [25, 50, 100]**/
            defaultPageSizeList: [25, 50, 100],
            
            /** 默认显示第几页, default: 1**/
            defaultPageIndex: 1,
        
            /** 配置需要显示的分页功能，default: ['total', 'pre', 'next', 'pageIndex', 'pageSizeSelet', 'jumpTo'] **/
            showItems: ['total', 'pre', 'next', 'pageIndex', 'pageSizeSelet', 'jumpTo']
        })
    }
}