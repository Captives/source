<!-- Vue Created by Administrator on 2018/9/28. -->
<template>
  <div>
    <navigator-bar>
      <action-button slot="back" class="iconfont" to="/">&#xe624;
      </action-button>
      <div slot="title">选择城市</div>
      <city-search :list="cities" slot="extend"></city-search>
    </navigator-bar>

    <loading v-show="!complated"></loading>

    <city-list :hotlist="hotCities"
               :historylist="historylist"
               :list="cities"
               :selecteValue="selecteValue"
               v-show="complated"></city-list>

    <alphabet :list="alphabetList" @change="alphabetChangeHandler"></alphabet>
  </div>
</template>

<script>
  import CitySearch from './components/CitySearch'
  import CityList from './components/CityList'
  import Alphabet from './components/Alphabet'

  import axios from 'axios'
  export default {
    name: 'City',
    components: {
      CitySearch,
      CityList,
      Alphabet
    },
    data(){
      return {
        complated: false,
        cities: {},
        hotCities: [],
        historylist: [],
        alphabetList: [],
        selecteValue: ''
      };
    },
    mounted: function () {
      this.getCityInfo();
    },
    methods: {
      getCityInfo: function () {
        axios.get('static/data/city.json').then(this.cityInfoHandler);
      },
      cityInfoHandler: function (res) {
        res = res.data;
        if (res.ret && res.data) {
          this.cities = res.data.cities;
          this.hotCities = res.data.hotCities;
          this.alphabetList = Object.keys(this.cities);

          this.alphabetList.unshift('热');
          this.alphabetList.unshift('历');
          this.alphabetList.unshift(' ');
          //测试用
          for (let i = 0; i < this.hotCities.length; i++) {
            var index = Math.floor((Math.random() * 100) % 4);
            var city = this.hotCities[index];
            if (this.historylist.length < 3 && this.historylist.indexOf(city) == -1) {
              this.historylist.push(city);
            }
          }

          this.complated = true;
        }
      },
      alphabetChangeHandler: function (val) {
        this.selecteValue = val;
      }
    }
  }
</script>

