<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>欢迎进入采购平台</p>
          <!-- 根据是否登录选择性显示 -->
          <p v-if="!userName">
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <!-- 登录以后 -->
          <p v-else>
            <a>{{userName}}</a>
            <a class="register" @click="logout" >退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">个人中心</a>
          <a href="###">企业采购</a>
          <a href="###">微信关注</a>
          <a href="###">合作招商</a>
          <a href="###">平台信息</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo" title="自研发硬件采购平台">
          <img src="./images/图片1.png" alt=""  style="width: 100px;margin-top: 10px;margin-bottom: 10px;"/>
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          
          <button 
          class="sui-btn btn-xlarge btn-danger" 
          type="button" 
          @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      keyword:''
    }
  },

  methods:{
    goSearch(){
      // 路由传参
      // return this.$router.push('/search/'+this.keyword + "?k="+  this.keyword.toUpperCase())
      if(this.$route.query){
        let location = {
          name:"search",
          params:{keyword:this.keyword || undefined},
        }
        location.query = this.$route.query
        this.$router.push(location)
      }

    },
    // 退出登录
    async logout(){
      try{
        await this.$store.dispatch('userLogout')
        this.$router.push('/home')
      }catch(e){
        console.error("登陆失败")
      }
      
    }
  },
  mounted(){
    // 通过全局事件总线清除keyword
    this.$bus.$on("clear",()=>{
      this.keyword=''
    })

  },
  computed:{
    userName(){
      return this.$store.state.user.userInfo.name;
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
            cursor: pointer;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>