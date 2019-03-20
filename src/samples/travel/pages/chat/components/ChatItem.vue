<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ChatItem',
        components: {},
        methods: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .box
    padding: 0.2rem 0.1rem;
    word-break: break-all;
    line-height: .35rem;
</style>
