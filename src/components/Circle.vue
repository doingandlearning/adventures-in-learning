<template>
  <div :style="style"></div>
</template>

<script>
export default {
  props: {
    color: String,
    active: Boolean,
  },
  computed: {
    style() {
      return `background-color: ${this.color}; opacity: ${
        this.active ? 1 : 0.2
      }`;
    },
  },
};
</script>

<style scoped>
div {
  background: lightblue;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  text-align: center;
  margin: 12px;
}
</style>
