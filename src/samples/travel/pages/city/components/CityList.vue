<!-- Vue Created by Administrator on 2018/9/29. -->
<template>
  <div class="list" ref="warpper">
    <div>
      <panel title='当前城市' ref=" ">
        <city-item :value="this.$store.state.city"
                   @click.native="clickHanlder()">
        </city-item>
      </panel>

      <panel title='历史城市' v-if="historyShow" ref="历">
        <city-item v-for="item in historylist"
                   @click.native="clickHanlder(item)"
                   :key="item.id" :value="item">
        </city-item>
      </panel>

      <panel title='热门城市' v-if="hotShow" ref="热">
        <city-item v-for="item in hotlist"
                   @click.native="clickHanlder(item)"
                   :key="item.id" :value="item">
        </city-item>
      </panel>

      <panel class="citylist" v-for="(item, key) of list" v-if="show" :title='key' :ref="key" :key="key">
        <city-list-item v-for="addr in item"
                        @click.native="clickHanlder(addr)"
                        :key="addr.id" :value="addr">
        </city-list-item>
      </panel>

    </div>
  </div>
</template>

<script>
  import Panel from './Panel'
  import CityItem from './CityItem'
  import CityListItem from './CityListItem'

  import BetterScroll from 'better-scroll'
  export default {
    name: 'CityList',
    props: {
      list: Object,
      hotlist: Array,
      historylist: Array,
      selecteValue: String
    },
    components: {
      Panel,
      CityItem,
      CityListItem,
    },
    computed: {
      historyShow: function (e) {
        var list = this.historylist || [];
        return list.length;
      },
      hotShow: function () {
        var list = this.hotlist || [];
        return list.length;
      },
      show(){
        return this.list;
      }
    },
    methods: {
      clickHanlder(item){
        if (item) {
          this.$store.commit('changeCity', item);
        }
        this.$router.push('/');
      }
    },
    watch: {
      selecteValue: function () {
        if (this.selecteValue) {
          var $dom = this.$refs[this.selecteValue];
          const element = $dom[0] ? $dom[0] : $dom;
          this.scroll.scrollToElement(element.$el);
        }
      }
    },
    mounted: function () {
//    this.current = this.$store.state.city;
      this.scroll = new BetterScroll(this.$refs.warpper);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .list
    user-select none
    overflow hidden
    position absolute
    top 1.58rem
    right 0
    bottom 0
    left 0

  .panel-body
    .item:nth-of-type(3n)::before
      border-right none
    .item:nth-child(3n+1):nth-last-child(-n+3)::after
    .item:nth-child(3n+1):nth-last-child(-n+3)~.item::after
      border-bottom none
</style>
