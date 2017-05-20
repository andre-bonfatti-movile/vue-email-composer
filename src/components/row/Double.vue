<template lang="html">
  <div :style="row.properties">
    <div class="left">
      <div v-for="content in row.column1.contentList">
        <component :is="content.component" :content="content"></component>
      </div>
    </div>
    <div class="right">
      <div v-for="content in row.column2.contentList">
        <component :is="content.component" :content="content"></component>
      </div>
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
