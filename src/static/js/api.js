import axios from './axios'
const HOTS = 'http://127.0.0.1:5555'

export const URL = {
  getHotComments: '/api/music/getHotComments',
  getHotMusic: '/api/music/getHotMusic',
  getLyric: '/api/music/getLyric',
  getSongInfo: '/api/music/getSongInfo',
  getComments: '/api/music/getComments'
}

const API = {
  getHotComments(data) {
    return axios.post(HOTS + URL.getHotComments, data)
  },

  getHotMusic(data) {
    return axios.post(HOTS + URL.getHotMusic, data)
  },

  getLyric(songId) {
    return axios.post(HOTS + URL.getLyric, { songId })
  },

  getSongInfo(songId) {
    return axios.post(HOTS + URL.getSongInfo, { songId })
  },

  getComments({ songId, pageNo = 1, pageSize = 20 }) {
    return axios.post(HOTS + URL.getComments, { songId, pageNo, pageSize })
  }
}

export default API