import type { PropType } from 'vue-types/dist/types' 
import { TableColumn } from './types'

/** 表头Props */
export const HeadProps = {
    columns: {
        type: Array as PropType<TableColumn[]>,
        default: () => [],
        required: true
    }
}