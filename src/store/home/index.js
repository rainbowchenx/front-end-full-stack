import Vue from "vue";
import vuex  from "vuex";
Vue.use(vuex)
import {reqCategoryList,reqGetBannerList} from '@/api'


const state={
    categoryList:[],
    bannerList:[]
}
const actions={
   async categoryList({commit}){
         let result = await reqCategoryList();
         if(result.code===200){
            commit("CATEGORYLIST",result.data)
         }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code===200){
           commit("BANNERLIST",result.data)
        }
   }
    
}
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList =categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
}
const getters={}
export default ({
    state,
    actions,
    mutations,
    getters,
})