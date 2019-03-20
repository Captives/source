<!-- Vue Created by Administrator on 2018/9/30. -->
<template>
    <footer class="footer">
        <div class="info">
          <action-button @click="loginHandler">登录</action-button>
          <action-button to="/register">注册</action-button>
        </div>
        <span>- 去哪儿旅游 -</span>
        <span class="copy">&copy;Copyright 2000 - 2018</span>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        components: {},
        methods: {
          loginHandler(){
            this.$store.state.login = false;
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    width 100%
    min-height 1.3rem
    background #EEEEEE
    color #666
    span
      height .7rem
      line-height .7rem
      width 100%
      text-align center
      display: inline-block;
    .info
      display inline-block
      width 100%
      span
        display block
        float left
        padding 0
        width 50%
    .copy
      padding-bottom .1rem
</style>
