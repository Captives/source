<!-- Vue Created by Administrator on 2018/10/11. -->
<template>
  <div class="fill">
    <navigator-bar>
      <action-button slot="back" class="iconfont" to="/">
        &#xe624;
      </action-button>
      <span slot="title">温馨提醒</span>
    </navigator-bar>

    <div class="content">
      <img src="./../../assets/images/logo.png">
      <br/>
      <span class="info">404 页面飘了</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'NotFound',
        components: {},
        methods: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/varibles.styl'
  .content
    text-align: center;
    padding-top 10%
    img
      height: 1.5rem;
    span
      margin-top .5rem
      font-size 0.45rem
      color $them_color
      display block
</style>
