<template>
  <h1>Welcome to {{ town.name }}</h1>
  <div v-if="$store.state.adventures && $store.state?.adventures.length > 0">
    <p v-for="adventure in $store.state.adventures" :key="adventure">
      {{ adventure }}
    </p>
  </div>
  <div v-else><p>No adventures here yet.</p></div>
  <div class="flex px-12">
    <div
      @click="visitAndReturn"
      class="
        w-1/2
        border-2 border-black
        rounded-lg
        p-4
        hover:text-white
        hover:bg-black
      "
    >
      <button>Mark as visited</button>
    </div>
    <div
      @click="$router.push('/map')"
      class="
        w-1/2
        border-2 border-black
        rounded-lg
        p-4
        ml-2
        hover:text-white
        hover:bg-black
      "
    >
      <button>Return to map</button>
    </div>
  </div>
</template>

<script>
import { getAdventuresByTown } from "../services/airtable";
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
  mounted() {
    getAdventuresByTown(this.$store, this.$route.params.id);
  },
};
</script>

<style></style>
