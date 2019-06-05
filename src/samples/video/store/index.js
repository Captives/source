import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connect: false,
    login: false,
    user: [],
    roomList: [],
    chatList: []
  },
  mutations: {
    //连接成功
    socket_connect(state) {
      state.connect = true;
    },//断开
    socket_disconnect(state, status) {
      state.connect = false;
    },
    connected(state, data) {
      state.login = true;
      state.user = data;
    },
    success: (state, data) => {
      state.roomList = data;
    },
    userEntry(state, data) {
      state.roomList.push({
        uuid: data.uuid,
        userName: data.userName,
        name: data.name
      });
    },
    userLeave(state, data) {
      for (var i = 0; i < state.roomList.length; i++) {
        if (state.roomList[i].uuid === data.uuid) {
          state.roomList.splice(i, 1);
        }
      }
    },
    chat(state, data) {
      state.chatList.push(data);
    }
  },
  actions: {
    socket_enterReject(state, status) {
      // console.log("ACTIONS # ", 'enterReject');
    },
    socket_connected({ commit }, data) {
      commit("connected", data);
    },
    socket_success({ commit }, data) {
      commit('success', data);
    },
    socket_userEntry({ commit }, data) {
      commit('userEntry', data);
    },
    socket_userLeave({ commit }, data) {
      commit('userLeave', data);
    },
    socket_chat({ commit }, data) {
      commit('chat', data);
    },
  },
  getters: { //getter方法集合,类似vue的computed计算方法

  }
});
