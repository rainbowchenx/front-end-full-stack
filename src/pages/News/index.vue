<template>
  <el-container>
    <el-aside width="300px">
      <el-row class="tac">
        <el-col :span="24">
          <h5>新闻列表</h5>
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            background-color="#d3dce6"
            text-color="#475669"
            active-text-color="#DD1B20"
            width="200px"
          >
            <el-menu-item>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main>
      Main
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState({}),
  },
};
</script>

<style>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>