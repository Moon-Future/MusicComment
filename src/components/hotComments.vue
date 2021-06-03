<template>
  <div class="hot-comment">
    <div>
      <div class="title">热评榜单</div>
      <div class="desc">每段评论，都是一段故事</div>
    </div>
    <Comments :comments="hotComments" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Comments from '@/components/Comments.vue'
import axios from 'axios'
import { formatTime } from '../static/js/utils.js'

export default defineComponent({
  name: 'hotComments',
  components: { Comments },
  data() {
    return {
      hotComments: [
        {
          id: 141093923,
          content: '“在你之后，我没有拿得出手的痛苦。” ​​​',
          time: 1508665521134,
          likedCount: 786959,
          userId: 299450614,
          nickname: 'peak-end',
          avatar: 'https://p4.music.126.net/S-3XYz-_fkrgHrYyenY8Pg==/109951163425141553.jpg',
          songId: 496370620,
          songName: '断线',
          artistId: '',
          artistName: 'Shang / lil sophy'
        }
      ]
    }
  },
  setup() {
    const getHotComments = async () => {
      const result = await axios.post('http://127.0.0.1:5555/api/music/getHotComments')
      return handleData(result.data.data)
    }

    const handleData = (data: any[]) => {
      data.forEach((item: any) => {
        item.time = formatTime(item.time, 'yyyy-MM-dd hh:mm')
      })
      return data
    }

    return {
      getHotComments,
      handleData
    }
  },
  async created() {
    this.hotComments = await this.getHotComments()
    // this.hotComments = this.handleData(this.hotComments)
  },
})
</script>

<style lang="scss" scoped>
.hot-comment {
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
