<template>
  <div class="home flex text-center flex-col">
    <p className="my-6 text-xl font-bold">Here are the available maps:</p>

    <div
      v-for="map in $store.state.mapsData"
      :key="map.id"
      class="border rounded-xl my-4"
    >
      <router-link :to="`/map/${map.id}`">
        <p>{{ map.fields.Name }}</p>
        <p v-if="map.fields.Towns">
          (visit {{ map.fields?.Towns.length }} towns)
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from "../store";
import {
  getMaps,
  // getTownsByMap,
  // getAdventuresByTown,
} from "../services/airtable";
export default {
  el: "#app",
  store: store,
  data() {
    return {
      // maps: this.$store.mapsData,
    };
  },
  methods: {},
  mounted() {
    getMaps(this.$store);
  },
};
</script>
