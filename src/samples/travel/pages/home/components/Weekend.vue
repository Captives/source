<!-- Vue Created by Administrator on 2018/9/27. -->
<template>
  <div class="warpper" v-if="show">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <div class="item-img-warpper">
          <img class="item-img" :src="item.src" :alt="item.desc"/>
        </div>
        <div class="item-info">
          <p class="icon-title">{{item.title}}</p>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: ['dataprovider'],
    data: function () {
      return {}
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
 $('#weekend-trip .mp-product-item').forEach(function (li, index) {
  list.push({
    id: '10'+ index,
    title:$(li).find('.product-name').text(),
    desc:$(li).find('.product-desc').text(),
    src:$(li).find('img').attr('src'),
  });
});
 console.log(JSON.stringify(list));
 */
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .warpper
    .title
      line-height .8rem
      background #EEEEEE
      text-indent .2rem
    ul
      background #EEE
    li.item
      background #FFF
      margin-bottom: .1rem;
      img
        width 100%
    .item-info
      position: relative;
      padding: .14rem .2rem .2rem .2rem;
      .icon-title
      .icon-desc
        overflow: hidden;
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      .icon-desc
        font-size: .24rem;
        line-height: .42rem;
        color #616161
</style>
