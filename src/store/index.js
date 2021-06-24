import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: { nodes: [], links: [] },
  mutations: {
    initialiseStore() {
      // if (localStorage.getItem("store")) {
      //   this.replaceState(
      //     Object.assign(state, JSON.parse(localStorage.getItem("store")))
      //   );
      // }
    },
    VISIT_TOWN(state, id) {
      state.nodes.map((node) => {
        if (node.id === id) {
          node.state = "VISITED";
          return node;
        }
        return node;
      });
    },
    SET_MAPS_DATA(state, data) {
      state.mapsData = data;
    },
    SET_TOWNS_DATA(state, data) {
      state.townsData = data;
    },
    SET_ADVENTURES_DATA(state, data) {
      state.adventuresData = data;
    },
    SET_NODES_DATA(state, data) {
      state.nodes = data;
    },
    SET_LINKS_DATA(state, data) {
      state.links = data;
    },
  },
  actions: {
    async getMapsData({ commit }) {
      await axios
        .get("https://en3cc65xo3z2c4y.m.pipedream.net")
        .then((response) => {
          commit("SET_MAPS_DATA", response.data);
        });
    },
    async getTownData({ commit }) {
      await axios
        .get("https://en3cc65xo3z2c4y.m.pipedream.net")
        .then((response) => {
          commit("SET_MAPS_DATA", response.data);
        });
    },
  },
  modules: {},
});

store.subscribe((mutation, state) => {
  const tempState = { ...state };
  tempState.nodes = tempState.nodes.map((item) => {
    return {
      id: item.id,
      name: item.name,
      state: item.state,
    };
  });
  tempState.links = tempState.links?.map((item) => {
    return {
      source: item.source.id,
      target: item.target.id,
    };
  });

  localStorage.setItem("store", JSON.stringify(tempState));
});

export default store;
