<template>
    <!-- 表头 -->
    <tr>
        <th v-for="({ key, title }) in columns"
            :key="key"
            @click="onSort(key)">
            <slot :name="key">
                {{ title }}
            </slot>
        </th>
    </tr>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { HeadProps } from './const'

export default defineComponent({
    name: 'TableHead',
    props: HeadProps,
    setup(props, { emit }) {
        function onSort() {
            emit('sort')
        }

        return {
            onSort
        }
    }
})
</script>
