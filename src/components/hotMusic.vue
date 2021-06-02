<template>
  <div class="hot-music">
    <div>
      <div class="title">热评音乐</div>
      <div class="desc">发现好音乐</div>
    </div>
    <div>
      <div class="music-item" v-for="(item, index) in hotComments" :key="item.uuid">
        <div>{{ index + 1 }}. </div>
        <div class="music-wrap">
          <div class="music-info">
            <img class="avatar" :src="`${item.avatar}?param=50y50`" alt="" srcset="">
            <div class="music-artist">
              <a :href="`https://music.163.com/#/song?id=${item.id}`" target="_blank">{{ item.name }}</a>
              <span>{{ item.artistName }}</span>
            </div>
          </div>
          <div class="music-liked"><Icon iconfont="icon-weibiaoti1" :css="{fontSize:'20px', marginRight:'2px'}" />{{ item.commentCount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, warn } from 'vue'
import Icon from '@/components/Icon.vue'
import axios from 'axios'

export default defineComponent({
  name: 'hotMusic',
  components: { Icon },
  data() {
    return {
      hotComments: []
    }
  },
  setup() {
    const getHotComments = async () => {
      const result = await axios.post('http://127.0.0.1:5555/api/music/getHotMusic')
      return result.data.data
    }

    return {
      getHotComments
    }
  },
  async created() {
    this.hotComments = await this.getHotComments()
  }
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
.music-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  .music-wrap {
    display: flex;
    align-items: center;
    width: 100%;
    .music-info {
      display: flex;
      width: 100%;
      .avatar {
        width: 50px;
        height: 50px;
        margin: 0 10px;
      }
      .music-artist {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        text-align: left;
        a {
          font-weight: bold;
        }
        span {
          color: #999;
        }
      }
    }
    .music-liked {
      display: flex;
      align-items: center;
    }
  }
  
}
</style>