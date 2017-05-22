<template lang="html">
  <div 
      @mouseover="hoverRowActive = true"
      @mouseleave="hoverRowActive = false"
      :class="{'row-item-hover': hoverRowActive}"
      :style="row.rowProperties"
  >
    <div class="left">
      <app-content-wrapper
          v-for="content in row.column1.contentList"
          :content="content"
          :key="content.id"
          @contentmouseover="hoverRowActive = false"
      ></app-content-wrapper>
    </div>
    <div class="right">
      <app-content-wrapper
          v-for="content in row.column2.contentList"
          :content="content"
          :key="content.id"
          @contentmouseover="hoverRowActive = false"
      ></app-content-wrapper>
    </div>
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

<style lang="css" scoped>
  div.left, div.right {
    float: left;
    width: 50%;
  }
</style>
