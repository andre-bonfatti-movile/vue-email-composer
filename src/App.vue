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
      <!-- show components palette -->
      <app-palette v-if="!selectedRow" :selectedPalette="selectedPalette"></app-palette>
      <!-- or editor if row or content selected -->
      <app-row-editor v-else :component="selectedRow"></app-row-editor>
    </div>
  </div>
</template>

<script>
import Palette from './components/Palette.vue';
import RowEditor from './components/RowEditor.vue';

import SingleRow from './components/row/Single.vue';
import DoubleRow from './components/row/Double.vue';

export default {
  name: 'app',
  data() {
    return {
      /*
        structure: {
          componentName: 'app-double-structure',
        }
      */
      rows: [

        // single row format example
        {
          id: 1,
          component: 'app-single-row',
          columns: [
            {
              contentList: [
                { id: 10, component: 'app-image-content', properties: { } },
                { id: 11, component: 'app-image-content', properties: { } }
              ],
              properties: { }
            }
          ]
        },

        // single row format example
        {
          id: 2,
          component: 'app-double-row',
          columns: [
            {
              contentList: [
                { id: 12, component: 'app-image-content', properties: { } }
              ],
              properties: { }
            },
            {
              contentList: [
                { id: 13, component: 'app-image-content', properties: { } }
              ],
              properties: { }
            }
          ]
        }

      ],
      selectedPalette: 'app-content',
      selectedRow: null,
      selectedContent: null
    }
  },
  components: {
    appPalette: Palette,
    appRowEditor: RowEditor,
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
      this.selectedRow = this.rows.filter(r => r.id === rowId)[0];
    },
    selectPalette(paletteComponentName) {
      this.selectedRow = null;
      this.selectedPalette = paletteComponentName;
    }
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
  padding: 10px 30px;
}

.palette-container {
  float: left;
  width: 30%;
  border: 1px solid red;
  padding: 15px;
}

.row-item:after {
  content: "";
  display: table;
  clear: both;
}

.row-item-hover {
  outline: 3px solid blue;
}
</style>
