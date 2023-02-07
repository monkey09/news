import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import World from '@/views/World'
import Sports from '@/views/Sports'
import Arts from '@/views/Arts'
import Food from '@/views/Food'
import Movies from '@/views/Movies'
import Politics from '@/views/Politics'
import Technology from '@/views/Technology'
import Travel from '@/views/Travel'
import Health from '@/views/Health'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/world',
    name: 'World',
    component: World
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/arts',
    name: 'Arts',
    component: Arts
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/politics',
    name: 'Politics',
    component: Politics
  },
  {
    path: '/technology',
    name: 'Technology',
    component: Technology
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/health',
    name: 'Health',
    component: Health
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
