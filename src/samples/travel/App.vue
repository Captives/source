<template>
  <div id="app">
    <a href="/">&lt;&lt;&lt;</a>
    <DropDownList class="language" :list="list" @change="languageChange" :value="list[0]"></DropDownList>
    <keep-alive>
      <router-view v-if="show"/>
    </keep-alive>
    <login v-if="!show"></login>
  </div>
</template>
<script>
import DropDownList from "@/components/DropDownList.vue";
import Login from "./pages/user/Login.vue";
export default {
  name: "App",
  components: {
    DropDownList,
    Login
  },
  data() {
    return {
      list: [
        { label: "中文", locale: "zh_CN" },
        { label: "English", locale: "en_US" }
      ]
    };
  },
  computed: {
    show() {
      return this.$store.state.login;
    }
  },
  methods: {
    languageChange(item) {
      this.$i18n.locale = item.locale;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~@style/varibles.styl';

.nav {
  color: #FFF;
  background: $them_color;
  min-height: 0.66rem;
  line-height: 0.66rem;
  padding: 0.1rem;
}

.fill, .content {
  background: $them_bg_color;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
}

.content {
  top: 0.86rem;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

#app {
  user-select: none;
  position: fixed;
}

.language {
  position: absolute !important;
  right: 0;
  border: none !important;

  dt i {
    display: none;
  }
}
</style>