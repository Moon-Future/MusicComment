<template>

  <div class="top">
    <img class="banner" src="https://static-1255423800.cos.ap-guangzhou.myqcloud.com/image/banner/banner-11.jpg" alt="">
    <p class="text">初闻不知曲中意，再闻已是曲中人。</p>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style scoped>
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
</style>
