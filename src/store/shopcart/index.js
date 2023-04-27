import {reqCartList,reqDeleteCartById} from "@/api"
const state={
    cartList:[]
}
const actions={
    // 获取购物车的某一个产品
     async getCartList({commit}){
        let result = await reqCartList()
        if(result==200){
            commit("GETCARTLIST",result.data)
        }
    },
    // 删除购物车的产品，没有返回结果数据
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result==200){
            return "ok"
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList
    }

}
const getters={
    cartList(state){
        return state.cartList[0] || {}
    },

}
export default {
    state,
    actions,
    mutations,
    getters
}