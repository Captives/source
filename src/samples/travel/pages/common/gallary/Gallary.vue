<template>
  <div class="fill box">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!--slides-->
        <swiper-slide v-for="item in list" :key="item.id">
          <img class="gallary-img" :src="item.src">
        </swiper-slide>
        <!--Optional controls-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallary',
    data: function () {
      return {
        list:[{"id":"100","src":"http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_350x240_d16a8e2a.jpg"},{"id":"101","src":"http://img1.qunarzz.com/sight/p0/201301/08/c467cdd5848562ef93835fbb.jpg_350x240_3144eb3c.jpg"},{"id":"102","src":"http://img1.qunarzz.com/sight/p0/1412/2c/c633c219335726cb27b33c887997b1fc.water.jpg_350x240_d88e06d5.jpg"},{"id":"103","src":"http://img1.qunarzz.com/sight/p0/1412/46/5d2cadbd92fa49150dda2aa86dc8ca11.water.jpg_350x240_90c1b910.jpg"},{"id":"104","src":"http://img1.qunarzz.com/sight/p82/201211/08/3ba70c8617032fb093835fbb.jpg_350x240_38bf586c.jpg"},{"id":"105","src":"http://img1.qunarzz.com/sight/p0/201301/08/4905cefd7787e37e93835fbb.jpg_350x240_2263a0d2.jpg"},{"id":"106","src":"http://img1.qunarzz.com/wugc/p170/201306/06/0da6921657f27fba93835fbb.jpg_350x240_1a797fac.jpg"},{"id":"107","src":"http://img1.qunarzz.com/wugc/p132/201306/06/78f9ab37b265ae1593835fbb.jpg_350x240_355ec5b9.jpg"},{"id":"108","src":"http://img1.qunarzz.com/wugc/p51/201306/06/be23a4ebe980cb8093835fbb.jpg_350x240_7acb950d.jpg"},{"id":"109","src":"http://img1.qunarzz.com/wugc/p41/201306/06/2951e1317acf5cb093835fbb.jpg_350x240_d2e9b0dd.jpg"},{"id":"1010","src":"http://img1.qunarzz.com/sight/p0/1412/83/b41f23989aed894575e0b20a6c42b425.water.jpg_350x240_fa2698bd.jpg"}],
        swiperOption: {
          pagination:'.swiper-pagination',
          paginationType:'fraction',//分式, 默认bullets圆点
          //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
          observeParents:true,
          //启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
          observer:true,//默认false，不开启
        }
      };
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .box
    position: fixed;
    background rgba(0, 0, 0, 0.75)
    display flex
    flex-direction column
    justify-content center
    z-index 99
    overflow hidden
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
    .wrapper >>> .swiper-wrapper
      display flex
      align-items center
    .swiper-container
      overflow inherit
    .swiper-pagination
      color #FFF
      bottom -1rem
</style>
