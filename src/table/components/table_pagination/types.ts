/** 分页配置 */
export interface TablePagination { 

    /** 数据总数 **/
    total?: number;   

    /** 默认每页多少条, default: 50 **/
    pageSize?: number ;

    /** 默认的分页可选项, default: [25, 50, 100]**/
    pageSizeList?: number[];

    /** 默认显示第几页, default: 1**/
    pageIndex?: number;
}