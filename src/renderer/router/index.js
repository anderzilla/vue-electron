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
      path: '/menuChat',
      name: 'menu-chat',
      component: require('@/components/MenuChat').default,
    },
    {
      path: '/alterarSenha',
      name: 'alterar-senha',
      component: require('@/components/Paginas/AlterarSenha').default,
    },
    {
      path: '/grupos',
      name: 'menu-grupos',
      component: require('@/components/SubMenus/Grupos').default,
    },
    {
      path: '/pausas',
      name: 'menu-pausas',
      component: require('@/components/SubMenus/Pausas').default,
    },
    {
      path: '/disponibilidade',
      name: 'menu-disponibilidade',
      component: require('@/components/SubMenus/Disponibilidade').default,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
