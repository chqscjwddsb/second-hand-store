import { createRouter, createWebHashHistory } from "vue-router";
import layout from "../layout/index.vue";
import user from "../views/user/index.vue";
import login from "../views/login/index.vue";
import regist from '../views/login/components/regist.vue'

const routes = [
  {
    path: "/",
    name: "layout",
    component: layout,
    children: [
      {
        path: "/user",
        name: "user",
        component: user,
        children: [
         
        ],
      },
    ],
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/regist',
    name:'regist',
    component:regist
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export { router };
