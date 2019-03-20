<!-- Vue Created by Administrator on 2018/9/29. -->
<template>
  <div id="bet" class="list">
    <ul>
      <li v-for="val in list"
          :key="val" :ref="val"
          @click="clickHandler"
          @touchstart="touchStart"
          @touchmove="touchMove"
          @touchend="touchEnd"
      >{{val}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Alphabet',
    props: {
      list: Array,
    },
    data(){
      return {
        touchState: false,
        startY : 0,
        startTime:0
      }
    },
    updated(){
      this.startY = this.$refs[this.list[0]][0].offsetTop;
    },
    methods: {
      clickHandler(e) {
        this.$emit('change', e.target.innerText);
      },
      touchStart(){
        this.touchState = true;
        this.startTime = Date.now();
      },
      touchMove(e){
        const now = Date.now();
        if(this.touchState && now - this.startTime > 100){
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY)/e.target.offsetHeight);
          if(index>=0 && index < this.list.length){
            this.$emit('change', this.list[index]);
          }
          this.startTime = now;
        }
      },
      touchEnd(e){
        this.touchState = false;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"

  .list
    user-select none
    position fixed
    top 1.59rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    li
      height .4rem
      line-height .4rem
      text-align center
      color $them_color
</style>
