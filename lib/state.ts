import moment from 'moment'
import { computed, reactive } from 'vue'

const state = reactive({
  timestamp: moment().unix()
})

export function startTimer() {
  setTimeout(() => {
    state.timestamp = moment().unix()
    startTimer()
  }, 1_000)
}

export const timestamp = computed(() => state.timestamp)
