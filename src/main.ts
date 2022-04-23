import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBullhorn, faPhone, faUserGroup, faPaperclip, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

library.add(faPhone, faBullhorn, faUserGroup, faPaperclip, faLocationArrow)
app.component('font-awesome-icon', FontAwesomeIcon)

app
  .use(router)
  .use(store)
  .mount('#app')