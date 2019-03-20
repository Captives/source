<!-- Vue Created by Administrator on 2018/9/30. -->
<template>
  <div class="button">
    <span>{{value.name}}</span>
  </div>
</template>

<script>
  export default {
    name: 'CityItem',
    props: {
      value: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .button
      float left
      width 33.33%
      span
        display block
        margin .1rem
        padding .1rem 0
        text-align center
        border-radius .06rem
        border .02rem solid #CCC
</style>
