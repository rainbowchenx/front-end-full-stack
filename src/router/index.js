// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
// 拆分成模块形式
import routes from "./routes";

export default new VueRouter({
    routes,
    // 滚动条位置，始终再最上方
    scrollBehavior(to,from,savedPosition){
        return {y:0}
    }
})