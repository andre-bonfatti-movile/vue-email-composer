<template lang="html">
  <div :style="content.style">
    <medium-editor
        :text="content.html"
        :options="{}"
        custom-tag="p"
        v-on:edit="applyTextEdit"
        style="margin: 0;"
    >
    </medium-editor>
  </div>
</template>

<script>
import editor from 'vue2-medium-editor';

export default {
  props: ['content'],
  data() {
    return {
      text: "<b>Your</b> title here!"
    };
  },
  components: {
    'medium-editor': editor
  },
  methods: {
    applyTextEdit(html) {
      this.content.html = html;
    }
  }
}
</script>

<style lang="css">
</style>
