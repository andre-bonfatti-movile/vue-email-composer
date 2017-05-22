<template lang="html">
  <div>
    <span class="control">+</span>
    <span class="value">{{ number }}</span>
    <span class="control">-</span>
  </div>
</template>

<script>
export default {
  props: ['increment', 'value'],
}
</script>

<style lang="css">
</style>
