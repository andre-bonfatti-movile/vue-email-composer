<template lang="html">
  <div>
    <h4 style="margin: 0;">Row properties</h4>
    <hr>

    <h4 style="margin: 0;">Content properties</h4>
    <hr>
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
      <chrome-picker :value="rowBgColor" @input="updateFullRowBgColor"/>
    </div>

    <div class="clearfix" style="margin-top: 20px">
      <div>Content Background Color</div>
      <chrome-picker :value="contentBgColor" @input="updateRowBgColor"/>
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
import { Sketch } from 'vue-color';

export default {
  props: ['row'],
  data() {
    return {
      invalidPadding: false,
      colors1: defaultProps(),
      colors2: defaultProps()
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
      const rgba = evt.rgba;
      this.$set(this.row.rowProperties, 'backgroundColor',
        `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
    },
    updateRowBgColor(evt) {
      const rgba = evt.rgba;
      this.$set(this.row.contentProperties, 'backgroundColor',
        `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
    }
  },
  components: {
    // appNumberPicker: NumberPicker,
    chromePicker: Sketch
  }
}

function defaultProps() {
  return {
    hex: '#194d33'
  };
}
</script>

<style lang="css">
</style>
