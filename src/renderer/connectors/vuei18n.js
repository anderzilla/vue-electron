import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Languages from '../components/Languages' // pasta que contem todos arquivos com tradução

Vue.use(VueI18n)

const messages= {
    en: {
    alterarsenha: 'Change Password',
    grupos: 'Groups',
    pausas: 'Pauses',
    disponivel: 'Disponibility',
    sair: 'Logout',
    }
  }

Languages.forEach(lang => {
  messages[lang.id] = require(`../components/Languages/${lang.id}.json`)
})
export default new VueI18n({ // criar logica para pegar 'locale' de selecao do usuario ou perfil
  locale: navigator.language, // pega linguagem default do navegador
  fallbackLocale: 'en', // seta ingles como default caso de erro na busca da lingua do navegador
  messages // mensagens de traduzidas
})