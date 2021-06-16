import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Header/Home/index.vue';
import About from '../components/Header/About/index.vue';
import Contact from '../components/Header/Contact/index.vue';




Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path:'/about',
    component: About
  },
  {
    path:'/contact',
    component: Contact
  }
 
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
