import Vue from "vue";
import Vuex from "vuex";

import App from "./App.vue";
import router from "./router";
import { createStore } from "./store";

import mbA from "./components/mb-a.vue";
import mbMarkdown from "./components/mb-markdown.vue";

import "./styles/app.scss";
import "./styles/guidebook.scss";

Vue.use(Vuex);
const store = createStore();
window.store = store;

Vue.config.productionTip = false;

Vue.component("mb-a", mbA);
Vue.component("mb-markdown", mbMarkdown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
