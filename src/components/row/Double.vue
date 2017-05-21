<template lang="html">
  <div :style="row.properties"
      @mouseover="hoverRowActive = true"
      @mouseleave="hoverRowActive = false"
      :class="{'row-item-hover': hoverRowActive}"
  >
    <div class="left">
      <component
          v-for="content in row.columns[0].contentList"
          :is="content.component"
          :content="content"
          :key="content.id"
      ></component>
    </div>
    <div class="right">
      <component
          v-for="content in row.columns[1].contentList"
          :is="content.component"
          :content="content"
          :key="content.id"
      ></component>
    </div>
  </div>
</template>

<script>
import EmptyContent from '../content/Empty.vue'
import ImageContent from '../content/Image.vue'
import SocialContent from '../content/Social.vue'
import TextContent from '../content/Text.vue'

export default {
  props: ['row'],
  data() {
    return {
      hoverRowActive: false
    };
  },
  components: {
    appEmptyContent: EmptyContent,
    appImageContent: ImageContent,
    appTextContent: TextContent,
    appSocialContent: SocialContent
  }
}
</script>

<style lang="css" scoped>
  div.left, div.right {
    float: left;
    width: 50%;
  }
</style>
