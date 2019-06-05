import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import i18n from './i18n'

//引用外部ui组件
import ui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ui);

//页面的全局组件
import pages from './views/main'
Vue.use(pages);

Vue.config.productionTip = false

//Socket.io消息通讯
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
// Vue.use(VueSocketIO, SocketIO('ws://' + window.location.hostname + ':3000', { transports: ['websocket'], path: '/cluster' }), store);
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('ws://' + window.location.hostname + ':3000', { transports: ['websocket'], path: '/cluster' }),
  vuex: {
    store,
    actionPrefix: "socket_",
    mutationPrefix: "socket_"
  }
}));

window.vue = new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
