"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vuex_1 = __importDefault(require("vuex"));
var App_vue_1 = __importDefault(require("./App.vue"));
var router_1 = __importDefault(require("./router"));
var store_1 = require("./store");
var mb_a_vue_1 = __importDefault(require("./components/mb-a.vue"));
var mb_markdown_vue_1 = __importDefault(require("./components/mb-markdown.vue"));
var mb_nav_vue_1 = __importDefault(require("./components/mb-nav.vue"));
require("./styles/app.scss");
require("./styles/guidebook.scss");
var authService_1 = require("./services/authService");
vue_1.default.use(vuex_1.default);
var authService = new authService_1.AuthService();
var store = store_1.createStore(authService);
window.store = store;
authService.onReady(function () {
    store.commit('setProperty', ['loginUrl', authService.getLoginUrl()]);
    store.commit('setProperty', ['logoutUrl', authService.getLogoutUrl()]);
    store.commit('setProperty', ['registerUrl', authService.getRegisterUrl()]);
});
vue_1.default.config.productionTip = false;
vue_1.default.component("mb-a", mb_a_vue_1.default);
vue_1.default.component("mb-markdown", mb_markdown_vue_1.default);
vue_1.default.component("mb-nav", mb_nav_vue_1.default);
new vue_1.default({
    router: router_1.default,
    store: store,
    render: function (h) { return h(App_vue_1.default); }
}).$mount("#app");
