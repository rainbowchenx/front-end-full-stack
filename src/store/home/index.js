import Vue from "vue";
import vuex  from "vuex";
Vue.use(vuex)
import {reqCategoryList,reqGetBannerList,reqFloorList,reqNewsList} from '@/api'


const state={
    categoryList:[],
    bannerList:[],
    floorList:[],
    newList:{}
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
   },
//    获得新闻
   async getNewsList({commit}){
    let result = await reqNewsList();
    if(result.code===200){
        commit("GETNEWSLIST",result.data.data)
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
    },
    GETNEWSLIST(state,newList){
        state.newList=newList
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