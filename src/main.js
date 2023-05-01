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
// 分页器
import Pagination from '@/components/Pagination'
// 统一接收文件夹中所有的api
import * as API from "@/api";
import { Button,MessageBox } from 'element-ui'
// import ElementUI from 'element-ui';
// Vue.use(ElementUI)
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
// 支付页面弹窗
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

new Vue({
  // 注册路由,所有组件都拥有$route和$router
  store,
  router,
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
}).$mount('#app')
