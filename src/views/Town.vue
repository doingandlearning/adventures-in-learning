<template>
  <pre>{{ JSON.stringify(town) }}</pre>
  <div><button @click="visitAndReturn">Mark as visited</button></div>
</template>

<script>
export default {
  methods: {
    visitAndReturn() {
      this.$store.commit("VISIT_TOWN", this.town.id);
      this.$router.push("/map");
    },
  },
  computed: {
    town() {
      return (
        this.$store.state.nodes.filter(
          (node) => node.id === this.$route.params.id
        )[0] || {}
      );
    },
  },
};
</script>

<style></style>
