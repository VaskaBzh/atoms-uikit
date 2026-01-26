import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import './style.css'
import { LoadingDirectivePlugin } from "@/directives";
import { InitUiIcons } from "@/plugins";

const app = createApp(App)

app.use(InitUiIcons)
    .use(ElementPlus)
    .use(LoadingDirectivePlugin)
    .mount('#app')
