<!-- Vue Created by Administrator on 2018/10/18. -->
<template>
  <div class="header">
    <banner></banner>

    <navigator-bar v-show="show" v-bind:style="{opacity: opacity}">
      <action-button slot="back" class="iconfont" to="/">
        &#xe624;
      </action-button>
      <span slot="title"><slot></slot></span>
    </navigator-bar>

    <action-button class="iconfont navback" to="/" v-show="!show">
      &#xe624;
    </action-button>
  </div>
</template>

<script>
  import Banner from './../../detail/Banner'
  export default {
    name: 'GoodsHeader',
    components: {
      Banner
    },
    props:{
      scrollTop:Number
    },
    data(){
      return {}
    },
    computed:{
      opacity(){
        var alpha = this.scrollTop / 160;
        alpha = alpha >= 1 ? 1 : alpha;
        return alpha;
      },
      show(){
        return this.scrollTop > 50;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/varibles.styl'
  .nav, .navback
    position absolute
    top 0
    z-index 3
    width 100%

  .navback
    top .1rem
    left: .1rem
    width inherit
    padding: .15rem;
    border-radius: .4rem;
    color #FFF
    background rgba(0, 0, 0, .45)
</style>
