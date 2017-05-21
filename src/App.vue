<template>
  <div id="app">
    <div class="row-container">
      <div >
        <component
            v-for="row in rows"
            class="row-item"
            :key="row.id"
            :is="row.component"
            :row="row"
            @click.native="selectRow(row.id)"
        >
        </component>
      </div>
    </div>
    <div class="palette-container">
      <div>
        <button @click="selectPalette('app-content')">Content</button>
        <button @click="selectPalette('app-structure')">Structure</button>
        <button @click="selectPalette('app-body')">Body</button>
      </div>
      <!-- show editor if row or content selected -->
      <app-row-editor v-if="selectedRow" :component="selectedRow"></app-row-editor>
      <app-content-editor v-else-if="selectedContent" :component="selectedContent"></app-content-editor>
      <!-- show components palette -->
      <app-palette v-else :selectedPalette="selectedPalette"></app-palette>
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
  computed: {
    editorComponentName() {
      if (!selectedRow && !selectedContent) {
        return false;
      } else {
        return selectedRow;
      }
    }
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
    })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.row-container {
  float: left;
  width: 70%;
  border: 1px solid blue;
}

.palette-container {
  float: left;
  width: 30%;
  border: 1px solid red;
  padding: 15px;
}

.row-item {
  padding: 10px 15px;
}

.row-item:after {
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
</style>
