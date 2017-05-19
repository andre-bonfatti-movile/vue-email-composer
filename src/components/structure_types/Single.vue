<template lang="html">
  <div :style="properties">
    <component :is="component"></component>
  </div>
</template>

<script>
import Empty from '../content/Empty.vue'

export default {
  data () {
    return {
      properties: {},
      component: 'app-empty'
    };
  },
  components: {
    appEmpty: 'app-empty'
  }
}
</script>

<style lang="css">
</style>
