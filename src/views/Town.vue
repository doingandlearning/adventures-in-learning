<template>
  <pre>{{ JSON.stringify(town) }}</pre>
  <div class="flex px-12">
    <div
      @click="visitAndReturn"
      class="w-1/2 border-2 border-black rounded-lg p-4 hover:text-white hover:bg-black"
    >
      <button>Mark as visited</button>
    </div>
    <div
      @click="$router.push('/map')"
      class="w-1/2 border-2 border-black rounded-lg p-4 ml-2 hover:text-white hover:bg-black"
    >
      <button>Return to map</button>
    </div>
  </div>
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
