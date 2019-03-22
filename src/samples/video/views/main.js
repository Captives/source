import axios from 'axios'

//全局组件注册
export default {
  install(Vue){
    //全局组件
    // Vue.component('Loading', Loading);
    //全局方法
    Vue.prototype.sendMessage = function (event, data, callback) {
      if (this.$socket) {
        this.$socket.emit(event, data, callback);
      }
    };

    Vue.prototype.$axios = function (path, data, callback) {
      // return axios.post('http://red5.uuabc.com:3000' + path, data);
      return axios({
        method: 'post',
        data: data,
        url: path,
        baseURL: 'http://red5.uuabc.com:3000'
      });
    };
  }
}

