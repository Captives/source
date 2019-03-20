<template>
  <div>
    <div class="banner" @click="showGallaryHandler(true)">
      <img class="prew" src="//img1.qunarzz.com/sight/p0/1707/62/62981f052681ef5ba3.img.jpg_600x330_1183c2d2.jpg"
           alt="上海中心大厦">
      <div class="banner-info">
        <span class="title">上海中心大厦</span>
        <span class="count"><span class="iconfont">&#xe691;</span>4</span>
      </div>
    </div>
    <gallary v-show="show" @click.native="showGallaryHandler(false)"></gallary>
  </div>
</template>

<script>
  import Gallary from '../common/gallary/Gallary'
  export default {
    name: 'Banner',
    components: {
      Gallary
    },
    data(){
      return {
        show:false
      }
    },
    methods:{
      showGallaryHandler(_show){
        this.show = _show;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner
    position relative
    background #EEEEEE
    width 100%
    height 0
    overflow hidden
    padding-bottom 55%
    img.prew
      width 100%
    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      display flex
      color #FFF
      height .6rem
      line-height .6rem
      // background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      .title
        flex 1
        padding 0 .2rem
        font-size .32rem
      .count
        margin-top .12rem
        padding 0 .2rem
        height .4rem
        line-height .4rem
        font-size .24rem
        border-radius .2rem
        background rgba(0, 0, 0, .5)
        color #FFF
        .iconfont
          padding 0 0.1rem 0 0
          font-size .24rem
</style>
