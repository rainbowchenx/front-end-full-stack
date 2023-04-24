import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
Vue.config.productionTip = false
// 引入mock数据
import "@/mock/mockServe"
// 引入swiper样式
import "swiper/css/swiper.css"
// 引入vuex仓库
import store from './store'
// 全局组件，三级联动组件,直接使用
import TypeNav from './components/TypeNav'
// 全局组件轮播图
import Carsousel from '@/components/Carousel'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)

new Vue({
  // 注册路由,所有组件都拥有$route和$router
  store,
  router,
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
