import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import mbA from "./components/mb-a.vue";
import mbMarkdown from "./components/mb-markdown.vue";
import mbGuidebook from "./components/mb-guidebook.vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./styles/app.scss";
import "./styles/guidebook.scss";

Vue.use(BootstrapVue,IconsPlugin)

Vue.config.productionTip = false;

Vue.component("mb-a", mbA);
Vue.component("mb-markdown", mbMarkdown);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
