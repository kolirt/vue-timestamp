import type { Plugin } from 'vue'

import { startTimer } from './state'

export function createTimestamp(): Plugin {
  return {
    install() {
      startTimer()
    }
  }
}
