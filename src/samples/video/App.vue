<template>
  <div class="wrapper">
    <span class="srvinfo" v-if="!show">请先连接服务器 {{show ? 'true' : 'false'}} - {{show}}</span>

    <template v-if="show">
      <HomePage v-show="login" :user="user" :list="roomList"></HomePage>
      <LoginPage v-show="!login" :error="error" @login="loginHandler"></LoginPage>
    </template>
  </div>
</template>

  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import HomePage from "./views/HomePage.vue";
import LoginPage from "./views/LoginPage.vue";
export default {
  name: "App",
  components: {
    HomePage,
    LoginPage
  },
  data() {
    return {
      error: ""
    };
  },
  computed: mapState({
    show: "connect",
    login: "login",
    roomList: "roomList",
    user: "user"
  }),
  methods: {
    languageChange(item) {
      this.$i18n.locale = item.locale;
    },
    loginHandler(name, data) {
      var that = this;
      this.$axios("/login", {
        td: data.id,
        name: data.name,
        userName: name
      }).then(function(res) {
        if (res.data.success) {
          localStorage.setItem("td", data.id);
          localStorage.setItem("token", res.data.info);
          that.$socket.emit("join", data.id, res.data.info);
        } else {
          that.error = res.data.info;
          console.error("ERROR", res.data.info);
        }
      });
    }
  },
  mounted() {
    var that = this;
    var localData = {
      td: localStorage.getItem("td") || null,
      token: localStorage.getItem("token") || null
    };

    //检查登录状态
    this.$axios("/chklogin", localData).then(function(res) {
      if (res.data.success) {
        that.$socket.emit("join", localData.td, localData.token);
      } else {
        that.error = res.data.info;
        console.warn("ERROR", res.data.info);
      }
    });
  }
};
</script>

<style lang="stylus">
html, body, .wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
}

.language {
  position: absolute !important;
  right: 0;
  border: none !important;

  dt i {
    display: none;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    .router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
