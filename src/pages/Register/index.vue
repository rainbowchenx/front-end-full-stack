<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go">我有账号，去 <a href="login.html" target="_blank">登陆</a> </span>
        <br>
        <el-button type = 'danger' @click="goHome" class="go" >
          主页面
        </el-button>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input 
        placeholder="请输入你的手机号"
        v-model = "phone"
        data-vv-name="phone"
        v-validate="{required:true, regex: /^1\d{10}$/}"
        :class="{invalid:errors.has('phone')}"
        >
        <span class="error-msg">{{errors.first("phone")}}</span>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input 
        placeholder="请输入验证码"
        v-model = "code"
        data-vv-name="code"
        v-validate="{required:true, regex: /^\d{6}$/}"
        :class="{invalid:errors.has('code')}"
        >
        <span class="error-msg">{{errors.first("code")}}</span>
        <button style="width:100px;height:38px" @click="getCodeApi">获取验证码</button>

      </div>
      <div class="content">
        <label>登录密码:</label>
        <input 
        placeholder="请输入密码"
        v-model = "password"
        data-vv-name="password"
        v-validate="{required:true}"
        :class="{invalid:errors.has('password')}"
        >
        <!--  regex: /^[0-9A-z]{8,20}$/ -->
        <span class="error-msg">{{errors.first("password")}}</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input 
        placeholder="请再次输入密码"
        v-model = "password1"
        data-vv-name="password1"
        v-validate="{required:true, is:password}"
        :class="{invalid:errors.has('password1')}"
        >
        <!--  regex: /^[0-9A-z]{8,20}$/ -->
        <span class="error-msg">{{errors.first("password1")}}</span>
      </div>
      <div class="controls">
        <input 
        type="checkbox"
        v-model = "agree"
        data-vv-name="agree"
        v-validate="{required:true,}"
        :class="{invalid:errors.has('agree')}"
        >
        <!--  regex: /^[0-9A-z]{8,20}$/ -->
        <span class="error-msg">{{errors.first("agree")}}</span>
        <span>同意协议并注册《尚品汇用户协议》</span>
      </div>
      <div class="btn">
        <button @click="userRegister">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号
      </div>
    </div>
  </div>
</template>

<script>
import { mixins } from '@/Mixin'
  export default {
    name: 'Register',
    mixins:[mixins],
    data(){
      return {
        // 收集表单数据
        phone:'',
        // 验证码
        code:'',
        // 密码
        password:'',
        password1:'',
        // 是否统一
        agree:true

      }
    },
    methods:{
      // 获取验证码
      async getCodeApi(){
        try{
          const {phone} = this
          await phone && this.$store.dispatch('getCode',phone)
          this.code = this.$store.state.user.code
        }catch(e){
          console.error(e.message)
        }

      },
      // 用户注册
      async userRegister(){
        const success = await this.$validator.validateAll();
        if(success){
          try{
            const {phone,code,password,password1} = this;
            (phone && code && password==password1) && await this.$store.dispatch('useRegister',{phone,code,password})
            this.$router.push("/login")
            }catch(e){
              console.error(e.message)
            }
        }


      }

    },
    computed:{

    }
  }
</script>

<style lang="less" scoped>
  .register-container {
    .register {
      width: 1200px;
      height: 445px;
      border: 1px solid rgb(223, 223, 223);
      margin: 0 auto;

      h3 {
        background: #ececec;
        margin: 0;
        padding: 6px 15px;
        color: #333;
        border-bottom: 1px solid #dfdfdf;
        font-size: 20.04px;
        line-height: 30.06px;

        span {
          font-size: 14px;
          float: right;

          a {
            color: #e1251b;
          }
        }
      }

      div:nth-of-type(1) {
        margin-top: 40px;
      }

      .content {
        padding-left: 390px;
        margin-bottom: 18px;
        position: relative;

        label {
          font-size: 14px;
          width: 96px;
          text-align: right;
          display: inline-block;
        }

        input {
          width: 270px;
          height: 38px;
          padding-left: 8px;
          box-sizing: border-box;
          margin-left: 5px;
          outline: none;
          border: 1px solid #999;
        }

        img {
          vertical-align: sub;
        }

        .error-msg {
          position: absolute;
          top: 100%;
          left: 495px;
          color: red;
        }
      }

      .controls {
        text-align: center;
        position: relative;

        input {
          vertical-align: middle;
        }

        .error-msg {
          position: absolute;
          top: 100%;
          left: 495px;
          color: red;
        }
      }

      .btn {
        text-align: center;
        line-height: 36px;
        margin: 17px 0 0 55px;

        button {
          outline: none;
          width: 270px;
          height: 36px;
          background: #e1251b;
          color: #fff !important;
          display: inline-block;
          font-size: 16px;
        }
      }
    }

    .copyright {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      line-height: 24px;

      ul {
        li {
          display: inline-block;
          border-right: 1px solid #e4e4e4;
          padding: 0 20px;
          margin: 15px 0;
        }
      }
    }
  }
  .go{
    cursor: pointer;
    border: 1px,solid white;
  }
  .go:hover{
    color: rgb(225,37,27);
  }
  el-button{
    margin-right: 0px;
  }
</style>