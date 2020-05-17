import Vue from "vue";
import Vuex, { Store } from "vuex";

import App from "./App.vue";
import router from "./router";
import { createStore, MbState } from "./store";

import mbA from "./components/mb-a.vue";
import mbMarkdown from "./components/mb-markdown.vue";
import mbNav from "./components/mb-nav.vue";

import "./styles/app.scss";
import "./styles/guidebook.scss";
import { AuthService } from './services/authService';

Vue.use(Vuex);

declare global {
  interface Window {
    store: Store<MbState>;
  }
}

const authService = new AuthService();

const store = createStore(authService);
window.store = store;

authService.onReady(() => {
  store.commit('setProperty', ['loginUrl', authService.getLoginUrl()])
  store.commit('setProperty', ['logoutUrl', authService.getLogoutUrl()])
  store.commit('setProperty', ['registerUrl', authService.getRegisterUrl()])
})

Vue.config.productionTip = false;

Vue.component("mb-a", mbA);
Vue.component("mb-markdown", mbMarkdown);
Vue.component("mb-nav", mbNav);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
