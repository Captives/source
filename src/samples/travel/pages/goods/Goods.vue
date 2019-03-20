<!-- Vue Created by Administrator on 2018/10/18. -->
<template>
  <div class="fill goods">
    <goods-header :scrollTop="scrollTop">{{scrollTop}}</goods-header>
    <div class="fill content box">
      <div>
        <p v-for="(item, index) in list" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsHeader from './components/GoodsHeader.vue'
  export default {
    name: 'Goods',
    data(){
      return {
        list: [],
        scrollTop:0
      };
    },
    components: {
      GoodsHeader
    },
    methods: {
      scrollHandler(e){
        this.scrollTop = e.target.scrollTop;
        this.send(this.scrollTop);
      }
    },
    activated(){
      document.querySelector('.content').addEventListener("scroll", this.scrollHandler);
    },
    deactivated(){
      this.scrollTop = 0;
      document.querySelector('.content').removeEventListener("scroll", this.scrollHandler);
    },
    mounted(){
      for (var i = 0; i < 20; i++) {
        this.list.push('段落' + i);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .box
    background none
    padding-top 3rem;
    div
      background rgba(255, 255, 255, .35);
      height 50rem
      p
        padding 1rem 2rem;
</style>
