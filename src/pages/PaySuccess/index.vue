<template>
  <div class="paysuccess">

    <div class="success">
      <h3>
        <img src="./images/right.png" width="48" height="48">
        恭喜您，支付成功啦！
      </h3>
      <div class="paydetail">
        <p class="button">
          <router-link class="btn-look" to="/center">查看订单</router-link>
          <router-link class="btn-goshop" to="/">继续购物</router-link>
          <Rating :value="1" />
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import Rating from "./rate/index.vue"
  export default {
    name: 'PaySuccess',
    components:{
      Rating,
    },
    // 组件内守护
    beforeRouteEnter (to, from, next) {
      // 不能获取组件实例
      if(from.path=='/pay'){
        next()
      }else{
        next(false)
      }
    },
    // 当前路由改变但是该组件被复用时，如占位参数的改变，foo/1=>foo/2
    // beforeRouteUpdate (to, from, next) {
    //   // 不能获取组件实例
    //   if(from.path=='/pay'){
    //     next()
    //   }else{
    //     next(false)
    //   }
    // }
  }
</script>

<style lang="less" scoped>
  .paysuccess {
    margin: 20px auto;
    padding: 25px;
    border: 1px solid rgb(211, 211, 211);
    width: 1200px;
    width: 1148px;

    .success {
      width: 500px;
      margin: 0 auto;

      h3 {
        margin: 20px 0;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;

        img {
          max-width: 100%;
          vertical-align: middle;
          border: 0;
          margin-right: 14px;
        }
      }

      .paydetail {
        margin-left: 66px;
        font-size: 15px;

        .button {
          margin: 30px 0;
          line-height: 26px;

          a {
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            border-radius: 2px;
            user-select: none;
            font-size: 18px;
            padding: 4px 20px;
            line-height: 22px;
            text-decoration: none;

            &.btn-look {
              margin-right: 13px;
              color: #fff;
              background-color: #e1251b;
              border: 1px solid #e1251b;
            }

            &.btn-goshop {
              color: #666;
              background-color: #eee;
              border: 1px solid #e1e1e1;
            }
          }
        }
      }
    }
  }
</style>