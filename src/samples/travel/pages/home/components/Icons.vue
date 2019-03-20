<!-- Vue Created by Administrator on 2018/9/26. -->
<template>
  <div class="warpper">
    <swiper :options="swiperOption" v-if="show">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="img" :src="item.src" :alt="item.desc"/>
          </div>
          <p class="icon-desc">{{item.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: ['dataprovider'],
    data: function () {
      return {
        swiperOption: {
          autoplay: false
        }
      };
    },
    computed: {
      pages: function () {
        var pages = [];
        this.list.forEach(function (item, index) {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      },
      show: function () {
        return this.list.length;
      },
      list: function () {
        return this.dataprovider || [];
      }
    }
  }

  /**
   var list = [];
   $('.mpw-swipe-wrap .mp-category-item').forEach(function (li, index) {
  list.push({
    id: '10'+ index,
    title:$(li).find('img').attr('alt'),
    src:$(li).find('img').attr('src'),
  });
});
   console.log(JSON.stringify(list));
   */
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/varibles.styl'
  @import '~@style/mixins.styl'
  /** >>> 穿透设置 **/
  .
  warpper > > >
  .swiper-pagination-bullet-active
    background: rgba(0, 175, 190, .8)

  .
  warpper > > >
  .swiper-container
    height 0
    padding-bottom 50%

  .icon
    position relative
    float left
    width 25%
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .img
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position: absolute;
      text-align center
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      color $dark_text_color
      ellipsis()

</style>
