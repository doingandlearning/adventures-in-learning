import { createStore } from "vuex";
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

export default createStore({
  state: { nodes, links },
  mutations: {
    VISIT_TOWN(state, id) {
      state.nodes.map((node) => {
        if (node.id === id) {
          node.state = "VISITED";
          return node;
        }
        return node;
      });
    },
  },
  actions: {},
  modules: {},
});
