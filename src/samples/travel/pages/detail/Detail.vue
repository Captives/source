<template>
  <div class="fill">
    <div class="content">
      <banner></banner>
      <div class="box">

      </div>
    </div>

    <navigator-bar v-show="show" v-bind:style="{opacity: opacity}">
      <action-button slot="back" class="iconfont" to="/">
        &#xe624;
      </action-button>
      <span slot="title">上海中心大厦</span>
    </navigator-bar>

    <action-button class="iconfont navback" to="/" v-show="!show">
      &#xe624;
    </action-button>
  </div>
</template>

<script>
  import Banner from './Banner'
  export default {
    name: 'Detail',
    components: {
      Banner
    },
    data(){
      return {
        show: false,
        opacity:0
      }
    },
    activated(){
      document.querySelector('.content').addEventListener("scroll", this.scrollHandler);
    },
    deactivated(){
      this.show = false;
      document.querySelector('.content').removeEventListener("scroll", this.scrollHandler);
    },
    methods:{
      scrollHandler(e){
        var top = e.target.scrollTop;
        if(top > 50){
          this.show = true;
          this.opacity = top/160;
          this.opacity = this.opacity >= 1 ? 1 : this.opacity;
        }else{
          this.show = false;
        }
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
    background rgba(0,0,0,.45)

  .content
    top: 0
    .box
      height 15rem
</style>
