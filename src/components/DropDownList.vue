<template>
  <dl :class="{ select: show }" @mouseleave="showList(false)">
    <dt @click="showList(true)">
      <span>{{ selectValue ? typeof selectValue == "object" ? selectValue[labelField] : selectValue : placeholder }}</span>
      <i></i>
    </dt>
    <dd>
      <p
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: selectValue == item }"
        @click="selectClick(item)"
      >{{ typeof item == "object" ? item[labelField] : item }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  name: "DropDownList",
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    labelField: {
      type: String,
      default: "label"
    },
    value: {
      type: Object,
      default: null
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      show: false,
      selectValue: this.value
    };
  },
  watch: {
    value(val) {
      this.selectValue = val;
    }
  },
  methods: {
    showList(visiabled) {
      this.show = visiabled;
    },
    selectClick(item) {
      this.showList(false);
      this.selectValue = item;
      this.$emit("change", item);
    }
  }
};
</script>

<style lang="stylus" scoped>
dl {
  width: 260px;
  height: 35px;
  margin: 0;
  display: inline-block;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  position: relative;

  dt {
    position: absolute;
    width: 100%;
    height: 100%;

    i {
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #ccc;
    }

    span {
      width: 220px;
      height: 32px;
      display: inline-block;
      line-height: 35px;
      padding-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  dd {
    width: 260px;
    display: none;
    max-height: 110px;
    line-height: 35px;
    text-indent: 10px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    margin-left: -1px;
    background: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-y: auto;
    position: absolute;
    margin-top: 35px;

    p {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 2px 0;

      &.active {
        background: #e3f4ff;
      }

      &:hover {
        background: #cef0ff;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:last-child {
      border-bottom: 1px solid #eee;
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 1px;
    }

    &::-webkit-scrollbar-button {
      background-color: #3e71e0;
      display: none;
    }

    &::-webkit-scrollbar-track {
      width: 1px;
      display: block;
      background: #cef0ff;
      box-shadow: inset 0 0 6px rgba(73, 63, 63, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background: #3e71e0;
      border-radius: 3px;
      width: 1px;
    }

    &::-webkit-scrollbar-corner {
      background: #3e71e0;
    }

    &::-webkit-scrollbar-resizer {
      background: #3e71e0;
    }
  }

  &.select {
    dt {
      i {
        transform: rotateX(180deg);
      }
    }

    dd {
      display: block;
    }
  }

  &:hover {
    border: 1px solid #cef0ff;

    dt {
      i {
        border-top: 6px solid #cef0ff;
      }
    }
  }
}
</style>