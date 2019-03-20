<!-- Vue Created by Administrator on 2018/9/21. -->
<template>
  <div class="fill">
    <navigator-bar>
      <action-button slot="back" class="iconfont back" to="/chat">&#xe624;</action-button>

      <router-link class="header-title" slot="title" to="/about" tag="div">
        <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
      </router-link>

      <router-link class="header-right" slot="action" to="city" tag="div">
        {{this.$store.state.city.name}}
        <span class="iconfont">&#xe64a;</span>
      </router-link>
    </navigator-bar>

    <div class="content">
      <loading v-show="!complated"></loading>

      <home-swiper :dataprovider="swiperlist" v-show="complated"></home-swiper>
      <home-icons :dataprovider="iconlist" v-show="complated"></home-icons>
      <home-hotlist :dataprovider="hotlist" v-show="complated"></home-hotlist>
      <home-recommend :dataprovider="likelist" v-show="complated"></home-recommend>
      <home-weekend :dataprovider="weeklist" v-show="complated"></home-weekend>

      <h-footer class="footer" v-show="complated">版权底部</h-footer>
    </div>
  </div>
</template>

<script>
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import HomeHotlist from "./components/Hotlist";

import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    HomeHotlist
  },
  data: function() {
    return {
      city: {},
      complated: false,
      likelist: [],
      iconlist: [],
      hotlist: [],
      weeklist: [],
      swiperlist: []
    };
  },
  computed: {
    list() {
      return this.$store.state.list || [];
    }
  },
  watch: {
    list(data) {
      this.complated = true;
      this.likelist = data["likelist"];
      this.iconlist = data["iconlist"];
      this.hotlist = data["hotlist"];
      this.weeklist = data["weeklist"];
      this.swiperlist = data["swiperlist"];
    }
  },
  methods: {
    getHomeInfo: function(city) {
      axios.get("static/data/index.json?city=" + city.name).then(this.homeInfo);
    },
    homeInfo: function(res) {
      if (res.status == 200) {
        this.likelist = res.data.likelist;
        this.iconlist = res.data.iconlist;
        this.hotlist = res.data.hotlist;
        this.weeklist = res.data.weeklist;
        this.swiperlist = res.data.swiperlist;
        this.complated = true;
      }
    }
  },
  mounted() {
    this.city = this.$store.state.city;
    this.getHomeInfo(this.city);
  },
  activated() {
    if (
      this.city !== this.$store.state.city &&
      this.$store.state.connect == false
    ) {
      this.city = this.$store.state.city;
      this.getHomeInfo(this.city);
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.back {
  font-weight: bold;
  vertical-align: middle;
}

.content {
  position: absolute;
  top: 0.86rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.header-title {
  margin-right: 0.2rem;
  padding-left: 0.2rem;
  border-radius: 0.1rem;
  background: #fff;
  color: #CCC;
  letter-spacing: 0;
  text-align: left;
}
</style>
