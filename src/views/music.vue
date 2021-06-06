<template>
  <div class="container music-info">
    <div class="info">
      <img class="avatar" :src="`${songInfo.avatar}?param=200y200`" alt="" srcset="">
      <div>
        <div class="artist">
          <a :href="`https://music.163.com/#/song?id=${songInfo.id}`" target="_blank">{{ songInfo.name }}</a>
          <span>{{ songInfo.artistName }}</span>
        </div>
        <div class="lyric">
          <p class="lyric-item" v-for="(item, index) in songInfo.lyric" :key="index">{{ item }}</p>
        </div>
      </div>
    </div>
    
    <div class="comments-wrap">
      <Comments />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Comments from '@/components/Comments.vue'
import API from '@/static/js/api.js'

export default defineComponent({
  name: 'Music',
  components: { Comments },
  data() {
    return {
      songId: '',
      songInfo: {},
      pageNo: '',
      pageSize: '',
      total: 0
    }
  },
  setup() {
    const getSongInfo = async (songId) => {
      const songInfo = (await API.getSongInfo(songId)).data.data
      songInfo.lyric = handleLyric(songInfo.lyric)
      return songInfo
    }

    const handleLyric = (lyric) => {
      return lyric.split('\n').map(ele => {
        return ele.substr(11).trim()
      })
    }

    return {
      getSongInfo
    }
  },
  async created() {
    this.songId = this.$route.query.songId
    this.songInfo = await this.getSongInfo(this.songId)
  }
})
</script>

<style lang="scss" scoped>
.music-info {
  padding: 20px;
}
.info {
  display: flex;
}
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 30px;
}
.lyric {
  text-align: left;
  .lyric-item {
    margin: 5px 0;
    font-size: 14px;
  }
}
</style>
