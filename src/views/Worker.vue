<template>
  <div class="fill">
    <input type="number" v-model="count">
    <button @click="addWorker">Add Worker</button>
    <WorkerItem
      v-for="(item, index) in list"
      :key="index"
      :index="index + 1"
      :data="item"
      @remove="removeHandler"
    ></WorkerItem>
  </div>
</template>

<script>
import WorkerItem from "./components/WorkerItem.vue";
export default {
  name: "Worker",
  components: {
    WorkerItem
  },
  data() {
    return {
      count: 100,
      list: []
    };
  },
  methods: {
    addWorker() {
      this.list.push({
        count: this.count,
        time: Date.now()
      });
    },
    removeHandler(index) {
      this.list.forEach((item, _index) => {
        if (index === _index) {
          this.list.splice(_index, 1);
        }
      });
    }
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


