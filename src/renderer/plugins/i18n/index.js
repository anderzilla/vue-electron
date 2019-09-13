import Vue from 'vue';
import VueI18n from 'vue-i18n';
import langs from '../../components/Languages/';

Vue.use(VueI18n);

const messages = {}
langs.forEach(lang => {
    messages[lang.id] = require(`../../components/Languages/${lang.id}.json`)
})

export default new VueI18n({    
    locale: navigator.language, // set locale    
    fallbackLocale: 'en', // set fallback locale    
    messages, // set locale messages
})
