<template>
  <div class="top">
    <img class="banner" src="https://static-1255423800.cos.ap-guangzhou.myqcloud.com/image/banner/banner-11.jpg" alt="" />
    <p class="text">初闻不知曲中意，再闻已是曲中人。</p>
    <el-input
      placeholder="请输入内容"
      v-model="input3"
      class="input-search"
    >
      <template #append>
        <el-button icon="el-icon-search"></el-button>
      </template>
    </el-input>
  </div>
  <router-view class="container"></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>

<style lang="scss" scoped>
.top {
  position: relative;
}
.banner {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
.text {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.input-search {
  position: absolute;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
