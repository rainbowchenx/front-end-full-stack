import {reqCartList,reqDeleteCartById,reqUpdateCheckedById} from "@/api"
const state={
    cartList:[],
}
const actions={
    // 获取购物车的某一个产品
     async getCartList({commit}){
        let result = await reqCartList()
        if(result.code==200){
            commit("GETCARTLIST",result.data)
        }
    },
    // 删除购物车的产品，没有返回结果数据
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result.code==200){
            return "ok"
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改购物车某一东西的状态,无返回数据
    async updateCheckedBtId({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return "ok"
        }else{
            return Promise.reject("faile")
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