<template lang="html">
  <div>
    <div class="structure-row">
      <div style="background-image:url(./src/assets/one-column-empty.svg)"></div>
    </div>
    <div class="structure-row">
      <div style="background-image:url(./src/assets/two-columns-empty.svg)"></div>
    </div>
    <div class="structure-row">
      <div style="background-image:url(./src/assets/two-columns-4-8-empty.svg)"></div>
    </div>
    <div class="structure-row">
      <div style="background-image:url(./src/assets/two-columns-8-4-empty.svg)"></div>
    </div>
    <div class="structure-row">
      <div style="background-image:url(./src/assets/three-columns-empty.svg)"></div>
    </div>
    <div class="structure-row">
      <div style="background-image:url(./src/assets/four-columns-empty.svg)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

.structure-row > div{
  background-repeat: no-repeat;
  background-size: 100%;
  height: 50px;
}

.structure-row {
  padding: 1em;
  margin-bottom: .5em;
}

.structure-row:hover {
  cursor: move;
  box-shadow: 0px 3px 8px #AAA;
}

</style>
