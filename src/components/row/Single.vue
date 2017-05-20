<template lang="html">
  <div :style="row.properties">
    <div v-for="content in row.column1.contentList">
      <component :is="content.component" :content="content"></component>
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

<style lang="css">
</style>
