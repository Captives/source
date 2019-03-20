<!-- Vue Created by Administrator on 2018/10/9. -->
<template>
  <div class="fill box">
    <input class="input" placeholder="请输入信息" v-model="text" v-show="!show">
    <span class="input error" v-show="show">发送消息内容不能为空</span>
    <button class="send" @click="sendMessage">发送</button>
  </div>
</template>

<script>
  export default {
    name: 'ChatInput',
    data(){
      return {
        show: false,
        text: '想聊天了~'
      }
    },
    methods: {
      sendMessage(){
        this.show = this.text == "";
        if (!this.show) {
          this.$emit('change', this.text);
          this.text = '';
        } else {
          var that = this;
          var tid = setTimeout(function () {
            that.show = false;
            clearTimeout(tid);
          }, 750);
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"
  .box
    display flex
    padding 0.11rem
    background #EEEEEE
    .send
      color: #FFF
    .input
      flex 1
      height .64rem
      line-height .64rem
      padding 0 .2rem
      background #FFF
    .error
      color #ff0000
    button
      width 1rem
      background $them_color
</style>
