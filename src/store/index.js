import Vue from "vue";
import vuex  from "vuex";
Vue.use(vuex)

import home from './home'
import search from './search'
// 详情页面的数据仓库
import detail from "./detail";
import shopcart from "./shopcart";

export default new vuex.Store({

    modules:{
        home,
        search,
        detail,
        shopcart
    }
})