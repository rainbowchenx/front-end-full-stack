import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from '@/pages/ShopCart'
import Trade from "@/pages/Trade"
export default[
    {
        
        path:'/home',
        component:Home,
        meta:{show:true},
    },
    {
        path:'/login',
        component:Login,
        meta:{show:false},
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false},
    },
    {
        path:'/search/:keyword?',
        component:Search,
        meta:{show:true},
        name:"search"
    },
    {
        path:'*',
        redirect:'/home',
    },
    {
        path:"/detail/:skuId?",
        component:Detail,
        meta:{show:true},
        

    },
    // 购物车组件路由
    {
        name:"shopcart",
        path:"/shopcart",
        component:ShopCart,
        meta:{show:true},
        

    },
    // 添加购物车成功路由组件
    {
        name:"addcartsuccess",
        path:"/addcartsuccess",
        component:AddCartSuccess,
        meta:{show:true},
    },
    // 结算页面路由
    {
        name:"trade",
        path:"/trade",
        component:Trade,
        meta:{show:true},
    }


]