import { createRouter, createWebHistory } from 'vue-router'
import Projects from './components/ProjectList.vue'
import Members from './components/MemberList.vue'
const routes = [
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },

  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  // Outras rotas do seu aplicativo...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router