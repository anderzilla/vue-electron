import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentAlt,
  faBars,
  faBell,
  faClock,
  faAddressBook,
  faTty,
  faPhoneVolume,
  faEnvelope,
  faHeadset,
  faWindowMinimize,
  faWindowClose,
  faCheckCircle,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

library.add(faFontAwesome)
library.add(faBars)
library.add(faAddressBook)
library.add(faBell)
library.add(faClock)
library.add(faCommentAlt)
library.add(faEnvelope)
library.add(faHeadset)
library.add(faPhoneVolume)
library.add(faTty)
library.add(faWindowMinimize)
library.add(faWindowClose)
library.add(faCheckCircle)
library.add(faChevronRight)
library.add(faWhatsapp)

Vue.component('font-awesome-icon', FontAwesomeIcon)