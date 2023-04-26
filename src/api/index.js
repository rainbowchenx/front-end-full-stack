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
// 获取首页下方轮播图数据
export const reqFloorList=()=>{
    return mockRequests.get('/floor');
}
// 获取搜索页面数据/api/list post 有参数，很多参数
export const reqGetSearchInfo=(params)=>{
    return requests({
        url:'/list',
        method:'post',
        data:params
    
    })
}
// 获取产品详情信息的接口

export const reqGoodsInfo=(skuid)=>{
    return requests({
        url:`/item/${skuid}`,
        method:'get',
    })
}
