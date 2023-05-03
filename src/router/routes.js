// 使用路由懒加载直接动态导入
// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Search from '@/pages/Search'
// import Register from '@/pages/Register'
// import Detail from "@/pages/Detail"
// import AddCartSuccess from "@/pages/AddCartSuccess"
// import ShopCart from '@/pages/ShopCart'
// import Trade from "@/pages/Trade"
// import Pay from "@/pages/Pay"
// import PaySuccess from "@/pages/PaySuccess"
// import Center from "@/pages/Center"

// // 引入二级路由组件
// import MyOrder from "@/pages/Center/myOrder"
// import GroupOrder from "@/pages/Center/groupOrder"
export default[
    {
        
        path:'/home',
        component:()=>import("@/pages/Home"),
        meta:{show:true},
    },
    {
        path:'/login',
        // component:Login,//使用路由懒加载替换
        component:()=>import("@/pages/Login"),
        meta:{show:false},
    },
    {
        path:'/register',
        component:()=>import("@/pages/Register"),
        meta:{show:false},
    },
    {
        path:'/search/:keyword?',
        component:()=>import("@/pages/Search"),
        meta:{show:true},
        name:"search"
    },
    {
        path:'*',
        redirect:'/home',
    },
    {
        path:"/detail/:skuId?",
        component:()=>import("@/pages/Detail"),
        meta:{show:true},
        

    },
    // 购物车组件路由
    {
        name:"shopcart",
        path:"/shopcart",
        component:()=>import("@/pages/ShopCart"),
        meta:{show:true},
        

    },
    // 添加购物车成功路由组件
    {
        name:"addcartsuccess",
        path:"/addcartsuccess",
        component:()=>import("@/pages/AddCartSuccess"),
        meta:{show:true},
    },
    // 结算页面路由
    {
        name:"trade",
        path:"/trade",
        component:()=>import("@/pages/Trade"),
        meta:{show:true},
        // 独享路由守卫
        // 去交易页面必须是从购物车而来
        beforeEnter: (to, from, next) => {
            if(from.path == "/shopcart"){
                next();
            }else{
                next(false)//从哪儿来回哪儿去

            }
        }
    },
    // 支付静态页面
    {
        name:"pay",
        path:"/pay",
        component:()=>import("@/pages/Pay"),
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path=="/trade"){
                next()
            }else{
                next(false)
            }
        }
    },
    // 支付成功页面
    {
        name:"paysuccess",
        path:"/paysuccess",
        component:()=>import("@/pages/PaySuccess"),
        meta:{show:true},
    },
    // 个人中心路由
    {
        name:"center",
        path:"/center",
        component:()=>import("@/pages/Center"),
        meta:{show:true},
        // 二级路由
        children:[
            {
                path:"myorder",
                component:()=>import("@/pages/Center/myOrder"),
            },
            {
                path:"grouporder",
                component:()=>import("@/pages/Center/groupOrder"),

            },
            {
                path:"/center",
                redirect:'/center/myorder'
            }
        ]
    }


]