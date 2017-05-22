<template>
  <div id="app">
    <div class="row-container">
      <div >
        <component
            v-for="row in rows"
            class="row-item clearfix"
            :key="row.id"
            :is="row.component"
            :row="row"
            @click.native="selectRow(row.id)"
        >
        </component>
      </div>
    </div>
    <div class="palette-container">
      <div class="palette__tabs clearfix">
        <div :class="{active: selectedPalette == 'app-content'}" @click="selectPalette('app-content')">Content</div>
        <div :class="{active: selectedPalette == 'app-structure'}" @click="selectPalette('app-structure')">Structure</div>
        <div :class="{active: selectedPalette == 'app-body'}" @click="selectPalette('app-body')">Body</div>
      </div>
      <div class="palette__options-container">
        <!-- show editor if row or content selected -->
        <app-row-editor v-if="selectedRow" :row="selectedRow"></app-row-editor>
        <app-content-editor v-else-if="selectedContent" :component="selectedContent"></app-content-editor>
        <!-- show components palette -->
        <app-palette v-else :selectedPalette="selectedPalette"></app-palette>
      </div>
    </div>
  </div>
</template>

<script>
import Palette from './components/Palette.vue';
import RowEditor from './components/editor/RowEditor.vue';
import ContentEditor from './components/editor/ContentEditor.vue';

import SingleRow from './components/row/Single.vue';
import DoubleRow from './components/row/Double.vue';

import { data } from './initial_data';
import { bus } from './main';

export default {
  name: 'app',
  data() {
    return {
      rows: data.rows,
      selectedPalette: 'app-content',
      selectedRow: null,
      selectedContent: null
    }
  },
  components: {
    appPalette: Palette,
    appRowEditor: RowEditor,
    appContentEditor: ContentEditor,
    appSingleRow: SingleRow,
    appDoubleRow: DoubleRow
  },
  methods: {
    selectRow(rowId) {
      this.clearSelectables();
      this.selectedRow = this.rows.filter(r => r.id === rowId)[0];
    },
    selectPalette(paletteComponentName) {
      this.clearSelectables();
      this.selectedPalette = paletteComponentName;
    },
    clearSelectables() {
      this.selectedRow = null;
      this.selectedPalette = null;
      this.selectedContent = null;
    }
  },
  created() {
    bus.$on('content-selected', (content) => {
      this.selectedRow = null;
      this.selectedPalette = null;
      this.selectedContent = content;
    });
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Helvetica', sans-serif;
}

html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  position: relative;
  height: 100%;
}

.row-container {
  width: calc(100% - 350px);
  padding: 15px;
}

.row-item {
  padding: 10px 15px;
  padding: 0em 15%;
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.row-item-hover {
  outline: 2px solid blue;
}

.content-item-hover {
  outline: 2px solid lightseagreen;
}

.palette-container {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  background-color: #f9f9f9;
  border-left: 1px solid #ccc;
}

.palette__tabs div {
  width: 33.3%;
  padding: 1em;

  border: 1px solid #ccc;
  border-bottom: 0px;
  border-right: 0px;

  float: left;
  background-color: #ddd;
  color: #777;

  text-align: center;
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 700;
}

.palette__tabs div:first-child {
  border-left: 0px;
}

.palette__tabs div.active {
  background-color: #f9f9f9;
  color: #333;
}

.palette__tabs div:hover {
  cursor: pointer;
}

.palette__options-container {
  padding: 1em;
}

.invalid-input {
  outline: 2px solid lightcoral;
}

</style>
