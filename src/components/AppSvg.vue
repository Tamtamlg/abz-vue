<template>
  <svg class="svg" :width="width" :height="height">
    <use :xlink:href="src"></use>
  </svg>
</template>

<script>
export default {
  name: "AppSvg",
  props: {
    icon: String,
    width: String,
    height: String
  },
  computed: {
    src() {
      const sprite = require(`../assets/img/sprite.svg`);
      return sprite + `#${this.icon}`;
    }
  }
}
</script>

<style>

</style>
