<template>
  <div>
    <!-- 三级联动 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- 通过v-for获取 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list = "floor"></Floor>
    <Brand></Brand>
  </div>
  
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import Rank from '@/pages/Home/Rank/index.vue'
import Like from '@/pages/Home/Like/index.vue'
import Floor from '@/pages/Home/Floor/index.vue'
import Brand from '@/pages/Home/Brand/index.vue'
import { mapState } from 'vuex'
export default {
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  methods:{

  },
  mounted(){
    // 获取floor组件的数据
    this.$store.dispatch("getFloorList") 
    // 获取用户信息并展示,不在这里获取信息了，在路由那里获取，设置全局路由守卫
    this.$store.dispatch('getUserInfo')
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList
    })
  }

    


}
</script>

<style>

</style>