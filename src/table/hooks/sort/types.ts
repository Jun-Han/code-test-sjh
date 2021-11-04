export type SortDirection = 'asc' | 'des' | 'origin'

/** 排序配置项 */
export interface SortOpt {
    
    /** 默认以哪一列排序 **/
    sortKey?: string;
    
    /** 默认排序方向，default: 'origin'**/
    sortDirection?: SortDirection;
 
    /** 默认的排序函数，参考Array.sort **/
    sortFn?: (pre: object, after: object) => (0 | 1 | -1);
 }
 
 /** 排序参数，维护当前的排序状态 */
 export interface SortParams {
     
   /** 默认以哪一列排序 **/
   sortKey?: string;
   
   /** 默认排序方向，default: '0'**/
   sortDirection?: (0 | 1 | 2);
 }