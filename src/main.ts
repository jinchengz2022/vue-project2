// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
// import 'vant/lib/index.css';
import 'ant-design-vue/dist/reset.css';
// import { Button, Form, Field, Checkbox } from 'vant'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
// app.use(Button)
// app.use(Form)
// app.use(Field)
// app.use(Checkbox)

app.mount('#app')
