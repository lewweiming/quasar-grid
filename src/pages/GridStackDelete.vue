<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <!-- Sticky -->
    <code-panel>
      onRemove(e) { let elem = document.getElementById('gsi-1')
      this.grid.removeWidget(elem) }
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

      <div class="grid-stack text-white">

        <!-- Note that the defined widget to be brought into the grid stack needs to follow the same class semantics -->
        <div
          id="gsi-1"
          gs-w="1"
          gs-h="1"
          gs-auto-position="true"
          class="grid-stack-item q-pa-md"
        >
          <div class="grid-stack-item-content bg-primary">
            <q-btn @click="onRemove($event)" flat icon="delete" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";

import CodePanel from "components/CodePanel.vue";

export default {
  components: {
    CodePanel,
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

    this.grid.makeWidget("#gsi-1");
  },
  methods: {
    add() {
      this.grid.addWidget(
        '<div class="grid-stack-item"><div class="grid-stack-item-content">2</div></div>',
        { w: 3 }
      );
    },
    onRemove(e) {
      let elem = document.getElementById("gsi-1");
      this.grid.removeWidget(elem);
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