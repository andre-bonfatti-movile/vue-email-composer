<template lang="html">
  <div>
    <component :is="this.selectedPalette"></component>
  </div>
</template>

<script>
import Body from './palette/Body.vue';
import Structure from './palette/Structure.vue';
import Content from './palette/Content.vue';

export default {
  props: ['selectedPalette'],
  components: {
    appBody: Body,
    appStructure: Structure,
    appContent: Content
  }
}
</script>

<style lang="css">
</style>
