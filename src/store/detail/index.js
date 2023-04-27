import {reqGoodsInfo,reqAddOrUpdateCart} from "@/api"
const state={
    goodInfo:{}

}
const actions={
    async getGoodInfo({commit}, skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit("GETGOODINFO",result.data)
        }
    },
    // 产品添加到购物车中
     //加入购物车|将来修改商品个数的地方,右侧是载荷对象【两个K,两个V】
     async addOrUpdateCart({ state, commit, dispatch }, { skuId, skuNum }) {
        //底下即为：加入购物车(修改商品个数)的请求,参数顺序不能瞎写
        let result = await reqAddOrUpdateCart(skuId, skuNum);

        if (result.code == 200) {
             //如果加入购物车成功,返回promise即为成功
             return "ok";
        } else {
             //如果加入购物车失败，返回失败的Promise
             return Promise.reject();
        }

   }
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    },
}
const getters={
    // 导航条简化
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    // 详情数据简化
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖属性简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || {};
    },
}
export default {
    state,
    actions,
    mutations,
    getters
}