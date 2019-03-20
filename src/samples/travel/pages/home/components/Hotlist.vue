<!-- Vue Created by Administrator on 2018/9/27. -->
<template>
  <div class="warpper" v-if="show">
    <div class="title">本周热门榜单</div>
    <ul>
      <router-link class="item" tag="li" v-for="item in list" :key="item.id" :to="'/goods/' + item.id">
        <div class="item-img-warpper">
          <img class="item-img" :src="item.src" :alt="item.desc"/>
        </div>
        <div class="item-info">
          <p class="icon-title">{{item.title}}</p>
          <p class="icon-price"><span>￥{{item.price}}</span>起</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeHotlist',
    props: ['dataprovider'],
    data: function () {
      return {};
    },
    computed: {
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
   $('.mp-hotsale-list li').forEach(function (li, index) {
   list.push({
      id: '10'+ index,
      title:$(li).find('.mp-hotsale-sight').text(),
      price:$(li).find('.mpg-price-num').text(),
      src:$(li).find('.mp-hotsale-imgcon img').attr('src'),
  });
});
   console.log(JSON.stringify(list));
   */
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/mixins.styl'
  .warpper
    .title
      line-height .8rem
      background #EEEEEE
      text-indent .2rem
    ul
      padding: 0 .24rem;
      overflow-x: scroll;
      white-space: nowrap;
      li
        position: relative;
        display: inline-block;
        padding: .06rem 0 .2rem;
        width: 2rem;
        margin-left: .12rem;
        .item-img-warpper
          overflow: hidden;
          width: 2rem;
          height: 0;
          padding-bottom: 100%;
          img
            width 100%
        .item-info
          .icon-title
            margin-top: .12rem;
            color: #212121;
            font-size: .24rem;
            line-height: .32rem;
            text-align: center;
            ellipsis()
          .icon-price
            color: #616161;
            font-size: .24rem;
            line-height: .36rem;
            text-align: center;
            span
              color #FF8300
</style>
