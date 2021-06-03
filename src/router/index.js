import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/data-vuex",
    name: "DataVuex",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DataVuex.vue"),
  },
  {
    path: "/traffic",
    name: "TrafficLights",
    component: () =>
      import(/* webpackChunkName: "traffic" */ "../views/TrafficLights.vue"),
  },
  {
    path: "/map",
    name: "Map",
    component: () => import(/* webpackChunkName: "map" */ "../views/Map.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
