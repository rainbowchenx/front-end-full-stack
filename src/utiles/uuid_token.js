// 单例
import {v4 as uuidv4} from 'uuid';
export const getUUID=()=>{
    // 先看本地存储是否有
    let uuid_token = localStorage.getItem('UUINTOKEN')
    // 如果没有则生成
    if(!uuid_token){
        // 生成临时身份
        uuid_token = uuidv4();
        localStorage.setItem('UUINTOKEN', uuid_token)
    }
    return uuid_token
}