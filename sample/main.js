import { createApp } from "vue";
import App from "./index.vue";
import ZUI from "../packages/main.js";

const app = createApp(App);
app.use(ZUI);
app.mount("#app");
