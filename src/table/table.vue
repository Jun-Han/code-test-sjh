<template>
    <!-- 表格组件 -->
    <section class="comp-table"
             :style="tableStyle">

      <table>
          <!-- 表头 -->
          <table-head :columns="columns"
                      @sort="onSort">
            <template v-for="({ key, title }) in columns" #[key]>
              <slot :name="`head-${key}`">{{ title }}</slot>
            </template> 
          </table-head>

          <!-- 表格内容 -->
          <tr v-for="(record, index) in renderedData"
              :key="`cell${index}`">
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

      <!-- 分页器 -->
      <pagination :options="paginationOpt" 
                  @page-change="onPageChange" />
    </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from '@vue/composition-api'
import Pagination from './components/table_pagination/pagination.vue'
import TableHead from './components/table_head/head.vue'

import { useSort } from './hooks/sort/sort'
import cloneDeep from 'lodash-es/cloneDeep'
import { getCurrentPageData } from './util'
import { tableProps } from './const'
import { defaultSortParams } from './hooks/sort/const'
 
export default defineComponent({
  name: 'Table',
  props: tableProps,
  components: {
    Pagination,
    TableHead
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
      useSort(sortKey, sortParams, allData, props.data)
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
  table {
    width: 100%;

    th {
      cursor: pointer;
      text-align: left;
    }
  }
}
</style>

   