import {reqGoodsInfo} from "@/api"
const state={
    goodInfo:{}

}
const actions={
    async getGoodInfo({commit}, skuid){
        let result = await reqGoodsInfo(skuid)
        if(result.code == 200){
            commit("GETGOODINFO",result.data)
        }
    }
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
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