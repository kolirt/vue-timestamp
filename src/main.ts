import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'

import { createTimestamp } from '../lib'

const app = createApp(App)

app.use(createTimestamp())

app.mount('#app')
