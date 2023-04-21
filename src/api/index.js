// 所有api接口的统一管理
import requests from "./request";
import mockRequests from './mockAjax'; 
// 三级联动的接口
// /api/product/getBaseCategoryList   GET  无参数
export const reqCategoryList=()=>{
    // 返回promise对象
    return requests({url:'/product/getBaseCategoryList',method:'get'})
    // requests({url:'/product/getBaseCategoryList',method:'get'})
    
}
// 虚拟数据获取轮播首页图
export const reqGetBannerList=()=>{
    return mockRequests.get('/banner');
}

