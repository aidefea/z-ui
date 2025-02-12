import { createApp } from "vue";
import App from "./index.vue";
// import ZUI from "../packages/main.js";
import ZUI from "z-zygui";
import "z-zygui-css";

const app = createApp(App);
app.use(ZUI);
app.mount("#app");
