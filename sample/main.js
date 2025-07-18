import { createApp } from "vue";
import App from "./index.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "../style/icon/iconfont.css";
const app = createApp(App).use(ElementPlus).mount("#app");
