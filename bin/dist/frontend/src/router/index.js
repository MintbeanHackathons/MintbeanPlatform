"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vue_router_1 = __importDefault(require("vue-router"));
var Home_vue_1 = __importDefault(require("../views/Home.vue"));
var Scores_vue_1 = __importDefault(require("../views/Scores.vue"));
var Score_vue_1 = __importDefault(require("../views/Score.vue"));
var NotFound_vue_1 = __importDefault(require("../views/NotFound.vue"));
var md_pages_1 = require("../md-pages");
vue_1.default.use(vue_router_1.default);
var routes = __spreadArrays([
    {
        path: "/",
        name: "Home",
        component: Home_vue_1.default
    },
    {
        path: "/scores",
        name: "Scores",
        component: Scores_vue_1.default
    },
    {
        path: "/scores/:email",
        name: "Score",
        component: Score_vue_1.default,
        props: true
    }
], md_pages_1.markdownPageRoutes("/"), [
    {
        path: "*",
        name: "Not Found",
        component: NotFound_vue_1.default
    }
]);
var router = new vue_router_1.default({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes
});
exports.default = router;
