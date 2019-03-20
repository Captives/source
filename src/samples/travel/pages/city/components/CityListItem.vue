<!-- Vue Created by Administrator on 2018/9/30. -->
<template>
    <div class="item border-rightbottom">
      <span>{{value.name}}</span>
    </div>
</template>

<script>
  export default {
    name: 'CityListItem',
    props: {
      value: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .border-rightbottom
    &:before
      border-color #CCC
  .item
    float left
    width 33.33%
    span
      display block
      line-height .76rem
      padding-left .2rem
      color #666
</style>
