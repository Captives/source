<!-- Vue Created by Administrator on 2018/9/26. -->
<template>
  <div class="warpper" v-if="show">
    <div class="title">猜你喜欢</div>
    <ul>

      <router-link tag="li"
                   class="item border-bottom"
                   v-for="item in list"
                   :key="item.id"
                   :to="'/detail/' + item.id">
          <div class="item-img-warpper">
            <img class="item-img" :src="item.src" :alt="item.desc"/>
          </div>
          <div class="item-info">
            <p class="icon-title">{{item.title}}</p>
            <p class="icon-desc">{{item.desc}}</p>
            <p class="icon-price">
              <span class="price">￥<em>{{item.price}}</em></span>起
              <span class="address">{{item.address}}</span>
            </p>
          </div>
      </router-link>

    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
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

/*
    var list = [];
    $('.mp-like-list li').forEach(function (li, index) {
      list.push({
        id: '10'+ index,
        title:$(li).find('.mp-like-title').text(),
        price:$(li).find('.mpg-price-num').text(),
        desc:$(li).find('.mp-comment-num').text(),
        src:$(li).find('.mp-like-img').attr('src'),
        address:$(li).find('.mp-like-address').text(),
      });
    });
    console.log(JSON.stringify(list));
*/
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/varibles.styl'
  @import '~@style/mixins.styl'

  .warpper
    .title
      line-height .8rem
      background #EEEEEE
      text-indent .2rem
    ul
      padding-left .24rem
    li.item
      overflow hidden
      display flex
      height 2rem
      padding .2rem 0
      .item-img
        width 2rem
        height 2rem
      .item-info
        overflow hidden
        padding-left .22rem
        width 100%
        .icon-title
          margin-top .26rem
          height .44rem
          line-height .44rem
          color #212121
          font-size .32rem
          ellipsis()
        .icon-desc
          margin-top .14rem
          height .34rem
          font-size .24rem
        .icon-price
          position relative
          margin-top .22rem
          font-size .24rem
          line-height .4rem
          span.price
            color #FF8300
            em
              font-size .4rem
              padding 0 .07rem 0 0
          .address
            position absolute
            right 0.24rem
            bottom 0
            color #616161
            font-size .24rem
</style>
