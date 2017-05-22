<template lang="html">
  <div class="clearfix">
    <span class="control" @click="doDecrement">-</span>
    <span class="value">{{ value }}</span>
    <span class="control" @click="doIncrement">+</span>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 1
    },
    initialValue: {
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      value: parseInt(this.initialValue)
    };
  },
  methods: {
    doDecrement() {
      this.value = Math.max(this.value - this.step, this.min)
      this.$emit('input', this.value + 'px');
    },
    doIncrement() {
      this.value = Math.min(this.value + this.step, this.max)
      this.$emit('input', this.value + 'px');
    }
  }
}
</script>

<style lang="css" scoped>
.control, .value {
  margin: 0;
  float: left;
  line-height: 1.5em;
}

.control {
  padding: .2em .4em;
  display: inline-block;
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  width: 30px;
  text-align: center;
}

.value {
  padding: .2em .6em;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #f3f3f3;
  width: 40px;
  text-align: center;
  color: #999;
}

.value:hover {
  cursor: not-allowed;
}
</style>
