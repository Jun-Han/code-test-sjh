<template>
    <!-- 表格组件 -->
    <section class="comp-table"
             :style="tableStyle">
      <table class="table-body">

          <!-- 表头 -->
          <tr>
            <th v-for="({ key, title }) in columns"
                :key="key"
                @click="onSort(key)">
                <slot :name="'head-' + key">
                  {{ title }}
                </slot>
            </th>
          </tr>

          <!-- 列内容 -->
          <tr v-for="(record, index) in renderedData"
              :key="'cell' + index">
            <td v-for="({ key }) in columns"
                :key="key">
                <slot :name="key" 
                      :record="record" 
                      :value="record[key]"> 
                  {{ record[key] }}
                </slot>
            </td>
          </tr>
      </table>

      <pagination :options="paginationOpt" 
                  @page-change="onPageChange" />
    </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from '@vue/composition-api'
import Pagination from '../table_pagination/pagination.vue'

import cloneDeep from 'lodash-es/cloneDeep'
import { getCurrentPageData, getAcsSordata  } from './util'
import { sortDirection, tableProps } from './const'
import { defaultSortParams } from './const'
 
export default defineComponent({
  name: 'Table',
  props: tableProps,
  components: {
    Pagination
  },
  setup(props, { emit }) {
    
    /** 自定义表格宽度 */
    const tableStyle = computed(() => {
      const tableWidth = props.options?.width;
      return tableWidth ? 
             `width: ${ props.options?.width + (typeof props.options?.width === 'number' ? 'px' : '')}` 
             : ''
    })

    /** 表格原始数据 */
    let allData = ref(cloneDeep(props.data))

    /** 表格当前需要渲染的数据 */
    let renderedData = ref(getCurrentPageData(allData.value, props.pagination?.pageIndex, props.pagination?.pageSize))

    /** 分页器配置 */
    let paginationOpt = ref(cloneDeep(props.pagination))
    paginationOpt.value.total = paginationOpt.value.total ?? allData.value.length

    /** 排序参数 */
    let sortParams = ref(cloneDeep(defaultSortParams))

    /** props.data变化时，重置所有状态*/
    watch(props.data, () => {
      allData.value = cloneDeep(props.data)
      sortParams.value = cloneDeep(defaultSortParams)
      updtRenderData(1)
    })

    /** 更新表格需要渲染的数据 */
    function updtRenderData(pageIndex: number) {
      renderedData.value = getCurrentPageData(allData.value, pageIndex, props.pagination?.pageSize);
    }

    /**
     * 页码变化
     * @param {number} pageIndex 
     */
    function onPageChange(pageIndex: number) {
      updtRenderData(pageIndex)
      emit('page-change')
    }

    /**
     * 排序
     * @param {string} sortKey 
     */
    function onSort(sortKey: string) {

      // 更换sortKey进行排序时，需要重置排序方向的顺序
      if(sortKey !== sortParams.value.sortKey) {
        sortParams.value.sortDirection = sortDirection.origin
      }

      // 更新排序字段和排序方向
      sortParams.value.sortKey = sortKey
      if(sortParams.value.sortDirection >= sortDirection.des) {
        sortParams.value.sortDirection = sortDirection.origin
      } else {
        sortParams.value.sortDirection++
      }

      switch (sortParams.value.sortDirection) {

        // 升序
        case sortDirection.asc:
          allData.value = getAcsSordata(sortKey, allData.value)
          break

        // 降序
        case sortDirection.des:
          allData.value = getAcsSordata(sortKey, allData.value).reverse()
          break
        
        // 恢复原始顺序
        case sortDirection.origin:
          allData.value = cloneDeep(props.data)
          break

        default:
          break
      }
	  
      updtRenderData(1)
    }

    return {
        tableStyle,
        renderedData,
        paginationOpt,
        onSort,
        onPageChange
    }
  }
})
</script>

<style lang="less">
.comp-table {
  .table-body {
    width: 100%;

    th {
      cursor: pointer;
      text-align: left;
    }
  }
}
</style>

   