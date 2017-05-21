<template lang="html">
  <component
      :is="content.component"
      @mouseover.native.stop="mouseOverActive"
      @mouseleave.native="isHoverActive = false"
      :class="{'content-item-hover': isHoverActive}"
  ></component>
</template>

<script>
import EmptyContent from '../content/Empty.vue'
import ImageContent from '../content/Image.vue'
import SocialContent from '../content/Social.vue'
import TextContent from '../content/Text.vue'

export default {
  props: ['content'],
  data() {
    return {
      isHoverActive: false
    };
  },
  components: {
    appEmptyContent: EmptyContent,
    appImageContent: ImageContent,
    appTextContent: TextContent,
    appSocialContent: SocialContent
  },
  methods: {
    mouseOverActive() {
      this.isHoverActive = true;
      console.log('ops');
      this.$emit('contentmouseover');
    }
  }
}
</script>

<style lang="css">
</style>
