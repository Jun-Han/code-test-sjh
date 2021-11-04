<template>
    <!-- 分页器 -->
      <div class="comp-pagination">
          <span> 总数：{{ total }} </span>
          <button @click="onPagePre">上一页</button>
          <span> {{ pageIndex }} </span>
          <button @click="onPageNext">下一页</button>
          <span> 每页：{{ pageSize }} 条</span>
      </div>
</template>

<script>
import { defineComponent, ref, watchEffect } from '@vue/composition-api'
import { paginationProps, defaultPageIndex, defaultTotal, defaultPageSize } from './const'

export default defineComponent({
    name: 'Pagination',  
    props: paginationProps,
    setup(props, { emit }) {

        /** 页码 */
        let pageIndex = ref(defaultPageIndex)

        /** 总数 */
        let total = ref(defaultTotal)

        /** 每页条数 */
        let pageSize = ref(defaultPageSize)

        watchEffect(() => {
            pageIndex.value = props.options?.pageIndex
            pageSize.value = props.options?.pageSize
            total.value = props.options?.total
        })

        /** 上一页 */
        function onPagePre() {

            //往前翻最多翻到第一页
            (pageIndex.value > 1) && pageIndex.value--
            emit('page-change', pageIndex.value)
        }

        /** 下一页 */
        function onPageNext() {

            //往后翻页不能超出最大页数
            if((Number.isInteger(pageSize.value) && pageSize.value > 0) && pageIndex.value < total.value/pageSize.value) {
                pageIndex.value++
                emit('page-change', pageIndex.value)
            }
        }

        return {
            pageIndex,
            total,
            pageSize,
            onPagePre,
            onPageNext
        }
    }
})
</script>

<style lang="less">
.comp-pagination {
    button {
        border: 1px solid #ccc;
    }
}
</style>

