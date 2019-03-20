<!-- Vue Created by Administrator on 2018/11/13. -->
<template>
    <div class="wrapper">
      <el-container>
        <el-header>
          <el-row :gutter="24">
            <el-col :span="22">
              你好{{userInfo.userName}}, 欢迎来到{{userInfo.name}}
            </el-col>
            <el-col :span="2">
                <el-dropdown @command="dropchangeHandler">
                  <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @command="dropchangeHandler">个人信息</el-dropdown-item>
                    <el-dropdown-item>更改区域</el-dropdown-item>
                    <el-dropdown-item divided>退出聊天</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-container>
            <el-main class="scroll">
              <ul>
                <li v-for="(item, index) in chatList" :key="index">{{item.user.userName}} || {{item.text}}</li>
              </ul>
            </el-main>
            <el-footer>
              <el-input placeholder="请输入内容..." v-model="input"
                        @change="textChangeHandler"
                        class="input-with-select">

                <el-select v-model="select" slot="prepend"
                           @change="textSelectHandler"
                           placeholder="请选择">

                  <el-option label="所有人" value=""></el-option>
                  <el-option v-for="item in list"
                             v-show="!isShow(item)"
                             :label="item.userName"
                             :value="item.uuid" :key="item.uuid"></el-option>
                </el-select>

                <el-button slot="append" icon="el-icon-message" @click="textSendHandler">发送</el-button>
              </el-input>
            </el-footer>
          </el-container>

          <el-aside width="300px" class="scroll">
            <ul>
              <li v-if="list.length > 1">
                <el-button icon="el-icon-message" @click="sendToUser('')">所有人</el-button>
              </li>
              <li v-for="item in list" v-show="!isShow(item)" :label="item.userName" :value="item.uuid" :key="item.uuid">
                <el-button icon="el-icon-message" @click="sendToUser(item)">{{item.userName}}</el-button>
              </li>
            </ul>
          </el-aside>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        props:['user', 'list'],
        data(){
          return {
            chatList:[],
            input: '',
            select: ''
          };
        },
        computed:{
          userInfo(){
            return this.user || {region:{}};
          }
        },
      mounted(){
        var that = this;
        this.$socket.on('userEntry', function(data){
          that.list.push({uuid: data.uuid, userName: data.userName, name: data.name});
        });
        this.$socket.on('userLeave', function(data){
          for(var i=0; i< that.list.length; i++){
            if(that.list[i].uuid === data.uuid){
              that.list.splice(i, 1);
            }
            if(data.uuid == that.select){
                that.select = '';
            }
          }
        });

        this.$socket.on('chat', function(data){
          that.chatList.push(data);
        });
      },
      methods:{
        isShow(item){
          return item.uuid == this.userInfo.uuid;
        },
        textChangeHandler(text){
          console.log('输入中....', text);
        },
        textSendHandler(){
          if(this.input){
            this.chatList.push({user: this.userInfo, text: this.input});
            this.$socket.emit('chat', this.input, this.select);
            this.input = '';
          } else {
            this.$message({type: 'warning',message: '发送消息内容不能为空', center:true});
          }
        },
        textSelectHandler(text){
          console.log('textSelectHandler', text);
        },
        sendToUser(item){
          this.select = item ? item.uuid : '';
        },
        dropchangeHandler(text){
          console.log(text);
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .el-header
  .el-footer
    background-color #B3C0D1
    color #333
    text-align center
    line-height 60px

  .el-aside
    color: #333;
    background-color: #D3DCE6;

  .el-main
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    overflow-y auto
    overflow-x hidden

  .el-container
    position: relative;
    width 100%
    height 100%

  .el-footer
    .el-select
    .el-input
      text-align center
      width: 120px;
    .input-with-select
      width 100%
  ul
    margin 0
    padding: 0 15px;
    li
      list-style none
      text-align left
      .el-button
        width 100%
        font-size 20px
        text-align left
        background none
        padding 10px
        border none

  .scroll::-webkit-scrollbar  /*滚动条整体样式*/
    width 6px
    height 6px
    margin-right 20px

  .scroll::-webkit-scrollbar-thumb  /*滚动条里面小方块*/
    border-radius 10px
    -webkit-box-shadow inset 0 0 2px rgba(0, 0, 0, 0.2)
    background #ccc

  .scroll::-webkit-scrollbar-track  /*滚动条里面轨道*/
    -webkit-box-shadow inset 0 0 5px rgba(0, 0, 0, 0.2)
    border-radius 10px
    height 10px
    background rgba(0, 0, 0, 0)
</style>
