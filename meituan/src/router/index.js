import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import City from '../views/city/City'
import Search from '../views/search/Search'
import My from '../views/my/My'
import Classify from "../views/classify/Classify"
import Food from '../views/food/Food'
import Detail from '../views/detail/Detail'


Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    
    {
      path:'/city',
      component:City
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:"/classify",
      component:Classify
    },
    {
      path:"/food",
      component:Food
    },
    {
      path:"/detail",
      component:Detail
    }
    
  ]

const router = new VueRouter({
  routes
})

export default router
