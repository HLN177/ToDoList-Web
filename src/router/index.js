import Vue from 'vue'
import VueRouter from 'vue-router'
const DashboardView = () => import('../views/DashboardView.vue');
const TasksPage = () => import('../views/Tasks/TasksPage.vue');
const TasksConfig = () => import('../views/Tasks/TasksConfig.vue');
const ProjectsPage = () => import('../views/Projects/ProjectsPage.vue');

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      redirect: '/tasks',
      component: DashboardView,
      children: [
        {
          path: 'tasks',
          name: 'tasks',
          component: TasksPage
        },
        {
          path: 'tasksConfig',
          name: 'tasksConfig',
          component: TasksConfig
        },
        {
          path: 'projects',
          name: 'projects',
          component: ProjectsPage
        }
      ]
    }
  ]
})

export default router
