<template>
  <div class="wrapper">
    <span class="srvinfo" v-if="!this.$store.state.connect">
      请先连接服务器 {{show ? 'true' : 'false'}}- {{this.$store.state.connect}}
      <DropDownList class="language" :list="list" @change="languageChange" :value="list[0]"></DropDownList>
    </span>
    <router-view v-if="this.$store.state.connect" v-show="login" :user="user" :list="roomList"/>
    <login v-if="this.$store.state.connect" v-show="!login" :error="error" @login="loginHandler"></login>
  </div>
</template>
<script>
import DropDownList from "@/components/DropDownList.vue";
import LoginPage from "./web/LoginPage.vue";
export default {
  name: "App",
  components: {
    DropDownList,
    login: LoginPage
  },
  data() {
    return {
      error: "",
      login: false,
      user: {},
      list: [
        { label: "中文", locale: "zh_CN" },
        { label: "English", locale: "en_US" }
      ],
      roomList: []
    };
  },
  computed: {
    show() {
      return this.$store.state.connect;
    }
  },
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
          that.login = false;
          that.error = res.data.info;
          console.error("ERROR", res.data.info);
        }
      });
    }
  },
  mounted() {
    var that = this;
    if (this.$socket) {
      this.$socket.on("connect", function() {
        that.login = true;
        console.log('socket connected');
      });

      this.$socket.on("connected", function(data) {
        that.user = data;
        that.login = true;
        console.log("connected", that.user);
      });

      this.$socket.on("enterReject", function(data) {
        console.log("enterReject", data);
      });

      this.$socket.on("success", function(data) {
        that.roomList = data;
      });
    }

    var localData = {
      td: localStorage.getItem("td") || null,
      token: localStorage.getItem("token") || null
    };

    //检查登录状态
    this.$axios("/chklogin", localData).then(function(res) {
      if (res.data.success) {
        that.$socket.emit("join", localData.td, localData.token);
      } else {
        that.login = false;
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
