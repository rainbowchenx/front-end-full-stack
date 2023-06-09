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
// 获取新闻数据
export const reqNewsList=()=>{
    return mockRequests.get('/news');
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

export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'});
// 添加到购物车,或者获得修改已有商品的数量

export const reqAddOrUpdateCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});
// 获取购物车的数据
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'});
// 删除购物车产品的接口\
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});
// 修改产品状态，是否勾选
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});
// 获取验证码的请求
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});
// 用户注册的接口
export const reqUserRegister = (data)=>requests({url:'/user/passport/register/',data:data,method:'post'});
// 登录
export const reqUserLogin = (data)=>requests({url:'/user/passport/login/',data:data,method:'post'});
// 获取登录后的用户信息,带着token向用户要信息,i请求头
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});
// 登出
export const reqLogout = ()=>requests({url:'/user/passport/logout',method:'get'});
// 获取用户地址信息
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});
// 获取订单交易页面信息
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});
// 提交订单,参数分别由query和data传递
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});
// 获取订单支付信息
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});
// 获取订单支付状态
export const reqPayState = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});
// 获取我的订单列表
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});

