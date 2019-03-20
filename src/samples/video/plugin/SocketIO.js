import Vue from 'vue'
import Vuex from 'vuex'

export default new Vuex.Store({
    state: {},
    mutations: {
        "<MUTATION_PREFIX><EVENT_NAME>"() {
            // do something
        }
    },
    actions: {
        "<ACTION_PREFIX><EVENT_NAME>"() {
            // do something
        }
    }
})

/**
 * Socket.io消息通讯
 * https://github.com/MetinSeylan/Vue-Socket.io
 * 
 */
import VueSocketIO from 'vue-socket.io';
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'ws://' + window.location.hostname + ':3000',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
    options: { path: "/cluster" }
}));