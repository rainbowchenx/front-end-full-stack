<template>
  <div class="swiper-container" id="floor1Swiper" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" class="imgg" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: "Carsousel",
  props:['list'],
  watch:{
    list:{
      immediate:true,
      handler(){
        this.$nextTick(() =>{
          var mySwiper = new Swiper(
      this.$refs.cur,
      {
        loop:true,
        pegination:{
          el:'.swiper-pegination',
          clickable:true,
        },
        navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev"
        }

      }
    )
        })
      }
    }
  }
};
</script>

<style lang="less" scoped>
.imgg{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>