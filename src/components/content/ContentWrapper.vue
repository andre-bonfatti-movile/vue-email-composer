<template lang="html">
  <component
      :is="content.component"
      @mouseover.native.stop="mouseOverActive"
      @mouseleave.native="isHoverActive = false"
      @click.native="contentSelected"
      :content="content"
      :class="{'content-item-hover': isHoverActive}"
  ></component>
</template>

<script>
import EmptyContent from '../content/Empty.vue';
import ImageContent from '../content/Image.vue';
import SocialContent from '../content/Social.vue';
import TextContent from '../content/Text.vue';

import { bus } from '../../main';

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
      if (this.content.component !== 'app-empty-content') {
        this.isHoverActive = true;
        this.$emit('contentmouseover');
      }
    },
    contentSelected(evt) {
      if (this.content.component !== 'app-empty-content') {
        bus.$emit('content-selected', this.content);
        evt.stopPropagation();
      }
    }
  }
}
</script>

<style lang="css">
</style>
