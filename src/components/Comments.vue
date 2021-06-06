<template>
  <div class="comments">
    <div class="item" v-for="item in comments" :key="item.id">
      <img class="avatar" :src="item.avatar" alt="">
      <div class="wrap">
        <div class="text">
          <span class="nickname">{{ item.nickname }}</span>：
          <template v-for="(comment, i) in item.content" :key="i">
            <span class="content" :class="{ block: i !== 0 }">{{ comment }}</span>
          </template>
        </div>
        <div class="info">
          <span class="time">{{ item.time }}</span>
          <div><Icon iconfont="icon-weibiaoti1" :css="{fontSize:'20px', marginRight:'2px'}" />{{ item.likedCount }}</div>
        </div>
        <div class="song">
          <a :href="`https://music.163.com/#/song?id=${item.songId}`" target="_blank">{{ item.songName }} - {{ item.artistName }}</a>
          <!-- <router-link :to="{ path: 'music', query: { songId: item.songId } }">{{ item.songName }} - {{ item.artistName }}</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'

export default defineComponent({
  name: 'Comments',
  components: { Icon },
  props: {
    comments: {
      type: Array,
      default: []
    }
  },
  setup() {
    
  }
})
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  font-size: 14px;
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px dotted #ccc;
  }
}
.avatar {
  width: 50px;
  height: 50px;
}
.wrap {
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  .text {
    text-align: left;
    .nickname {
      color: #0c73c2;
    }
    .content {
      letter-spacing: 1px;
      &.block {
        display: block;
      }
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .time {
      color: #999;
      text-align: right;
    }
    .from {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .song {
    font-weight: bold;
    text-align: right;
    margin-top: 10px;
  }
}
</style>
