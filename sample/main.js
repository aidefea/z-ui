import { createApp } from "vue";
import App from "./index.vue";
import ZUI from "z-zygui";
import "z-zygui/main.css";

const app = createApp(App);
app.use(ZUI);
app.mount("#app");
