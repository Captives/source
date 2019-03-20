<!-- Vue Created by Administrator on 2018/10/9. -->
<template>
  <div class="content">
    <item class="none" v-if="!show">暂无消息</item>
    <item v-for="(item, index) in list" :key="index" v-if="show">{{item}}</item>
  </div>
</template>

<script>
  import Item from './ChatItem'
  export default {
    name: 'ChatBody',
    props: {
      list: Array
    },
    computed:{
      show(){
        return this.list.length > 0;
      }
    },
    components: {
      Item
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .none
      text-align center
      margin-top .5rem
</style>
