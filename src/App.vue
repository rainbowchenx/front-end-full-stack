<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- home/search显示 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template> 

<script>

import Header from './components/Header/index.vue';
import Footer from './components/Footer/index.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed:{

  },
  created(){
    // 获取数据
    this.$store.dispatch("categoryList");
  }

}
</script>

<style>

</style>
