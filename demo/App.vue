<template>
  <div>
    <!-- 基础使用，默认为本地表格 -->
    <TestTable :columns="tcolumns"
               :data="tdata" />

    <!-- 远程表格 -->
    <TestTable :options="{
                  isLocal: false
               }"
               :columns="tcolumns"
               :data="tdata" />

    <!-- 不需要分页 -->
    <TestTable :options="{
                  isNeedPagination: false
               }"
               :columns="tcolumns"
               :data="tdata" />

    <!-- 配置指定排序的字段 -->
    <TestTable :sort-opt="{
                  sortField: 'age',
                  sortDirection: 'des'
               }"
               :columns="tcolumns"
               :data="tdata" />

    <!-- 配置分页 -->
    <TestTable :pagination-opt="{
                  total: 131,
                  defaultPageSize: 10,
                  defaultPageSizeList: [10, 20, 30],
                  defaultPageIndex: 5,
                  showItems: ['total', 'pre', 'next', 'pageIndex', 'pageSizeSelet', 'jumpTo']
               }"
               :columns="tcolumns"
               :data="tdata" />

    <!-- 自定义内容单元格 -->
    <TestTable :pagination-opt="{
                  total: 131,
                  defaultPageSize: 10,
                  defaultPageSizeList: [10, 20, 30],
                  defaultPageIndex: 5
               }"
               :columns="tcolumns"
               :data="tdata">
        <span slot="name" 
              :slot-scope="{ record, value }">
          {{record.name + record.age}}
        </span>
    </TestTable>
  </div>
</template>

<script lang="ts">
import TestTable from '../src/table/table.vue'
import { defineComponent, ref } from '@vue/composition-api'

import { TColumns, DEFAULT_TDATA } from './const';

export default defineComponent({
  name: 'App',
  components: {
    TestTable
  },
  setup() {
    const tcolumns = ref(TColumns)
    const tdata = ref(DEFAULT_TDATA)

    return { tcolumns, tdata }
  }
})
</script>
