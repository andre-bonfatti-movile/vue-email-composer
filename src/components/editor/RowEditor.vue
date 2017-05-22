<template lang="html">
  <div>
    <h4 style="margin-top: 0;">Row properties</h4>

    <div class="clearfix" style="margin-top: 20px">
      <div>Padding</div>
      <input
          type="number"
          :value="rowPadding"
          @input="updateRowPadding"
          :class="{'invalid-input': invalidPadding}"
      >
    </div>

    <div class="clearfix" style="margin-top: 20px">
      <div>Row Background Color</div>
      <input type="text" :value="fullRowBgColor" @input="updateFullRowBgColor">
    </div>

    <div class="clearfix" style="margin-top: 20px">
      <div>Content Background Color</div>
      <input type="text" :value="rowBgColor" @input="updateRowBgColor">
    </div>

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

export default {
  props: ['row'],
  data() {
    return {
      invalidPadding: false
    };
  },
  computed: {
    rowPadding() {
      return parseInt(this.row.column1.properties.padding) || 0;
    },
    fullRowBgColor() {
      return this.row.rowProperties.backgroundColor || '';
    },
    rowBgColor() {
      return this.row.column1.properties.backgroundColor || '';
    }
  },
  methods: {
    updateRowPadding(evt) {
      // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
      if (evt.target.value && parseInt(evt.target.value) && parseInt(evt.target.value) < 50 && parseInt(evt.target.value) >= 0) {
        this.invalidPadding = false;
        this.$set(this.row.column1.properties, 'padding', evt.target.value + 'px');
      } else {
        this.invalidPadding = true;
      }
    },
    updateFullRowBgColor(evt) {
      this.$set(this.row.rowProperties, 'backgroundColor', evt.target.value);
    },
    updateRowBgColor(evt) {
      this.$set(this.row.column1.properties, 'backgroundColor', evt.target.value);
    }
  },
  components: {
    appNumberPicker: NumberPicker
  }
}
</script>

<style lang="css">
</style>
