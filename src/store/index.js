import { createStore } from "vuex";
// import axios from "axios";

const nodes = [
  { id: "render", name: "Render data in Vue", state: "UNVISITED" },
  { id: "component", name: "Component", state: "UNVISITED" },
  { id: "methods", name: "Methods", state: "UNVISITED" },
  { id: "computed", name: "Computed", state: "UNVISITED" },
];

const links = [
  { source: "render", target: "component" },
  { source: "render", target: "methods" },
  { source: "render", target: "computed" },
  { source: "methods", target: "component" },
];

const store = createStore({
  state: { nodes, links, testData: [] },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
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
    // SET_TEST_DATA(state, data) {
    //   state.testData = data;
    // },
  },
  actions: {
    // This is a test route.
    // getTestData({ commit }) {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => {
    //       commit("SET_TEST_DATA", response.data);
    //     });
    // },
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
  tempState.links = tempState.links.map((item) => {
    return {
      source: item.source.id,
      target: item.target.id,
    };
  });
  console.log(tempState);
  localStorage.setItem("store", JSON.stringify(tempState));
});

export default store;
