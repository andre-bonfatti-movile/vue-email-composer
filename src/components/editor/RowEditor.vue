<template lang="html">
  <div>
    <h4 style="margin-top: 0;">Row properties</h4>

    <div class="clearfix" style="margin-top: 20px">
      <div>Padding</div>
      <input
          type="number"
          :value="column1Padding"
          @input="updateRowPadding($event, 'column1')"
          :class="{'invalid-input': invalidPadding}"
      >
    </div>

    <div class="clearfix" style="margin-top: 20px">
      <div>Row Background Color</div>
      <input type="text" :value="rowBgColor" @input="updateFullRowBgColor">
    </div>

    <div class="clearfix" style="margin-top: 20px">
      <div>Content Background Color</div>
      <input type="text" :value="contentBgColor" @input="updateRowBgColor">
    </div>

    <div v-if="row.column2">
      <div class="clearfix" style="margin-top: 20px">
        <div>Padding</div>
        <input
            type="number"
            :value="column2Padding"
            @input="updateRowPadding($event, 'column2')"
            :class="{'invalid-input': invalidPadding}"
        >
      </div>
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
    column1Padding() {
      return parseInt(this.row.column1.properties.padding) || 0;
    },
    column2Padding() {
      if (this.row.column2) {
        return parseInt(this.row.column2.properties.padding) || 0;
      }
    },
    column3Padding() {
      if (this.row.column3) {
        return parseInt(this.row.column3.properties.padding) || 0;
      }
    },
    column4Padding() {
      if (this.row.column4) {
        return parseInt(this.row.column4.properties.padding) || 0;
      }
    },
    rowBgColor() {
      return this.row.rowProperties.backgroundColor || '';
    },
    contentBgColor() {
      return this.row.contentProperties.backgroundColor || '';
    }
  },
  methods: {
    updateRowPadding(evt, columnAlias) {
      // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
      if (evt.target.value && parseInt(evt.target.value) && parseInt(evt.target.value) < 50 && parseInt(evt.target.value) >= 0) {
        this.invalidPadding = false;
        this.$set(this.row[columnAlias].properties, 'padding', evt.target.value + 'px');
      } else {
        this.invalidPadding = true;
      }
    },
    updateFullRowBgColor(evt) {
      this.$set(this.row.rowProperties, 'backgroundColor', evt.target.value);
    },
    updateRowBgColor(evt) {
      this.$set(this.row.contentProperties, 'backgroundColor', evt.target.value);
    }
  },
  components: {
    appNumberPicker: NumberPicker
  }
}
</script>

<style lang="css">
</style>
