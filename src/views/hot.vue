<template>
  <div>
    <el-tabs class="tabs" v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="热评榜单" name="first"></el-tab-pane>
      <el-tab-pane label="热评音乐" name="second"></el-tab-pane>
    </el-tabs>
    <div class="hot-wrap">
      <HotComments class="hot-left" />
      <HotMusic class="hot-right" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HotComments from '@/components/HotComments.vue'
import HotMusic from '@/components/HotMusic.vue'

export default defineComponent({
  components: { HotComments, HotMusic },
  data() {
    return {
      activeName: 'first',
    }
  },
  setup() {},
  methods: {
    handleClick() {
      
    }
  }
})
</script>

<style lang="scss" scoped>
.hot-wrap {
  display: flex;
}
.hot-left {
  width: 60%;
}
.hot-right {
  width: 40%;
}
@media screen and ( min-width: 980px ) {
  .tabs {
    display: none;
  }
}
@media screen and ( max-width: 980px ) {
  .tabs {
    display: block;
  }
  .hot-left, .hot-right {
    width: 100%;
  }
}
</style>
