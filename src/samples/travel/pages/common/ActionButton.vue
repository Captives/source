<!-- Vue Created by Administrator on 2018/10/10. -->
<template>
  <span @click="clickHandler"><slot></slot></span>
</template>

<script>
  export default {
    name: 'ActionButton',
    props: {
      to: String
    },
    computed: {
      path(){
        return this.to;
      }
    },
    methods: {
      clickHandler(){
        if (this.path) {
          this.$router.push(this.path);
        } else {
          this.$emit('click', this);
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  span
    padding 0 .1rem

  .iconfont
    text-align: center
    font-size: .4rem
</style>
