import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
  state:state,
  actions:actions,
  mutations: mutations,
  getters:{ //getter方法集合,类似vue的computed计算方法

  }
});
