<template lang="html">
  <div>
    <h4 style="margin: 0;">Row properties</h4>
    <hr>
    <label for="bg-color">
      <input class="jscolor" id="bg-color" @change="updateRowBgColor('#' + $event.target.value)">
    </label>
    <label for="content-color">
      <input class="jscolor" id="content-color" @change="updateContentBgColor('#' + $event.target.value)">
      <span @click="updateContentBgColor('')">clear</span>
    </label>
    <!--
    <app-number-picker
        :max="30" :min="0" :step="5"
        :initialValue="rowPadding"
        @input="updateRowPadding2"
    ></app-number-picker>
    -->
  </div>
</template>

<script>
import NumberPicker from '../form/NumberPicker.vue';
require('jscolor-picker');

export default {
  data() {
    return {
      invalidPadding: false
    };
  },
  methods: {
    updateRowBgColor(color) {
      console.log('bg');
      this.$emit('rowBackgroundUpdated', color);
    },
    updateContentBgColor(color) {
      console.log('content');
      this.$emit('contentBackgroundUpdated', color);
    }
  }
}

</script>

<style lang="css" scoped>

label {
  position: relative;
}

label span {
  position: absolute;
  top: -.2em;
  right: .3em;
  padding: .3em .5em;
  background-color: #666;
  color: white;
  cursor: pointer;
}

input.jscolor {
  width: 100%;
  padding: .7em;
}
</style>
