<template>
  <div class="about">
    <h1>This is a test to demonstrate data fetching in Vues.</h1>
    {{ $store.state.testData }}
  </div>
</template>
<script>
export default {
  mounted() {
    // this.$store.dispatch("getTestData");
  },
};
</script>
