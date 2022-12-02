import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import PowerExport from "../views/PowerExport/PowerExport.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/views/54920628",
    name: "Power export",
    component: PowerExport,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
