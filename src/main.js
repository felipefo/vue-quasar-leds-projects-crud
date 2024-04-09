import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import route from './router.js'

createApp(App).use(Quasar, quasarUserOptions).use(route).mount('#app')


