/** 排序参数的类型 */
export interface SortType {
    sortKey: string,
    sortDirection: number
}

export interface SortType {
    
   /** 默认以哪一列排序 **/
   sortField?:  string;
   
   /** 默认排序方向，default: 'asc'**/
   sortDirection?: ‘ASC' | 'des' | ’ORIGIN‘；

   /** 默认的排序函数，参考Array.sort **/
  sortFn?: (pre: unknow, after: unknow) => 0, 1, -1 
}