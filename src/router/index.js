import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import Dashboard from '../views/DashboardPage.vue'
import TestAutomation from "@/views/TestAutomation.vue";

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/test-automation', name: 'Test autoamtion', component: TestAutomation}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
