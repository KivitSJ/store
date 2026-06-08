import { createRouter, createMemoryHistory } from 'vue-router'
import routes from '../domains/groceries/routes.js'

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
})

export default router
