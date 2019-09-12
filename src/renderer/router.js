import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-menu',
      component: require('@/components/MainMenu').default,
    },
    {
      path: '/menuConfig',
      name: 'menu-config',
      component: require('@/components/MenuConfig').default,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
