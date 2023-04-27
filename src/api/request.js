// 对于axios进行二次封装
import axios from 'axios';
// 引入进度条，发起请求时使用start和done
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'
// 利用axios的对象的方法create，去创建一个axios实例
const requests = axios.create({
    baseURL:'/api',
    timeout:5000,
});
// 在当前模块中引入store
import store from '@/store';
// q请求拦截器
requests.interceptors.request.use((config)=>{
    console.log(store)
    // config配置对象，header请求头很重要
    nProgress.start()//发起请求前开始进度条
    if(store.state.detail.uuid_token){
        // 给请求头添加字段userTempId固定的，不能改
        config.headers.userTempId = store.state.detail.uuid_token
    }
    return config
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    nProgress.done()
    return res.data
},()=>{
    // return Promise.reject(new Error('faile'));
    return
    
})

export default requests