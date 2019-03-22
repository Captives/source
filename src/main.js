import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

import SocketClient from './plugin/SocketClient';

Vue.use(SocketClient, {
  url: 'ws://' + window.location.hostname + ':3000',
  transports: ['websocket'],
  path: "/cluster"
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
