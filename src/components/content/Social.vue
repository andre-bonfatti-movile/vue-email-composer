<template lang="html">
  <div
      @mouseover.stop="mouseOverActive"
      @mouseleave="isHoverActive = false"
      :class="{'content-item-hover': isHoverActive}"
  >*social icons*</div>
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
