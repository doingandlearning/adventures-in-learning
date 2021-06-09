<template>
  <div id="app">
    <div id="graph"></div>
    <div class="modal-overlay" id="modal-overlay" v-if="showModal"></div>

    <div class="modal" id="modal" v-if="showModal">
      <button class="close-button" id="close-button" @click="showModal = false">
        x
      </button>
      <div class="modal-guts">
        {{ modalContent.name }}
        <div class="mt-12">
          <button
            class="border rounded-lg bg-black text-white p-4"
            @click="$router.push(`/town/${modalContent.id}`)"
          >
            Visit Town
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ForceGraph from "force-graph";
import store from "../store";
export default {
  el: "#app",
  store: store,
  data() {
    return {
      graph: null,
      showModal: false,
      modalContent: null,
    };
  },
  methods: {
    visitNode(node) {
      this.modalContent = node;
      this.showModal = true;
    },
  },
  mounted() {
    this.graph = ForceGraph()(document.getElementById("graph"))
      .graphData(this.$store.state)
      .onNodeClick((node) => this.visitNode(node))
      .nodeColor((node) => (node.state === "UNVISITED" ? "red" : "green"))
      .onBackgroundClick(() => (this.showModal = false));
    // this.$store.dispatch("getTestData");
  },
};
</script>
<style scoped>
#app {
  display: flex;
  padding: 15px;
}

#graph {
  width: 75%;
  border: 1px solid grey;
}

.modal {
  display: block;
  width: 600px;
  max-width: 100%;

  height: 400px;
  max-height: 100%;

  position: fixed;

  z-index: 100;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  background: white;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.6);
}
.modal-guts {
  position: absolute;
  left: 0;
  padding-right: 40px;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px 50px 20px 20px;
}

.modal .close-button {
  position: absolute;

  /* don't need to go crazy with z-index here, just sits over .modal-guts */
  z-index: 1;

  top: 10px;

  /* needs to look OK with or without scrollbar */
  right: 20px;

  border: 0;
  background: black;
  color: white;
  padding: 5px 10px;
  font-size: 1.3rem;
}
</style>
