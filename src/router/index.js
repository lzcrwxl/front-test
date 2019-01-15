import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const constantRouterMap = [
  {path:'/',component:()=>import('@/page/Home')},
  {path:'/pharmacist',component:()=>import('@/page/Pharmacist')},
]


export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})