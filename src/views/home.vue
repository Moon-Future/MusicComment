<template>
  <div class="top">
    <img class="banner" src="https://static-1255423800.cos.ap-guangzhou.myqcloud.com/image/banner/banner-11.jpg" alt="" />
    <p class="text">初闻不知曲中意，再闻已是曲中人。</p>
  </div>
  <!-- <router-view></router-view> -->
  <div class="container home-wrap">
    <hotComments class="home-left" />
    <hotMusic class="home-right" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import hotComments from '../components/hotComments.vue'
import hotMusic from '../components/hotMusic.vue'
import axios from 'axios'

export default defineComponent({
  components: { hotComments, hotMusic },
  setup() {},
})
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
.text {
  position: absolute;
  top: 20vh;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.home-wrap {
  display: flex;
  .home-left {
    width: 60%;
  }
  .home-right {
    width: 40%;
  }
}
</style>
