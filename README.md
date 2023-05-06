# vue-all-manage

## Project introduction
```
基于ES6+,vue2，vuex,vue-router,axios, mockjs，webpack，element ui（vue-cil）的仿京东电商平台（SPA）（包括前台和后台）
内容包括：首页，搜索页，商品详情，购物车，订单，支付，用户注册登录等多个模块
基础功能包括：轮播图，分页器，点击跳转等（全部手写，不使用element等组件库）
优化包括：首屏加载，路由懒加载，防抖节流等

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 功能展示

![image](https://github.com/rainbowchenx/front-end-full-stack/blob/main/picture-forshow/full-page-show.gif)
![image](https://github.com/rainbowchenx/front-end-full-stack/blob/main/picture-forshow/pagination.gif)
![image](https://github.com/rainbowchenx/front-end-full-stack/blob/main/picture-forshow/zoom.gif)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
vue-all-manage
├── README.md
├── babel.config.js
├── dist
│   ├── css
│   │   ├── 116.e3162b31.css
│   │   ├── 182.077b43ac.css
│   │   ├── 369.9b9fa124.css
│   │   ├── 382.90477316.css
│   │   ├── 476.832d9cd5.css
│   │   ├── 56.3e6deb08.css 
│   │   ├── 61.e674e394.css 
│   │   ├── 638.8aca36c3.css
│   │   ├── 74.f2f51777.css 
│   │   ├── 893.1fa66637.css
│   │   ├── 905.607fda9e.css
│   │   ├── app.6ac9a49f.css
│   │   └── chunk-vendors.b517dc25.css
│   ├── favicon.ico
│   ├── fonts
│   │   ├── element-icons.f1a45d74.ttf
│   │   └── element-icons.ff18efd1.woff
│   ├── images
│   │   ├── banner1.jpg
│   │   ├── banner2.jpg
│   │   ├── banner3.jpg
│   │   ├── banner4.jpg
│   │   ├── floor-1-1.png
│   │   ├── floor-1-2.png
│   │   ├── floor-1-3.png
│   │   ├── floor-1-4.png
│   │   ├── floor-1-5.png
│   │   ├── floor-1-6.png
│   │   ├── floor-1-b01.png
│   │   ├── floor-1-b02.png
│   │   └── floor-1-b03.png
│   ├── img
│   │   ├── 1.78df775a.jpg
│   │   ├── R.3df1cf15.gif
│   │   ├── ad1.38c4f5fc.png
│   │   ├── icons.8839de53.png
│   │   ├── intro01.b137e97c.png
│   │   ├── intro02.30c2dac4.png
│   │   ├── intro03.db8b7103.png
│   │   ├── l-m01.cd15b468.png
│   │   ├── like_01.2dc17983.png
│   │   ├── loginbg.b44ab5c6.png
│   │   ├── logo.d600ca2b.png
│   │   ├── today02.706a83e0.png
│   │   ├── today03.c658751c.png
│   │   ├── today04.d4c8fc78.png
│   │   └── wx_cz.5d92bf53.jpg
│   ├── index.html
│   ├── js
│   │   ├── 114.041d675e.js
│   │   ├── 116.8f075419.js
│   │   ├── 182.a2059392.js
│   │   ├── 369.a221098e.js
│   │   ├── 382.c03e345d.js
│   │   ├── 476.78ae5ee2.js
│   │   ├── 56.4b0c7d2b.js
│   │   ├── 61.0d4c77f7.js
│   │   ├── 638.5b4192f0.js
│   │   ├── 74.6dc5689b.js
│   │   ├── 784.6e4bc4d1.js
│   │   ├── 893.45bb8b87.js
│   │   ├── 905.ac634ea9.js
│   │   ├── app.d9f2c165.js
│   │   └── chunk-vendors.cac132f6.js
│   └── reset.css
├── jsconfig.json
├── package-lock.json
├── package.json
├── picture-forshow
│   ├── full-page-show.gif
│   ├── pagination.gif
│   └── zoom.gif
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── banner1.jpg
│   │   ├── banner2.jpg
│   │   ├── banner3.jpg
│   │   ├── banner4.jpg
│   │   ├── floor-1-1.png
│   │   ├── floor-1-2.png
│   │   ├── floor-1-3.png
│   │   ├── floor-1-4.png
│   │   ├── floor-1-5.png
│   │   ├── floor-1-6.png
│   │   ├── floor-1-b01.png
│   │   ├── floor-1-b02.png
│   │   └── floor-1-b03.png
│   ├── index.html
│   └── reset.css
├── src
│   ├── App.vue
│   ├── api
│   │   ├── index.js
│   │   ├── mockAjax.js
│   │   └── request.js
│   ├── assets
│   │   ├── images
│   │   │   ├── R.gif
│   │   │   └── icons.png
│   │   └── logo.png
│   ├── components
│   │   ├── Carousel
│   │   │   └── index.vue
│   │   ├── Footer
│   │   │   ├── images
│   │   │   │   └── wx_cz.jpg
│   │   │   └── index.vue
│   │   ├── Header
│   │   │   ├── images
│   │   │   │   └── logo.png
│   │   │   └── index.vue
│   │   ├── Pagination
│   │   │   └── index.vue
│   │   └── TypeNav
│   │       └── index.vue
│   ├── main.js
│   ├── mock
│   │   ├── banner.json
│   │   ├── erweima.json
│   │   ├── floor.json
│   │   ├── mockServe.js
│   │   └── news.json
│   ├── pages
│   │   ├── AddCartSuccess
│   │   │   └── index.vue
│   │   ├── Center
│   │   │   ├── groupOrder
│   │   │   │   └── index.vue
│   │   │   ├── images
│   │   │   │   ├── delete.png
│   │   │   │   ├── goods.png
│   │   │   │   ├── itemlike01.png
│   │   │   │   ├── itemlike02.png
│   │   │   │   ├── itemlike03.png
│   │   │   │   ├── itemlike04.png
│   │   │   │   ├── itemlike05.png
│   │   │   │   └── itemlike06.png
│   │   │   ├── index.vue
│   │   │   └── myOrder
│   │   │       └── index.vue
│   │   ├── Detail
│   │   │   ├── ImageList
│   │   │   │   └── ImageList.vue
│   │   │   ├── Zoom
│   │   │   │   └── Zoom.vue
│   │   │   ├── images
│   │   │   │   ├── cross.png
│   │   │   │   ├── dp01.png
│   │   │   │   ├── dp02.png
│   │   │   │   ├── dp03.png
│   │   │   │   ├── dp04.png
│   │   │   │   ├── intro01.png
│   │   │   │   ├── intro02.png
│   │   │   │   ├── intro03.png
│   │   │   │   ├── itemlike01.png
│   │   │   │   ├── itemlike02.png
│   │   │   │   ├── itemlike03.png
│   │   │   │   ├── itemlike04.png
│   │   │   │   ├── itemlike05.png
│   │   │   │   ├── itemlike06.png
│   │   │   │   ├── l-m01.png
│   │   │   │   ├── list.png
│   │   │   │   ├── part01.png
│   │   │   │   ├── part02.png
│   │   │   │   ├── part03.png
│   │   │   │   ├── s1.png
│   │   │   │   ├── s2.png
│   │   │   │   ├── s3.png
│   │   │   │   └── toolbars.png
│   │   │   └── index.vue
│   │   ├── Home
│   │   │   ├── Brand
│   │   │   │   ├── images
│   │   │   │   │   ├── brand_03.png
│   │   │   │   │   ├── brand_05.png
│   │   │   │   │   ├── brand_07.png
│   │   │   │   │   ├── brand_09.png
│   │   │   │   │   ├── brand_11.png
│   │   │   │   │   ├── brand_13.png
│   │   │   │   │   ├── brand_15.png
│   │   │   │   │   ├── brand_17.png
│   │   │   │   │   ├── brand_19.png
│   │   │   │   │   └── brand_21.png
│   │   │   │   └── index.vue
│   │   │   ├── Floor
│   │   │   │   ├── images
│   │   │   │   │   ├── floor-1-1.png
│   │   │   │   │   ├── floor-1-2.png
│   │   │   │   │   ├── floor-1-3.png
│   │   │   │   │   ├── floor-1-4.png
│   │   │   │   │   ├── floor-1-5.png
│   │   │   │   │   ├── floor-1-6.png
│   │   │   │   │   ├── floor-1-b01.png
│   │   │   │   │   ├── floor-1-b02.png
│   │   │   │   │   └── floor-1-b03.png
│   │   │   │   └── index.vue
│   │   │   ├── Like
│   │   │   │   ├── images
│   │   │   │   │   ├── icons.png
│   │   │   │   │   ├── like_01.png
│   │   │   │   │   ├── like_02.png
│   │   │   │   │   └── like_03.png
│   │   │   │   └── index.vue
│   │   │   ├── ListContainer
│   │   │   │   ├── images
│   │   │   │   │   ├── ad1.png
│   │   │   │   │   ├── banner1.jpg
│   │   │   │   │   ├── banner2.jpg
│   │   │   │   │   ├── banner3.jpg
│   │   │   │   │   ├── banner4.jpg
│   │   │   │   │   └── icons.png
│   │   │   │   └── index.vue
│   │   │   ├── Rank
│   │   │   │   ├── images
│   │   │   │   │   ├── 1.jpg
│   │   │   │   │   └── bg0.png
│   │   │   │   └── index.vue
│   │   │   ├── Recommend
│   │   │   │   ├── images
│   │   │   │   │   ├── clock.png
│   │   │   │   │   ├── today01.png
│   │   │   │   │   ├── today02.png
│   │   │   │   │   ├── today03.png
│   │   │   │   │   └── today04.png
│   │   │   │   └── index.vue
│   │   │   └── index.vue
│   │   ├── Login
│   │   │   ├── QRcode
│   │   │   │   └── index.vue
│   │   │   ├── images
│   │   │   │   ├── ali.png
│   │   │   │   ├── loginbg.png
│   │   │   │   ├── qq.png
│   │   │   │   ├── sina.png
│   │   │   │   ├── weixin.png
│   │   │   │   └── wx_cz.jpg
│   │   │   └── index.vue
│   │   ├── News
│   │   │   └── index.vue
│   │   ├── Pay
│   │   │   ├── images
│   │   │   │   ├── icon.png
│   │   │   │   ├── pay1.jpg
│   │   │   │   ├── pay10.jpg
│   │   │   │   ├── pay11.jpg
│   │   │   │   ├── pay12.jpg
│   │   │   │   ├── pay13.jpg
│   │   │   │   ├── pay14.jpg
│   │   │   │   ├── pay15.jpg
│   │   │   │   ├── pay16.jpg
│   │   │   │   ├── pay17.jpg
│   │   │   │   ├── pay18.jpg
│   │   │   │   ├── pay19.jpg
│   │   │   │   ├── pay2.jpg
│   │   │   │   ├── pay20.jpg
│   │   │   │   ├── pay21.jpg
│   │   │   │   ├── pay22.jpg
│   │   │   │   ├── pay3.jpg
│   │   │   │   ├── pay4.jpg
│   │   │   │   └── pay5.jpg
│   │   │   └── index.vue
│   │   ├── PaySuccess
│   │   │   ├── images
│   │   │   │   └── right.png
│   │   │   └── index.vue
│   │   ├── Register
│   │   │   └── index.vue
│   │   ├── Search
│   │   │   ├── SearchSelector
│   │   │   │   ├── SearchSelector.vue
│   │   │   │   └── images
│   │   │   │       ├── phone01.png
│   │   │   │       ├── phone02.png
│   │   │   │       ├── phone06.png
│   │   │   │       ├── phone07.png
│   │   │   │       ├── phone08.png
│   │   │   │       ├── phone09.png
│   │   │   │       ├── phone10.png
│   │   │   │       ├── phone11.png
│   │   │   │       ├── phone12.png
│   │   │   │       └── phone14.png
│   │   │   ├── images
│   │   │   │   ├── like_01.png
│   │   │   │   ├── like_02.png
│   │   │   │   ├── like_03.png
│   │   │   │   ├── like_04.png
│   │   │   │   ├── mobile01.png
│   │   │   │   ├── mobile02.png
│   │   │   │   ├── mobile03.png
│   │   │   │   ├── mobile04.png
│   │   │   │   ├── mobile05.png
│   │   │   │   └── mobile06.png
│   │   │   └── index.vue
│   │   ├── ShopCart
│   │   │   ├── images
│   │   │   │   ├── goods1.png
│   │   │   │   ├── goods2.png
│   │   │   │   └── goods3.png
│   │   │   └── index.vue
│   │   └── Trade
│   │       ├── images
│   │       │   ├── choosed.png
│   │       │   └── goods.png
│   │       └── index.vue
│   ├── plugins
│   │   ├── myPlugins.js
│   │   └── validate.js
│   ├── router
│   │   ├── index.js
│   │   └── routes.js
│   ├── store
│   │   ├── detail
│   │   │   └── index.js
│   │   ├── home
│   │   │   └── index.js
│   │   ├── index.js
│   │   ├── login_register
│   │   │   └── index.js
│   │   ├── search
│   │   │   └── index.js
│   │   ├── shopcart
│   │   │   └── index.js
│   │   └── trade
│   │       └── index.js
│   └── utiles
│       ├── token.js
│       └── uuid_token.js
└── vue.config.js

```