<!-- Vue Created by Administrator on 2018/10/11. -->
<template>
    <div class="btn-group">
      <a class="btn btn-submit" @click="clickHandler">{{buttonLabel}}</a>
    </div>
</template>

<script>
    export default {
        name: 'BaseButton',
        props: {label:String},
        computed: {
          buttonLabel(){
            return this.label || '标签';
          }
        },
        methods:{
          clickHandler(){
            this.$emit('click', this);
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@style/varibles.styl"
  .btn-submit
    color: #fff;
    text-align: center;
    padding: 0.2rem 0;
    line-height: 0.55rem;
    display: block;
    background: $them_color;
    border-radius: 0.15rem;
    margin: .25rem .15rem;
    letter-spacing: .15rem;

</style>
