<template>
  <div class="wrapper">
    <navigator-bar>
      <action-button slot="back" class="iconfont" to="/">
        &#xe624;
      </action-button>
      <span slot="title">聊 天</span>
      <action-button slot="action" @click="clearHandler">清屏</action-button>
    </navigator-bar>

    <chat-body class="body" :list="chatList"></chat-body>
    <chat-input class="send" @change="changeHanlder"></chat-input>
  </div>
</template>

<script>
  import ChatBody from './components/ChatBody'
  import ChatInput from './components/ChatInput'

  export default {
    name: 'Chat',
    data(){
      return {
        chatList: []
      }
    },
    components: {
      ChatBody,
      ChatInput
    },
    computed:{
      list(){
        return this.$store.state.chatList;
      }
    },
    watch:{
      list(array){
        this.chatList = array;
      }
    },
    methods: {
      changeHanlder(text){
        this.sendMessage('broadcast', text);
      },
      clearHandler(){
        this.$store.dispatch('clearMessage');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .body
    position absolute
    top 0.86rem
    bottom .86rem
    left 0
    right 0
    overflow-x hidden
    overflow-y auto
  .send
    top: inherit;
    bottom 0
    left 0
    right 0
    height .66rem
    position absolute
</style>
