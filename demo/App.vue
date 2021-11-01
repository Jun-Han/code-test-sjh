<template>
  <div>
    <!-- 基础使用，默认为本地表格 -->
    <p> 基础使用 </p>
    <test-table :columns="tcolumns"
                :data="tdata" 
                :pagination="{
                  pageSize: 5,
                  pageIndex: 1
               }">

        <!-- 自定义表头 -->
        <template #head-name>
          自定义表头：姓名
        </template>

        <!-- 自定义表格内容单元格 -->
        <template #opr="{ value }">
          <a href="">删除：{{value }}</a>
        </template>
    </test-table>

    <!-- 自定义内容单元格
    <p> 自定义内容单元格 </p>
    <test-table :columns="tcolumns"
                :data="tdata">
        <template #name="{ record, value }">
          {{ value + record.age  }}
        </template>
    </test-table>

    <!-- 不需要分页 -->
    <!-- <p> 不需要分页 </p> -->
    <!-- <test-table :options="{
                  isNeedPagination: false
               }"
               :columns="tcolumns"
               :data="tdata" /> -->

    <!-- 配置指定排序的字段 -->
    <!-- <p> 配置指定排序的字段 </p>
    <test-table :sort="{
                  sortField: 'age',
                  sortDirection: 'des'
               }"
               :columns="tcolumns"
               :data="tdata" /> -->

    <!-- 配置分页 -->
    <!-- <p> 配置分页 </p>
    <test-table :pagination="{
                  total: 131,
                  pageSize: 10,
                  pageIndex: 5
               }"
               :columns="tcolumns"
               :data="tdata" />  -->

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

<style scoped>
p{
  margin-top: 50px;
}
</style>
