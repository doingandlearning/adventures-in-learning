<script>
import { createMachine } from "xstate";
import { useMachine } from "@xstate/vue";

export const town = createMachine({
  id: "town",
  initial: "unvisited",
  states: {
    unvisited: {
      on: { PROGRESS: "visited" },
    },
    visited: {
      on: { PROGRESS: "completed" },
    },
    completed: {
      type: "final",
    },
  },
});
export default {
  setup() {
    const { state, send } = useMachine(town);
    return {
      state,
      send,
    };
  },
  methods: {
    isActive(color) {
      return this.state.value.includes(color);
    },
  },
};
</script>

<style></style>
