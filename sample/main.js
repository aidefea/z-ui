import { createApp } from "vue";
import App from "./index.vue";
// import ZUI from "z-zygui";
import ZUI from "../dist/main.js";
import "../dist/main.css";
// import sty from "../dist/main.module.css";

const app = createApp(App);
// console.log("app", sty);
app.use(ZUI);
app.mount("#app");
