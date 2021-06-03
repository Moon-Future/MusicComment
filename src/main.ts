import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { ElButton, ElSelect } from 'element-plus'

const app = createApp(App)

app.use(ElButton).use(ElSelect)
app.use(router).use(store).mount('#app')
