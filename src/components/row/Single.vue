<template lang="html">
  <div :style="row.properties"
      @mouseover="hoverRowActive = true"
      @mouseleave="hoverRowActive = false"
      :class="{'row-item-hover': hoverRowActive}"
  >
    <app-content-wrapper
        v-for="content in row.columns[0].contentList"
        :content="content"
        :key="content.id"
        @contentmouseover="hoverRowActive = false"
    ></app-content-wrapper>
  </div>
</template>

<script>
import ContentWrapper from '../content/ContentWrapper.vue';

export default {
  props: ['row'],
  data() {
    return {
      hoverRowActive: false
    };
  },
  components: {
    appContentWrapper: ContentWrapper
  }
}
</script>

<style lang="css">
</style>
