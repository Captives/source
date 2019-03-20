<!-- Vue Created by Administrator on 2018/9/30. -->
<template>
  <div class="loading">
      <img src="./../../assets/images/logo.png">
      <br/>
      <span class="info">loading...</span>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"
  .loading
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
