<!-- Vue Created by Administrator on 2018/10/11. -->
<template>
  <div class="fill">
    <navigator-bar>
      <action-button slot="back" class="iconfont" @click="backHandler">
        &#xe624;
      </action-button>
      <span slot="title">登录</span>
    </navigator-bar>

    <div class="content">
        <div class="form">
          <div class="form-control">
            <label class="control-label">手机号</label>
            <div class="control-container">
              <input type="tel" maxlength="11" name="mobile" placeholder="请输入手机号" autocomplete="off" value="13388886666">
            </div>
          </div>

          <div class="form-control last">
            <label class="control-label">验证码</label>
            <div class="control-container">
              <input maxlength="6" ng-pattern="/[0-9]{0,6}/" autocomplete="off" name="randcode"
                     placeholder="请输入验证码" value="021580">
              <a class="qrcode">获取验证码</a>
            </div>
          </div>
        </div>

        <base-button label="登录" @click="submitHandler"></base-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    components: {},
    methods: {
      backHandler(){
        window.history.back();
      },
      submitHandler(){
        this.$store.state.login = true;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~@style/varibles.styl'
  .content
    font-size: .4rem;
    .form
      margin: 0.25rem 0
      padding: 0 0.15rem
      border-top: .01rem solid #ccc;
      border-bottom: .01rem solid #ccc;
      background #FFF

      .form-control
        display: flex;
        width: 100%;
        padding: .05rem 0;
        line-height: 0.85rem;
        font-size: 0.3rem;

        &:first-child
          border-bottom: 0.01rem solid #ddd;

        .control-label
          display: block;
          width: 1.6rem;
          text-align center
          color $them_color

        .control-container
          display: flex;
          width: 100%;
          flex: 1;
          position: relative;
          border: 0;
          vertical-align: middle;

          input
            flex: 1;
            display: block;
            width: 0.01rem;
            border: 0;
            line-height: 0.25rem;
            color: #000;
            background none
          a.qrcode
            font-size: 0.2rem;
            text-align: center;
            line-height: 0.5rem;
            cursor: pointer;
            color: #d7dce0;
            border: 0.01rem solid #ccc;
            display: block;
            margin: 0.1rem 0.1rem;
            padding: .06rem .1rem;
            width: 1.5rem;
            border-radius: 0.15rem;
</style>
