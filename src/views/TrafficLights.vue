<template>
  <div class="home flex text-center flex-col">
    <p>Testing a function machine</p>
    <div class="text-center">
      <button
        @click="send('PROGRESS')"
        class="border rounded-xl p-4 bg-gray-200 w-1/6 text-center"
      >
        {{ state.value }}
      </button>
      <div class="mx-auto w-1/2">
        <Circle color="red" :active="isActive('red')" />
        <Circle color="yellow" :active="isActive('amber')" />
        <Circle color="green" :active="isActive('green')" />
      </div>
    </div>
  </div>
</template>

<script>
import { createMachine } from "xstate";
import { useMachine } from "@xstate/vue";
import Circle from "../components/Circle";

export const trafficLights = createMachine({
  id: "traffic",
  initial: "red",
  states: {
    red: {
      on: { PROGRESS: "redamber" },
    },
    redamber: {
      on: { PROGRESS: "green" },
    },
    green: {
      on: { PROGRESS: "amber" },
    },
    amber: {
      on: { PROGRESS: "red" },
    },
  },
});
export default {
  components: {
    Circle,
  },
  setup() {
    const { state, send } = useMachine(trafficLights);
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
