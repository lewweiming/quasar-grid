<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <!-- Sticky -->
    <code-panel>
export default {
  data() {
    return {
      grid: null,
    };
  },
  mounted() {
    this.grid = GridStack.init();

    const serializedData = [
      { x: 0, y: 0, w: 2, h: 2, content: "item 1" },
      { x: 2, y: 3, w: 3, content: "item 2" },
      { x: 1, y: 3, content: "item 3" },
    ];

    this.grid.load(serializedData);
  },
  methods: {
    add() {
      this.grid.addWidget({ w: 3, content: "hello" });
    },
  },
};
</code-panel>

    <div class="q-mb-lg">
      <h5 class="text-white">Grid</h5>

      <!-- Panel -->
      <div>
        <q-btn
          @click="add()"
          no-caps
          color="black"
          glossy
          class="text-white"
          label="Add"
        />
      </div>

      <div class="grid-stack text-white"></div>
    </div>
  </q-page>
</template>

<script>
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";

import CodePanel from 'components/CodePanel.vue'

export default {
  components: {
    CodePanel
  },
  data() {
    return {
      grid: null,
    };
  },
  mounted() {
    this.grid = GridStack.init();

    const serializedData = [
      { x: 0, y: 0, w: 2, h: 2, content: "item 1" },
      { x: 2, y: 3, w: 3, content: "item 2" },
      { x: 1, y: 3, content: "item 3" },
    ];

    this.grid.load(serializedData);
  },
  methods: {
    add() {
      this.grid.addWidget({ w: 3, content: "hello" });
    },
  },
};
</script>

<style>
.grid-stack-item-content {
  color: #2c3e50;
  text-align: center;
  background-color: #18bc9c;
}
</style>