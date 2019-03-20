<template>
  <div class="nav">
    <div class="thead">
      <div class="button back">
        <slot name="back"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="button action">
        <slot name="action"></slot>
      </div>
    </div>
    <div class="tbody">
      <!--标题的扩展部分-->
      <slot name="extend"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavigatorPanel',
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"
  @import "~@style/mixins.styl"
  .nav
    color: #FFF
    background: $them_color
    min-height: .66rem
    line-height: .66rem
    padding: .1rem

  .thead
    display: flex
    height: .65rem
    line-height: .65rem
    .button
      min-width: 0.5rem
      max-width: 1.5rem
      ellipsis()
    .title
      flex 1
      letter-spacing: .05rem;
      text-align center
  .tbody
    width 100%
    display: flex
    min-height 0
    span
      height 2rem
</style>
