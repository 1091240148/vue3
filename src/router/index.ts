import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';

//Section
// 记录一个坑点  写成List就是不行。会报 is not a module. 的错误
// import SctionList from '@/views/section/List.vue';


import SectionList from '@/views/section/Lists.vue';



// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

// 定义路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/ccc',
    name: 'Ccc',
    component: () => import('../views/Ccc.vue')
  },


  {
    path: '/section/list',
    name: 'SectionList',
    component: () => SectionList,
  }


  
  // // vue 不讲武德!
  // {
  //   path: '/section',
  //   name: 'Section',
  //   component: () => Home,
  //   children:[
  //     {
  //       path: 'list',
  //       component: () => SectionList,
  //     }
  //   ]
  // }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
