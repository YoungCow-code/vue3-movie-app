import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {

    path: '/',
    name: 'Home',
    component: Home
  },
  {

    path: '/movie/:id',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound,

  }
]

const router = createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
