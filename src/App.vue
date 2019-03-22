<template>
  <div id="app">
    <a href="/">&lt;&lt;&lt;</a>
    <DropDownList class="language" :list="list" @change="languageChange" :value="list[0]"></DropDownList>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link> |
      <router-link to="/worker">Worker</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import DropDownList from "@/components/DropDownList.vue";
export default {
  name: "App",
  components: {
    DropDownList
  },
  data() {
    return {
      list: [
        { label: "中文", locale: "zh_CN" },
        { label: "English", locale: "en_US" }
      ]
    };
  },
  methods: {
    languageChange(item) {
      this.$i18n.locale = item.locale;
    }
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
