/**
 * @author: 
 * @since: 2021-11-03 16:18:29
 * @description:
 * @Last Modified by: 
 * @Last Modified time: 2021-11-03 17:12:16
 */

import type { SortParams } from "./types";

import { Ref } from '@vue/composition-api'
import { cloneDeep, isObject}  from 'lodash-es';
import { sortDirection } from './const';

/**
 * 排序
 * @param {string} sortKey
 */
export function useSort(sortKey: string, sortParams: Ref<SortParams>, allData: Ref<unknown[]>, originData: unknown[]) {

    // 更换sortKey进行排序时，需要重置排序方向的顺序
    if (sortKey !== sortParams.value.sortKey) {
        sortParams.value.sortDirection = sortDirection.origin;
    }

    // 更换sortKey进行排序时，需要重置排序方向的顺序
    sortParams.value.sortKey = sortKey;
    if (sortParams.value.sortDirection >= sortDirection.des) {
        sortParams.value.sortDirection = sortDirection.origin;
    } else {
        sortParams.value.sortDirection++;
    }

    // 恢复原始顺序
    if (sortParams.value.sortDirection === sortDirection.origin) {
        allData.value = cloneDeep(originData);
        return;
    }

    // 升序/降序
    let sortData = getAcsSordata(sortKey, allData.value);
    sortParams.value.sortDirection === sortDirection.asc ? allData.value = sortData : allData.value = sortData.reverse();
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