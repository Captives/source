<!-- Vue Created by Administrator on 2018/11/13. -->
<template>
  <el-form class="login-panel" ref="form" :model="form" label-width="80px">
    <el-form-item label="房间">
      <el-select filterable v-model="form.region" placeholder="请选择活动区域" @change="selectHandler">
        <el-option v-for="item in form.list" :label="item.name"
                   :value="item.id" :key="item.id"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="昵称">
        <el-input v-model="form.name" @input="changeHandler" placeholder="请输入昵称"></el-input>
        <span class="danger" v-if="error || errorTip">{{error || errorTip}}</span>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="login">立即加入</el-button>
      <el-button @click="exit"> 取消进入 </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'LoginPage',
    props:['error'],
    data() {
      return {
        form: {
          name: '',
          region: '',
          list:[
            {id:1001, name:'大唐名探'},
            {id:1002, name:'逆流之时'},
            {id:1003, name:'天命之女'},
            {id:1004, name:'冰雪之华'},
            {id:1005, name:'天命之女'},
            {id:1006, name:'女帝辉光'},
            {id:1007, name:'女帝威严'}
          ]
        },
        errorTip:''
      }
    },
    methods:{
      login(){
        var that = this;
        var region = null;
        this.form.list.forEach(function (item) {
          if(item.id == that.form.region){
            region = item;
          }
        });

        if(!region){
          region = this.form.list[Math.floor(this.form.list.length * Math.random())];
        }

        if(this.form.name){
          this.$emit('login', this.form.name, region);
        }else{
          this.error = '用户名不能为空';
        }
      },
      selectHandler(e){

      },
      changeHandler(){
        if(this.form.name){
          this.error = "";
        }
      },
      exit(){

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login-panel
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      width 400px
      height 200px
      position relative
      margin-left -200px
      margin-top -100px
      left 50%
      top 50%
    .el-select
      width 100%
    .danger
      color #F56C6C
</style>
