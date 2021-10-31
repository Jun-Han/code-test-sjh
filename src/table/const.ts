 import { SortType } from "./types"

/** 分页参数· */
export enum sortDirection {
    origin = 0,
    asc = 1,
    des = 2
}
  
/** 排序参数的默认值 */
export const defaultSort:SortType = {
    sortKey: '',
    sortDirection: sortDirection.origin
}



