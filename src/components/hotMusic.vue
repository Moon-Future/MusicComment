<template>
  <div class="hot-music">
    <div>
      <div class="title">热评音乐</div>
      <div class="desc">发现好音乐</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'hotMusic',
  data() {
    return [

    ]
  },
  setup() {
    
  },
})
</script>

<style lang="less" scoped>
.hot-music {
  padding: 0 15px;
}
.title {
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-weight: bold;
  color: #0c73c2;
  margin-top: 15px;
}
.desc {
  text-align: left;
  font-size: 12px;
  color: #999;
}
</style>