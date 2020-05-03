import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import mbA from "./components/mb-a.vue";
import mbMarkdown from "./components/mb-markdown.vue";

import "./styles/app.scss";
import "./styles/guidebook.scss";

Vue.config.productionTip = false;

Vue.component("mb-a", mbA);
Vue.component("mb-markdown", mbMarkdown);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
