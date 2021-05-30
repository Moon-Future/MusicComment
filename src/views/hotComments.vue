<template>
  <div class="container hot-comment">
    <div>热评榜单</div>
    <div class="comments">
      <div class="item" v-for="item in hotComments" :key="item.id">
        <img class="avatar" :src="item.avatar" alt="">
        <div class="wrap">
          <div class="text">
            <span class="nickname">{{ item.nickname }}</span>
            <span class="content">：{{ item.content }}</span>
          </div>
          <div class="info">
            <span class="time">{{ item.time }}</span>
            <div class="from">
              <a class="song" :href="`https://music.163.com/#/song?id=${item.songId}`" target="_blank">{{ item.songName }} - {{ item.artistName }}</a>
              <div>赞{{ item.likedCount }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import axios from 'axios'

export default defineComponent({
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
        },
        {
          id: 141093923,
          content: '上个月你结婚了，新娘和你很般配，嗯。你从当年的小男生长成了大男孩。亲她的时候，我突然想起高二那个中午，你偷亲我，你不知道的是，其实当时我没有睡着。现在我也有了女朋友，准备明年结婚了，祝彼此幸福。',
          time: 1508665521134,
          likedCount: 786959,
          userId: 299450614,
          nickname: 'peak-end',
          avatar: 'https://p4.music.126.net/S-3XYz-_fkrgHrYyenY8Pg==/109951163425141553.jpg',
          songId: 496370620,
          songName: '断线',
          artistId: '',
          artistName: 'Shang / lil sophy'
        },
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
        },
        {
          id: 141093923,
          content: '上个月你结婚了，新娘和你很般配，嗯。你从当年的小男生长成了大男孩。亲她的时候，我突然想起高二那个中午，你偷亲我，你不知道的是，其实当时我没有睡着。现在我也有了女朋友，准备明年结婚了，祝彼此幸福。',
          time: 1508665521134,
          likedCount: 786959,
          userId: 299450614,
          nickname: 'peak-end',
          avatar: 'https://p4.music.126.net/S-3XYz-_fkrgHrYyenY8Pg==/109951163425141553.jpg',
          songId: 496370620,
          songName: '断线',
          artistId: '',
          artistName: 'Shang / lil sophy'
        },
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
        },
        {
          id: 141093923,
          content: '上个月你结婚了，新娘和你很般配，嗯。你从当年的小男生长成了大男孩。亲她的时候，我突然想起高二那个中午，你偷亲我，你不知道的是，其实当时我没有睡着。现在我也有了女朋友，准备明年结婚了，祝彼此幸福。',
          time: 1508665521134,
          likedCount: 786959,
          userId: 299450614,
          nickname: 'peak-end',
          avatar: 'https://p4.music.126.net/S-3XYz-_fkrgHrYyenY8Pg==/109951163425141553.jpg',
          songId: 496370620,
          songName: '断线',
          artistId: '',
          artistName: 'Shang / lil sophy'
        },
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
        },
        {
          id: 141093923,
          content: '上个月你结婚了，新娘和你很般配，嗯。你从当年的小男生长成了大男孩。亲她的时候，我突然想起高二那个中午，你偷亲我，你不知道的是，其实当时我没有睡着。现在我也有了女朋友，准备明年结婚了，祝彼此幸福。',
          time: 1508665521134,
          likedCount: 786959,
          userId: 299450614,
          nickname: 'peak-end',
          avatar: 'https://p4.music.126.net/S-3XYz-_fkrgHrYyenY8Pg==/109951163425141553.jpg',
          songId: 496370620,
          songName: '断线',
          artistId: '',
          artistName: 'Shang / lil sophy'
        },
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
        },
        {
          id: 141093923,
          content: '上个月你结婚了，新娘和你很般配，嗯。你从当年的小男生长成了大男孩。亲她的时候，我突然想起高二那个中午，你偷亲我，你不知道的是，其实当时我没有睡着。现在我也有了女朋友，准备明年结婚了，祝彼此幸福。',
          time: 1508665521134,
          likedCount: 786959,
          userId: 299450614,
          nickname: 'peak-end',
          avatar: 'https://p4.music.126.net/S-3XYz-_fkrgHrYyenY8Pg==/109951163425141553.jpg',
          songId: 496370620,
          songName: '断线',
          artistId: '',
          artistName: 'Shang / lil sophy'
        },
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
      return result.data.data
    }

    return {
      getHotComments
    }
  },
  async created() {
    this.hotComments = await this.getHotComments()
    // console.log(this.hotComments)
    // this.hotComments = []
  }
})
</script>

<style scoped>
.comments {
  padding: 0 15px;
}
.item {
  display: flex;
  font-size: 14px;
  padding: 15px 0;
}
.item:not(:last-child) {
  border-bottom: 1px dotted #ccc;
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
}
.text {
  text-align: left;
}
.nickname {
  color: #0c73c2;
}
.content {
  font-size: 14px;
}
.info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.from {
  display: flex;
}
.song {
  margin-right: 10px;
  font-weight: bold;
}
</style>
