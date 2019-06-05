export default {
  changeCity(state, item){
    state.city = item;
    try {
      if (localStorage.city) {
        localStorage.city = JSON.stringify(item);
      }
    } catch (e) {
      console.warn('Browsers disabled local storage.');
    }
  },
  broadcast(state, item){
    console.log('mutations # broadcast', item);
    // this.$socket.emit('broadcast', item);
  },
  clearMessage(state, item){
    state.chatList = [];
  },
  //连接成功
  SOCKET_connect: (state, status) => {
    state.connect = true;
  },
  //断开
  SOCKET_disconnect: (state, status) => {
    console.log('socket disconnect', status);
    state.connect = false;
  },
  //登入成功
  SOCKET_success: (state, data) => {
    state.message = data[0];
  },
  //首屏广告推送
  SOCKET_list: (state, data) => {
    state.list = data;
  },  
  SOCKET_city: (state, data) => {
    state.cityData = data.data;
  },
  //聊天消息
  SOCKET_broadcast: (state, data) => {
    state.chatList.push(data[0]);
  }
}
