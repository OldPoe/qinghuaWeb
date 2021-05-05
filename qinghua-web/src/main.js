import { createApp } from 'vue'
import App from './App.vue'
// import './plugins/element.js'
// import ElementUI from 'element-ui'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import store from './store'

// App.use(ElementUI)
// createApp(App).use(store).use(router)
//     .use(ElementPlus)
//     .mount('#app')

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')