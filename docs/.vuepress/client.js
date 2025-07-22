import { defineClientConfig } from "vuepress/client";
import Mybutton from "../../sample/button/index.vue";
import Mytoast from "../../sample/toast/index.vue";
import Mypopup from "../../sample/popup/index.vue";
import drawer from "../../sample/drawer/index.vue";
import loading from "../../sample/loading/index.vue";
import notify from "../../sample/notify/index.vue";
import xscroll from "../../sample/xscroll/index.vue";
import dragimage from "../../sample/dragimage/index.vue";
import Watermark from "../../sample/Watermark/index.vue";
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("Mybutton", Mybutton);
    app.component("Mytoast", Mytoast);
    app.component("Mypopup", Mypopup);
    app.component("Mydrawer", drawer);
    app.component("Myloading", loading);
    app.component("Mynotify", notify);
    app.component("Myxscroll", xscroll);
    app.component("MyWatermark", Watermark);
  },
  setup() {},
  rootComponents: [],
});
