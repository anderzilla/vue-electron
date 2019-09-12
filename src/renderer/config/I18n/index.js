import Vue from 'vue'
import VueI18n from 'vue-i18n'
import langs from '../../translations' // pasta que contem todos arquivos com tradução

Vue.use(VueI18n)

const messages = {}
langs.forEach(lang => {
  messages[lang.id] = require(`../../translations/${lang.id}.json`)
})

export default new VueI18n({ // criar logica para pegar 'locale' de selecao do usuario ou perfil
  locale: navigator.language, // pega linguagem default do navegador
  fallbackLocale: 'en', // seta ingles como default caso de erro na busca da lingua do navegador
  messages // mensagens de traduzidas
})