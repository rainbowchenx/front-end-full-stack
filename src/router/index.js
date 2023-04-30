// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 拆分成模块形式
import routes from "./routes";
import store from "@/store";
// let originPush = VueRouter.prototype.push
// let originReplace = VueRouter.prototype.replace
// VueRouter.prototype.push = function(location,resolve,reject){

// };
// VueRouter.prototype.replace = function(location,resolve,reject){

// };


let router = new VueRouter({
    routes,
    // 滚动条位置，始终再最上方
    scrollBehavior(to,from,savedPosition){
        return {y:0}
    }
})
// 全局前置首位
router.beforeEach(async (to,from,next)=>{
    // /用户登陆后才会有token
    let token = store.state.user.token
    let name = store.state.user.userInfo
    if(token){
        // 无法去login页面
        if(to.path == '/login'){
            next('/home')
        }else{
            // 登录了，去的不是login,确保有用户信息，没有i的话派发捞信息
            if(name){
              next()  
            }else{
                // 派发信息存储用户信息并存储
                try {

                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // token失效了，要清除token，指向login
                    await store.dispatch('userLogout');
                    next('/login')
                }
               
            }
            
        }
    }else{
        // 未登录
        next()
    }
});
export default router;