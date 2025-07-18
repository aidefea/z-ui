import { defineClientConfig } from "vuepress/client";
import Mybutton from "../../sample/button/index.vue";
import Mytoast from "../../sample/toast/index.vue";
import Mypopup from "../../sample/popup/index.vue";
import drawer from "../../sample/drawer/index.vue";
import loading from "../../sample/loading/index.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("Mybutton", Mybutton);
    app.component("Mytoast", Mytoast);
    app.component("Mypopup", Mypopup);
    app.component("Mydrawer", drawer);
    app.component("Myloading", loading);
  },
  setup() {},
  rootComponents: [],
});
