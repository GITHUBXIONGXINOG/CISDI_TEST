import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import List from '@/views/list'
Vue.use(VueRouter)

const routes = [
  //首页
  {
    path: '/',
    redirect:'index'
  },
  {
    path:'/index',
    name:'Index',
    component: Index
  },
    //列表展示页
  {
    path: '/list',
    name: 'List',
    component: List
  }

]

const router = new VueRouter({
  routes
})

export default router
