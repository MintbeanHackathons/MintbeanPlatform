import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Scores from "../views/Scores.vue";
import Score from "../views/Score.vue";
import NotFound from "../views/NotFound.vue";
import {
  GuidebookLayout,
  GuidebookIndex,
  GuidebookOverview,
  GuidebookHowTo,
  GuidebookInstructions,
  GuidebookBetweenHackathons,
  GuidebookFrequentlyAskedQuestions
} from "../views/Guidebook";

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
  {
    path: "/guidebook",
    name: "Guidebook",
    component: GuidebookLayout,
    children: [
      {
        path: "/",
        component: GuidebookIndex,
      },
      {
        path: "overview",
        component: GuidebookOverview
      },
      {
        path: "how-to",
        component: GuidebookHowTo
      },
      {
        path: "instructions",
        component: GuidebookInstructions
      },
      {
        path: "between-hackathons",
        component: GuidebookBetweenHackathons
      },
      {
        path: "frequently-asked-questions",
        component: GuidebookFrequentlyAskedQuestions
      }
    ]
  },
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
