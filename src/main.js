import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
Vue.config.productionTip = false
// 全局组件，三级联动组件,直接使用
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name, TypeNav)


new Vue({
  // 注册路由,所有组件都拥有$route和$router
  router,
  render: h => h(App),
}).$mount('#app')
