import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Shopcart = () => import('@/views/shopcart/Shopcart')
const Profile = () => import('@/views/profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/shopcart',
      component:Shopcart
    },
    {
      path: '/profile',
      component:Profile
    }
  ],
  mode: 'history'
})
