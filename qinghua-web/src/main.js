import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
// import './plugins/element.js'
// import ElementUI from 'element-ui'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'



const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')