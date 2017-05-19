<template>
  <div id="app">
    <div class="blocks-container">
      <div v-for="structure in structures">
        <app-structure :structure="structure"></app-structure>
      </div>
    </div>
    <div class="palette-container">
      <div>
        <button @click="selectedPalette = 'app-content'">Content</button>
        <button @click="selectedPalette = 'app-structure'">Structure</button>
        <button @click="selectedPalette = 'app-body'">Body</button>
      </div>
      <app-palette :selectedPalette="selectedPalette"></app-palette>
    </div>
  </div>
</template>

<script>
import TemplateStructure from './components/TemplateStructure.vue';
import Palette from './components/Palette.vue';

export default {
  name: 'app',
  data() {
    return {
      /*
        structure: {
          componentName: 'app-double-structure',
        }
      */
      structures: [],
      selectedPalette: null,
      selectedStructure: 'app-content'
    }
  },
  components: {
    appStructure: TemplateStructure,
    appPalette: Palette
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.blocks-container {
  float: left;
  width: 70%;
  border: 1px solid blue;
}

.palette-container {
  float: left;
  width: 30%;
  border: 1px solid red;
}
</style>
