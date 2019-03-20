import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import i18n from './i18n'

Vue.config.productionTip = false

import '@style/reset.css'
import '@style/border.css'
import '@style/iconfont.css'

import fastclick from 'fastclick'
fastclick.attach(document.body);

//轮播图组件
import swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(swiper);

//Socket.io消息通讯
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
// Vue.use(VueSocketio, 'ws://' + window.location.hostname + ':3000');
Vue.use(VueSocketio, socketio('ws://' + window.location.hostname + ':3000', {transports: ['websocket'], path:'/trave'}), store);

//页面的全局组件
import pages from './pages/index'
Vue.use(pages);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
