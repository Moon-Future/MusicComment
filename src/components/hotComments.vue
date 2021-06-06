<template>
  <div class="hot-comment">
    <div>
      <div class="title">热评榜单</div>
      <div class="desc">每段评论，都是一段故事</div>
    </div>
    <div v-loading="loading">
      <Comments :comments="hotComments" />
      <el-pagination
        background
        class="page-warp"
        layout="prev, pager, next"
        :pager-count="5"
        :current-page="pageNo"
        :page-size="pageSize"
        :total="total"
        @current-change="changePage">
      </el-pagination>
      <el-input-number v-model="pageNo" @change="changePage" :min="1" :max="pageCount"></el-input-number>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Comments from '@/components/Comments.vue'
import API from '@/static/js/api.js'
import { formatTime } from '../static/js/utils.js'

export default defineComponent({
  name: 'hotComments',
  components: { Comments },
  data() {
    return {
      hotComments: [
        // {
        //   id: 141093923,
        //   content: '“在你之后，我没有拿得出手的痛苦。” ​​​',
        //   time: 1508665521134,
        //   likedCount: 786959,
        //   userId: 299450614,
        //   nickname: 'peak-end',
        //   avatar: 'https://p4.music.126.net/S-3XYz-_fkrgHrYyenY8Pg==/109951163425141553.jpg',
        //   songId: 496370620,
        //   songName: '断线',
        //   artistId: '',
        //   artistName: 'Shang / lil sophy'
        // }
      ],
      pageNo: 1,
      pageSize: 20,
      pageCount: 0,
      total: 0,
      loading: false
    }
  },
  setup() {
    const getHotComments = async (pageNo, pageSize = 20) => {
      const result = await API.getHotComments(pageNo, pageSize)
      return { data: handleData(result.data.data), total: result.data.total }
    }

    const handleData = (data) => {
      data.forEach(item => {
        item.time = formatTime(item.time, 'yyyy-MM-dd hh:mm')
        item.content = decodeURIComponent(item.content).split('\n')
        // console.log(item.content)
      })
      return data
    }

    return {
      getHotComments
    }
  },
  async created() {
    this.getPageData()
  },
  methods: {
    async getPageData() {
      this.loading = true
      const commentsData = await this.getHotComments(this.pageNo, this.pageSize)
      this.hotComments = commentsData.data
      this.total = commentsData.total
      this.pageCount = Math.ceil(this.total / this.pageSize)
      this.loading = false
    },
    changePage(pageNo) {
      this.pageNo = pageNo
      this.getPageData(pageNo)
    }
  }
})
</script>

<style lang="scss" scoped>
.hot-comment {
  padding: 0 15px;
  margin-bottom: 20px;
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
.page-warp {
  margin-bottom: 10px;
}
</style>
