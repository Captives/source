import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connect: false
  },
  actions: {
    //连接成功
    SOCKET_CONNECT: ({ commit }, data) => {
      console.log('socket connected');
    },
    SOCKET_CONNECTED: ({ commit }, data) => {
      console.log('socket connected');
    },//断开
    SOCKET_ENTERREJECT: ({ commit }, data) => {
      console.log('socket enterReject');
    },//断开
    SOCKET_DISCONNECT: ({ commit }, data) => {
      console.log('socket disconnect');
    },//登入成功
    SOCKET_SUCCESS: ({ commit }, data) => {
      console.log('SUCCESS');
    }
  },
  mutations: {
    //连接成功
    SOCKET_CONNECT: (state, status) => {
      console.log('socket connected', state, status);
      state.connect = true;
    },
    SOCKET_CONNECTED: (state, status) => {
      console.log('socket connected', state, status);
      state.connect = true;
    },//断开
    SOCKET_ENTERREJECT: (state, status) => {
      console.log('socket enterReject', state, status);
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
  getters: { //getter方法集合,类似vue的computed计算方法

  }
});
