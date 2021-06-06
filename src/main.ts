import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { ElButton, ElPagination, ElLoading, ElInputNumber, ElTabs, ElTabPane, ElInput } from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'

const app = createApp(App)

app.use(ElButton).use(ElPagination).use(ElLoading).use(ElInputNumber).use(ElTabs).use(ElTabPane).use(ElInput)
app.use(router).use(store).mount('#app')
