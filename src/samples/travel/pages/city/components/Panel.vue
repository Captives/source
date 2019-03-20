<!-- Vue Created by Administrator on 2018/9/30. -->
<template>
  <div class="panel">
    <div class="title border-topbottom">{{title}}</div>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Panel',
        props:{
          title:String,
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .border-topbottom
    &:before
      border-color #CCC
    &:after
      border-color #CCC

  .title
    height .64rem
    line-height .64rem
    color #666
    font-size .26rem
    text-indent .2rem
    background #EEEEEE
  .panel-body
    padding .1rem
    overflow hidden
</style>
