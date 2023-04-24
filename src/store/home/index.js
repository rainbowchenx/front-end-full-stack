import Vue from "vue";
import vuex  from "vuex";
Vue.use(vuex)
import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'


const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
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
   },
   async getFloorList({commit}){
    let result = await reqFloorList();
    if(result.code===200){
        commit("GETFLOORLIST",result.data)
     }
   }
    
}
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList =categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const getters={
}
export default ({
    state,
    actions,
    mutations,
    getters,
})