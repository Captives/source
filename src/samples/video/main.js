import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import i18n from './i18n'

//引用外部ui组件
import ui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ui);

//页面的全局组件
import pages from './web/main'
Vue.use(pages);

Vue.config.productionTip = false
console.log("store >>>> ", store);
//Socket.io消息通讯
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
Vue.use(VueSocketio, socketio('ws://' + window.location.hostname + ':3000', {transports: ['websocket'], path:'/cluster'}), store);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
