<template>
  <div class="hot-music">
    <div>
      <div class="title">热评音乐</div>
      <div class="desc">发现好音乐</div>
    </div>
    <div v-loading="loading">
      <div class="music-item" v-for="(item, index) in hotMusic" :key="item.uuid">
        <div>{{ (pageNo - 1) * pageSize + index + 1 }}. </div>
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

      <el-pagination
        background
        class="page-warp"
        layout="prev, pager, next"
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
import Icon from '@/components/Icon.vue'
import API from '@/static/js/api.js'

export default defineComponent({
  name: 'hotMusic',
  components: { Icon },
  data() {
    return {
      hotMusic: [],
      pageNo: 1,
      pageSize: 20,
      pageCount: 0,
      total: 0,
      loading: false
    }
  },
  setup() {
    const getHotMusic = async (pageNo, pageSize = 20) => {
      const result = await API.getHotMusic(pageNo, pageSize)
      return { data: result.data.data, total: result.data.total }
    }

    return {
      getHotMusic
    }
  },
  async created() {
    this.getPageData()
  },
  methods: {
    async getPageData() {
      this.loading = true
      const musicData = await this.getHotMusic(this.pageNo, this.pageSize)
      this.hotMusic = musicData.data
      this.total = musicData.total
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
.page-warp {
  margin-bottom: 10px;
}
</style>