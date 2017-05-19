<template lang="html">
  <div class="structures-preview-container">
    <div class="single">
    </div>
    <div class="double">
      <span class="left">&nbsp;</span>
      <span class="right">&nbsp;</span>
    </div>
    <div class="double-left">
      <span class="left">&nbsp;</span>
      <span class="right">&nbsp;</span>
    </div>
    <div class="double-right">
      <span class="left">&nbsp;</span>
      <span class="right">&nbsp;</span>
    </div>
    <div class="triple">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
    <div class="quadruple">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
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

.structures-preview-container div {
  margin-bottom: 1em;
  height: 50px;
  width: 100%;
  border: 1px solid green;
}

.structures-preview-container span {
  height: 100%;
  display: inline-block;
}

.double .left {
  width: 50%;
  border-right: 1px solid green;
}

.double .right {
  width: 50%;
}

.double-left .left {
  width: 66.6%;
  border-right: 1px solid green;
}
.double-left .right {
  width: 33.3%;
}

.double-right .left {
  width: 33.3%;
  border-right: 1px solid green;
}

.double-right .right {
  width: 66.6%;
}

.triple span {
  width: 33.3%;
  border-right: 1px solid green;
}

.triple span:last-child {
  border-right: 0px;
}

.quadruple span {
  width: 25%;
  border-right: 1px solid green;
}

.quadruple span:last-child {
  border-right: 0px;
}

.structures-preview-container > div:hover {
  box-shadow: 0px 4px 7px #AAA;
  cursor: move;
}

</style>
