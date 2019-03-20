<!-- Vue Created by Administrator on 2018/9/29. -->
<template>
  <div class="warpper">
    <input type="text" class="search-input"
           v-model="keyword"
           v-on:input="inputChange"
           placeholder="输入城市或拼音">

    <div class="search-content" ref="warpper" v-show="keyword">
      <city-list-item v-for="item in result"
                      @click.native="clickHanlder(item)"
                      :key="item.id"
                      :value="item">
      </city-list-item>
      <div class="item item-result" v-if="show">没有搜索结果</div>
    </div>
  </div>
</template>

<script>
  import CityListItem from './CityListItem'
  import BetterScroll from 'better-scroll'
  export default {
    name: 'CitySearch',
    props: {
      list: Object
    },
    data(){
      return {
        keyword: '',
        result: []
      };
    },
    components: {
      CityListItem
    },
    computed: {
      show: function () {
        return !this.result.length;
      }
    },
    methods: {
      inputChange(event){
        var that = this;
        this.keyword = event.target.value;
        if (this.keyword) {
          var list = [];
          for (let label in this.list) {
            this.list[label].forEach(function (item) {
              if (item['spell'].indexOf(that.keyword.toLowerCase()) > -1
                || item['name'].indexOf(that.keyword) > -1) {
                list.push(item);
              }
            });
          }
          this.result = list;
        } else {
          this.result = [];
        }
      },
      clickHanlder(item){
        this.keyword = '';
        this.$store.dispatch('changeCityAction', item);
        this.$router.push('/');
      }
    },
    mounted: function () {
      this.scroll = new BetterScroll(this.$refs.warpper);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"
  .warpper
    width 100%
    margin-top: .05rem;
    .search-input
      width 100%
      height .62rem
      color #616161
      padding 0 .1rem
      box-sizing border-box
      line-height .62rem
      text-align center
      border-radius .06rem

  .search-content
    background #FFF
    top 1.58rem
    right 0
    bottom 0
    left 0
    position absolute
    z-index 1
    overflow hidden

    .item-result
      width 100%
      text-align center
      line-height 0.76rem

    .item:nth-of-type(3n)::before
      border-right none

</style>
