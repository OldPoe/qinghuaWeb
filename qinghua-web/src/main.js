import { createApp } from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

App.use(Element)
createApp(App).use(store).use(router).mount('#app')
