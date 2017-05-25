<template lang="html">
  <div>
    <form class="will-not-export">
      <label :for="`upload-${content.id}`">
        <img src="src/assets/image-placeholder.png" style="width: 100%;" alt="" :id="`content-${content.id}`">
        <input
            type="file"
            :id="`upload-${content.id}`"
            style="display:none"
            accept="image/x-png,image/gif,image/jpeg"
            @change="changeImageFile($event, content.id)">
      </label>
    </form>
  </div>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    changeImageFile(evt, contentId) {
      console.log(evt);
      if (evt.target.files && evt.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document.querySelector(`#content-${contentId}`).setAttribute('src', e.target.result)
        }
        reader.readAsDataURL(evt.target.files[0]);
      }
    }
  }
}

</script>

<style lang="css" scoped>
img {
  cursor: pointer;
}
</style>
