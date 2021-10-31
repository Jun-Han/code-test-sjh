<template>
    <section class="cpnt-table"
             :style="tableStyle">
      <table>
          <!-- 列头 -->
          <tr>
            <th v-for="({ key, title }) in tcolumns"
                :key="key"
                @click="onSort(key)">
                {{ title }}
            </th>
          </tr>

          <!-- 列内容 -->
          <tr v-for="(record, index) in renderedData"
              :key="'trow' + index">
            <td v-for="({ key }) in tcolumns"
                :key="key">
                <slot :name="key" 
                      :record="record" 
                      :value="record.key"> 
                  {{ record[key] }}
                </slot>
            </td>
          </tr>
      </table>

      <!-- 分页器 -->
      <div v-if="pageSize"
           class="pagination">
           <button @click="onPagePre">上一页</button>
           <button @click="onPageNext">下一页</button>
      </div>
    </section>
</template>

<script lang="ts">
/**
 * @author: sjh
 * @since: 2020-08-13 10:26:39
 * @Last Modified by: sjh
 * @Last Modified by: sjh021-10-21 09:31:29
 * @Last Modified time: 2021-10-21 10:04:07��
 */

import { defineComponent, computed, ref, watch } from '@vue/composition-api'

import cloneDeep from 'lodash-es/cloneDeep'
import isObject from 'lodash-es/isObject'

import { sortDirection, defaultSort, tableProps } from './const'
 
export default defineComponent({
  name: 'Table',
  props: tableProps,
  setup(props) {
    
    /** ������ʽ */
    const tableStyle = computed(() => {
      return `width: ${ props.width + (typeof props.width === 'number' ? 'px' : '')}`
    })

    /** ����������� */
    let allData = ref(cloneDeep(props.tdata)) 

    /** ��¼��ǰҳ�� */
    let pageIndex = ref(1)

    /** ��ǰҳ��Ⱦ������ */
    let renderedData = ref(getCurrentPageData(pageIndex.value, props.pageSize, allData.value))

    /** ������� */
    let sortParams = ref(cloneDeep(defaultSort))

    /** props.tdata�ı�ʱ�������ڲ�������Ӧʽ���� */
    watch(props.tdata, () => {
      allData.value = cloneDeep(props.tdata)
      sortParams.value = cloneDeep(defaultSort)
      pageIndex.value = 1
      updtRenderData()
    })

    /** ���µ�ǰ�������Ⱦ���� */
    function updtRenderData() {
      renderedData.value = getCurrentPageData(pageIndex.value, props.pageSize, allData.value);
    }

    /** ��һҳ������pageIndex����ˢ�±�����Ⱦ���� */
    function onPagePre() {
      (pageIndex.value > 1) && pageIndex.value--
      updtRenderData();
    }

    /** ��һҳ������pageIndex����ˢ�±�����Ⱦ���� */
    function onPageNext() {
      (props.pageSize > 0) &&
      (pageIndex.value < allData.value.length/props.pageSize) && 
      pageIndex.value++
      updtRenderData();
    }

    /**
     * �������򣺸��������ֶ�sortParams�����������������allData���������pageIndex��ˢ�±�����Ⱦ����
     * @param {string} sortKey 
     */
    function onSort(sortKey: string) {

      // �����ǰ�������������ԭ�����в���ͬһ�У��������������ֶ�
      if(sortKey !== sortParams.value.sortKey) {
        sortParams.value.sortDirection = sortDirection.origin
      }

      // ���������ֶ�
      sortParams.value.sortKey = sortKey
      if(sortParams.value.sortDirection >= sortDirection.DES) {
        sortParams.value.sortDirection = sortDirection.origin
      } else {
        sortParams.value.sortDirection++
      }

      // �Ա���������allData��������
      switch (sortParams.value.sortDirection) {

        // ����
        case sortDirection.ASC:
          allData.value = getAcsSortData(sortKey, allData.value)
          break

        // ����
        case sortDirection.DES:
          allData.value = getAcsSortData(sortKey, allData.value).reverse()
          break
        
        // �ָ�ԭʼ���ݵ�˳��
        case sortDirection.origin:
          allData.value = cloneDeep(props.tdata)
          break

        default:
          break
      }
	  
	  // ���÷�ҳ
      pageIndex.value = 1;
      updtRenderData()
    }

    return {
        tableStyle,
        renderedData,
        onPagePre,
        onPageNext,
        onSort
    }
  }
})

/**
 * ��ȡ��ǰҳ�ķ�ҳ����
 * @param {number} pageIndex 
 * @param {number} pageSize 
 * @param {unknown[]} allData 
 * @returns {unknown[]}
 */
function getCurrentPageData(pageIndex: number, pageSize: number, allData: unknown[]): unknown[] {
  if(!pageSize) {
    return cloneDeep(allData)
  }
  const startIndex = (pageIndex - 1) * pageSize
  const endIndex = (pageIndex) * pageSize
  return allData.slice(startIndex, endIndex)
}

/**
 * ������������
 * @param {string} sortKey 
 * @param {unknown[]} allData 
 * @returns {unknown[]}
 */
function getAcsSortData(sortKey: string, allData: unknown[]): unknown[] {
  let newAllData = cloneDeep(allData)
  return newAllData.sort((pre: unknown, next: unknown) => {
    const preKey = isObject(pre) && (pre[sortKey] ?? '')
    const nextKey = isObject(next) && (next[sortKey] ?? '')
    if (preKey < nextKey) return -1
    if (preKey > nextKey) return 1
    return 0
  })
}
</script>

   