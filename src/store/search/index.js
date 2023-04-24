import {reqGetSearchInfo} from "@/api/index"
const state={
    searchList:{}
}
const actions={
    async getSearchList({commit},params={}){
        let result =  await reqGetSearchInfo(params)
        if(result.code === 200){
            commit("GETSEARCHLIST",result.data)
        }
    }
}
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList

    }
}
// 计算属性，主要作用是简化仓库中的数组,方便后期获取
const getters={
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}