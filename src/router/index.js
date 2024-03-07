import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobDetail from '../views/BlogDetail.vue'
import CreateBlog from '../views/CreateBlog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: JobDetail,
    props: true
  },
  {
    path:'/create',
    name: 'create',
    component: CreateBlog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
