import Vue from "vue";
import vuex  from "vuex";
Vue.use(vuex)

import home from './home'
import search from './search'
// 详情页面的数据仓库
import detail from "./detail";
import shopcart from "./shopcart";
// 导入登录和注册的残酷
import user from "./login_register/index"
// 引入trade信息
import trade from "./trade";

export default new vuex.Store({

    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})