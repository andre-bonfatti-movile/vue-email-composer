<template lang="html">
  <div class="block" :style="properties">
    oi, sou um block
  </div>
</template>

<script>
export default {
  data () {
    return {
      properties: {}
    };
  }
}
</script>

<style lang="css" scoped>
.block {
  min-height: 50px;
}
</style>
