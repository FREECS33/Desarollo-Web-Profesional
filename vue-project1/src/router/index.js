import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/Inicio.vue"),
      },
      {
        path: "/main",
        name: "main",
        component: () => import("../components/Main.vue"),
      },
      {
        path: "/reservas",
        name: "reservas",
        component: () => import("../components/Reservas.vue"),
      },
      {
        path: "/disponibles",
        name: "disponibles",
        component: () => import("../components/Disponibles.vue"),
      },
      {
        path: "/cancelados",
        name: "cancelados",
        component: () => import("../components/Cancelados.vue"),
      },
      {
        path: "/asientos",
        name: "asientos",
        component: () => import("../components/Asientos.vue"),
      },
      {
        path: "/lineas",
        name: "lineas",
        component: () => import("../components/Lineas.vue"),
      },
      {
        path: "/proximos",
        name: "proximos",
        component: () => import("../components/Proximos.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;
