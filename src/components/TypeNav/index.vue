<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过度动画 -->
        <!-- 三级联动 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 事件委派加编程时导航 -->
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex === index }"
              >
                <h3 @mouseenter="changeIndex(index)" >
                  <a :data-categoryName="c1.categoryName" :data-category1Id ="c1.categoryId">{{ c1.categoryName }}</a>
                  <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
                </h3>
                <!-- 二、三级联动 -->
                <div class="item-list clearfix" :style="{display: currentIndex==index?'block':'none'}">
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a  :data-categoryName="c2.categoryName" :data-category2Id ="c2.categoryId">{{ c2.categoryName }}</a>
                        <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a  :data-categoryName="c3.categoryName" :data-category3Id ="c3.categoryId">{{ c3.categoryName }}</a>
                          <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 回调函数不要用箭头，会出现上下文
import throttle from "lodash/throttle"//按需引入

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1, //指示三级联动的最大一级的索引值
      show:true,
    };
  },
  // 组件挂载完毕，发送请求，数据存储于仓库中
  created() {
    // this.$store.dispatch("categoryList");移动到app中可以
    // 组件挂载完毕show属性改变,怕【判断路由
    if(this.$route.path !== '/home'){
      this.show =false
    }
    
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList.slice(0,16);
      },
    }),
  },
  methods: {
    // 用于修改鼠标移入的三级联动动态颜色,加上节流
    changeIndex:throttle(function(index){
      this.currentIndex = index;
    },50),
    // 控制鼠标移出后的效果
    leaveShow() {
       this.currentIndex = -1;
      if(this.$route.path !== '/home'){  
      this.show = false
      }

    },
    goSearch(event){
      // 第一个用于区分是否是a标签，其他的用于区分是否是a标签下的一、二、三级标签
      let element = event.target
      let {categoryname, category1id,category2id,category3id} = element.dataset
      if(categoryname){
        let location = {name:'search'}
        let query = {categoryName:categoryname};

        if(category1id){
          query.category1Id = category1id

        }else if(category2id){
          query.category2Id = category2id

        }else if(category3id){
          query.category3Id = category3id

        }
        // 如果路由跳转带有params参数，要仪器带过去
        if(this.$route.params){
          // 整理合并参数
          location.params = this.$route.params
          location.query=query
        // 路由的跳转
        this.$router.push(location)
        }
        
        

      }
    },
    // 鼠标移入时展示商品分类列表
    enterShow(){
      this.show = true
    }
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 33px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    .sort-enter{
      height: 0px;
    }
    .sort-enter-to{
      height: 461px;
    }
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>