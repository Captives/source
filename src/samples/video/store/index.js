import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    connect:false
  },
  actions:{

  },
  mutations: {
    //连接成功
    SOCKET_CONNECT: (state, status) => {
      console.log('socket connected', state, status);
      state.connect = true;
    },//断开
    SOCKET_DISCONNECT: (state, status) => {
      console.log('socket disconnect', status);
      state.connect = false;
    },//登入成功
    SOCKET_SUCCESS: (state, data) => {
      state.user = data[0];
      console.log('SUCCESS', state.message);
    }
  },
  getters:{ //getter方法集合,类似vue的computed计算方法

  }
});
