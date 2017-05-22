<template lang="html">
  <div>
    <app-number-picker @updated="updateRowPadding" :increment="5" :max="50" :min="0" :initialValue="padding"></app-number-picker>
    {{ getColumnPadding() }}
  </div>
</template>

<script>
import NumberPicker from '../form/NumberPicker.vue';

export default {
  props: ['row'],
  data() {
    return {
      currentColumn: 0,
      padding: this.getColumnPadding()
    };
  },
  methods: {
    updateRowPadding(value) {
      const newColumn = Object.assign({}, this.row.columns[this.currentColumn]);
      newColumn.properties.padding = `0px calc(15% + ${(value || 0) + 'px'})`;
      this.row.columns.splice(0, 1, newColumn);
    },
    getColumnPadding() {
      console.log(this.row);
      const padding = this.row.columns[this.currentColumn].properties.padding;
      if (!padding) {
        return 0;
      }
      return parseInt(padding.replace(/0px\scalc\(15%\s\+\s(.*)px\)/, '$1'));
    }
  },
  components: {
    appNumberPicker: NumberPicker
  }
}
</script>

<style lang="css">
</style>
