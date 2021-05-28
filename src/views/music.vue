<template>
  <div>music</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup() {
    
    /**
     * 歌手分类列表
     * type  -1:全部 1:男歌手 2:女歌手 3:乐队
     * area -1:全部 7华语 96欧美 8:日本 16韩国 0:其他
     * limit 返回数量
     * offset 偏移数量
     * /artist/list
     */
    const getArtList = (type = -1, area = -1, limit = 20, offset = 1) => {
      axios.get(`http://10.4.127.41:3000/artist/list/type=${type}&area=${area}&limit=${limit}&offset=${offset}&initial=b`).then(res => {
        console.log(res)
      })
    }

    getArtList(-1, -1, 30, 160)
  },
})
</script>
