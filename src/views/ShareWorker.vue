<template>
  <div class="fill">
    <input type="text" v-model="inputText">
    <button @click="sendText">Send</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShareWorker",
  components: {},
  data() {
    return {
      inputText: null,
      list: []
    };
  },
  methods: {
    messageHandler({ data }) {
      console.log(">>>>", data);
      this.list.push(data);
    },
    errorHandler(err) {},
    sendText() {
      if (this.inputText) {
        this.worker.port.postMessage(this.inputText);
        this.inputText = "";
      }
    }
  },
  mounted() {
    this.worker = new SharedWorker("ShareWorker.js");
    this.worker.port.onmessage = this.messageHandler;
    this.worker.port.onerror = this.errorHandler;
    this.worker.port.start();
  }
};
</script>
<style lang="stylus" scoped>
.fill {
  input {
    width: 100px;
    margin: 0 10px;
  }
}
</style>


