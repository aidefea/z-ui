import { defineClientConfig } from "vuepress/client";
import MyGlobalComponent from "../components/demobutton.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("MyGlobalComponent", MyGlobalComponent);
  },
  setup() {},
  rootComponents: [],
});
