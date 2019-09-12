import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import i18n from './config/I18n'
import router from './router'
import store from './store'

import 'vuetify/dist/vuetify.min.css'
import './config/FontAwesome'

Vue.use(Vuetify)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
