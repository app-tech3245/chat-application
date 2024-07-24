import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
];

export default router;
