<template>
  <div id="app">
    <div class="row-container" style="position:relative;width:calc(100% - 350px);padding:15px;">
      <div>
        <app-single-row
            v-for="row in rows"
            class="row-item clearfix"
            :row="row"
            :key="row.id"
        >
        </app-single-row>
      </div>
    </div>
    <div class="palette-container">
      <app-mvp-editor
          @rowBackgroundUpdated="updateRowBgColor"
          @contentBackgroundUpdated="updateContentBgColor"
      ></app-mvp-editor>
    </div>
  </div>
</template>

<script>
import Palette from './components/Palette.vue';
import MVPEditor from './components/editor/MVPEditor.vue';
import ContentEditor from './components/editor/ContentEditor.vue';

import SingleRow from './components/row/Single.vue';
import DoubleRow from './components/row/Double.vue';

import { data } from './data/simple';
import { bus } from './main';

const defaultBgColor = '#888';
const defaultContentColor = '';

export default {
  name: 'app',
  data() {
    return {
      rows: data.rows,
      currentBgColor: 'gray',
      currentContentColor: ''
    }
  },
  components: {
    appPalette: Palette,
    'app-mvp-editor': MVPEditor,
    appContentEditor: ContentEditor,
    appSingleRow: SingleRow,
    appDoubleRow: DoubleRow
  },
  methods: {
    updateRowBgColor(color) {
      this.rows.forEach(r => {
        r.rowProperties.backgroundColor = color || defaultBgColor;
      });
    },
    updateContentBgColor(color) {
      this.rows.forEach(r => {
        console.log(r.contentProperties.backgroundColor);
        r.contentProperties.backgroundColor = color || defaultContentColor;
      });
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

.row-item {
  padding: 0em 15%;
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.content-item-hover {
  outline: 3px solid #2ecc71;
  outline-offset: 5px;
}

.palette-container {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  background-color: #f9f9f9;
  border-left: 1px solid #ccc;
  padding: 1em;
}

.invalid-input {
  outline: 2px solid lightcoral;
}

.medium-editor-element:focus {
  outline: 0px !important;
}

</style>
