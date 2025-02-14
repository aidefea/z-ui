import { defineClientConfig } from "vuepress/client";
import Mybutton from "../../sample/button/index.vue";
import Mytoast from "../../sample/toast/index.vue";
import Mypopup from "../../sample/popup/index.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("Mybutton", Mybutton);
    app.component("Mytoast", Mytoast);
    app.component("Mypopup", Mypopup);
  },
  setup() {},
  rootComponents: [],
});
