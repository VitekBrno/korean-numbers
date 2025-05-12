import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { i18n } from '@/i18n'
import '@/style.css'
import App from '@/App.vue'

const app = createApp(App)

app
  .use(createPinia())
  .use(i18n)
  .mount('#app')