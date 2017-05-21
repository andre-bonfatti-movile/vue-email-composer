<template lang="html">
  <div
      @mouseover.stop="mouseOverActive"
      @mouseleave="isHoverActive = false"
      :class="{'content-item-hover': isHoverActive}"
  >*insert image here*</div>
</template>

<script>
export default {
  data() {
    return {
      isHoverActive: false
    };
  },
  methods: {
    mouseOverActive() {
      this.isHoverActive = true;
      this.$emit('contentmouseover');
    }
  }
}
</script>

<style lang="css">
</style>
