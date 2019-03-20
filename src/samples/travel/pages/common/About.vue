<!-- Vue Created by Administrator on 2018/10/10. -->
<template>
  <navigator-bar>
    <action-button slot="back" class="iconfont" to="/">&#xe624;</action-button>

    <span slot="title">About</span>
    <action-button slot="action">关于</action-button>
  </navigator-bar>
</template>

<script>
    import ActionButton from './ActionButton'
    import NavigatorBar from './NavigatorBar'
    export default {
        name: 'About',
        components: {
          ActionButton,
          NavigatorBar
        },
        methods: {
          clickHandler(){
            alert('22222222');
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .back
    padding-right .3rem
</style>
