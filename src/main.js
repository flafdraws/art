import { createApp } from 'vue'
import { Notify, Quasar } from 'quasar'
import './css/style.css'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App);

app.use(Quasar, {
  plugins: { Notify }
});

app.mount('#app')

