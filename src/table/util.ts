import cloneDeep from 'lodash-es/cloneDeep'
import isObject from 'lodash-es/isObject'

/**
 * 获取指定页的数据
 * @param {number} pageIndex 
 * @param {number} pageSize 
* @param {unknown[]} allData 
* @returns {unknown[]}
*/
export function getCurrentPageData(allData: unknown[], pageIndex?: number, pageSize?: number): unknown[] {
    if(!pageSize) {
        return cloneDeep(allData)
    }
    if(!pageIndex || (Number.isInteger(pageIndex) && pageIndex < 1)) {
        pageIndex = 1
    }
    const startIndex = (pageIndex - 1) * pageSize
    const endIndex = (pageIndex) * pageSize
    return allData.slice(startIndex, endIndex)
}

/**
 * 根据对象的指定字段 对对象数组排序
 * @param {string} sortKey 
 * @param {unknown[]} allData 
 * @returns {unknown[]}
 */
export function getAcsSordata(sortKey: string, allData: unknown[]): unknown[] {
    let newAllData = cloneDeep(allData)
    return newAllData.sort((pre: unknown, next: unknown) => {
        const preKey = isObject(pre) && (pre[sortKey] ?? '')
        const nextKey = isObject(next) && (next[sortKey] ?? '')
        if (preKey < nextKey) return -1
        if (preKey > nextKey) return 1
        return 0
    })
}