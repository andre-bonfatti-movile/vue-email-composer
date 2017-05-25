<template lang="html">
  <div :style="row.rowProperties" >

    <div :style="row.contentProperties">
      <div v-for="column in row.columns" :style="column.properties">
        <app-content-wrapper
            v-for="content in column.contentList"
            :content="content"
            :key="content.id"
            @contentmouseover="hoverRowActive = false"
        ></app-content-wrapper>
      </div>
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

<style lang="css">
</style>
