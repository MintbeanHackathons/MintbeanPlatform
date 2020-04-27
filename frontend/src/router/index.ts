import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Scores from "../views/Scores.vue";
import Score from "../views/Score.vue";
import NotFound from "../views/NotFound.vue";
import { guidebookRoutes } from '../views/Guidebook';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/scores",
    name: "Scores",
    component: Scores
  },
  {
    path: "/scores/:email",
    name: "Score",
    component: Score,
    props: true
  },
  ...guidebookRoutes('/guidebook'),
  {
    path: "*",
    name: "Not Found",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
