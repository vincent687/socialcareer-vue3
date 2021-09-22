import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../pages/HelloWorldPage/HelloWorldPage.vue'
// import About from "@/views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
  //   {
  //     path: "/about",
  //     name: "About",
  //     component: About,
  //   },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
