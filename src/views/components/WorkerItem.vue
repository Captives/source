<template>
  <div class="fill">
    <template v-if="error">{{error}}</template>
    <template v-else>
      <template v-if="type == 1">
        Worker {{index}} - {{time}} | {{value}}
        <button @click="startHandler">Reset</button>
        <button @click="stopHandler">Stop</button>
      </template>

      <template v-else-if="type == 2">
        Worker {{index}} - Completed # {{delay}}
        <button @click="startHandler">Restart</button>
        <button @click="removeHandler">Remove</button>
      </template>

      <template v-else>
        Worker {{index}} - Ready ...
        <button @click="startHandler">Start</button>
        <button @click="removeHandler">Remove</button>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: "Worker",
  props: {
    index: { type: Number },
    data: { type: Object }
  },
  data() {
    return {
      worker: null,
      type: 0,
      time: null,
      value: null,
      delay: null,
      error: null
    };
  },
  methods: {
    startHandler() {
      this.type = 1;
      this.worker && this.stopHandler();
      this.worker = new Worker("Worker.js");
      this.worker.onmessage = this.messageHandler;
      this.worker.onerror = this.errorHandler;
      this.worker.postMessage({ event: "start", value: this.data.count });
    },
    stopHandler() {
      if (this.worker) {
        this.type = 0;
        this.worker.terminate();
        this.worker = null;
      }
    },
    removeHandler() {
      this.$emit('remove', this.index);
    },
    messageHandler({ data }) {
      switch (data.event) {
        case "start":
          break;
        case "change":
          this.type = 1;
          this.time = data.time;
          this.value = data.value;
          break;
        case "stop":
          this.type = 2;
          this.delay = data.delay;
          break;
      }
    },
    errorHandler(err) {
      this.error = err;
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.fill {
  height: 50px;
  line-height: 50px;
  color: #FFF;
  background: #FF0055;
  margin: 5px;

  button {
    margin: 0 5px;
  }
}
</style>


