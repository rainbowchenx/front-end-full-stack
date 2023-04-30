// 登录与注册的模块
import {reqGetCode,reqUserRegister,reqUserLogin, reqUserInfo} from "@/api"
const state={
    code:'',
    token:'',
    userInfo:{}

}
const actions={
    // 获取验证码
    async getCode({commit},phone){
       let result =  await reqGetCode(phone);
       if(result.code==200){
        commit("GETCODE",result.data)
        return "ok"
       }else{
        return Promise.reject(new Error( "faile"));
       }

    },
    // 用户的注册
    async useRegister({commit}, user){
     let result =  await  reqUserRegister(user)
     if(result.code==200){
        return "ok"
     }else{
        return Promise.reject(new Error('faile'))
     }
    },
    // 用户登录
    async userLogin({commit},data){
        let result = await reqUserLogin(data)
        // console.log(result)
        if(result.code==200){
            commit("USERLOGIN",result.data.token)
            return "ok"
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 获取用户信息,在token下
    async getUserInfo({commit}){
        let result =  await reqUserInfo()
        console.log(result)
        if(result.code==200){
            commit("GETUSERINFO",result.data)
            return "ok"
        }else{
            return Promise.reject(new Error('获取用户信息失败'))
        }
    }
    

}
const mutations={
    GETCODE(state,code){
        state.code = code
    },
    // 存储token
    USERLOGIN(state,token){
        state.token = token

    },
    // 存储用户token,在请求头中,以及相关信息
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    }
}
const getters={}
export default {
    state,
    actions,
    mutations,
    getters
}