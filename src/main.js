import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/utils.css'
import request from '@/api/request.js'
Vue.prototype.axios=request
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
