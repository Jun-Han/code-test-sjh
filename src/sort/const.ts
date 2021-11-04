import { SortParams } from "./types"

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