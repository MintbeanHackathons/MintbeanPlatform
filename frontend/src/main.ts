import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import mbA from "./components/mb-a.vue";

Vue.config.productionTip = false;

Vue.component("mb-a", mbA);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
