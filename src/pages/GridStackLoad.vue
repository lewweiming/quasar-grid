<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <!-- Dialog -->
    <q-dialog v-model="showDialog" seamless position="bottom" class="z-top">
      <q-card class="relative-position bg-grey-10" style="width: 350px">
        <q-bar class="bg-blue">
          <div class="text-bold cursor-pointer non-selectable">
            <q-icon name="code" />
            Data to load
          </div>

          <q-space />
          <q-btn @click="isExpanded = !isExpanded" dense flat :class="{'rotate-180':!isExpanded}" icon="expand_circle_down" />
        </q-bar>

        <q-card-section class="q-pa-none">
          <q-scroll-area :class="{'expand':isExpanded}" class="expandable-container">
          <q-input v-model="dataToLoad" type="textarea" rows=50 filled dark color="primary" />
          </q-scroll-area>
          
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Sticky -->
    <CodePanel>
// You will need to clear any existing markup on your own. Load appends data to the existing DOM.      
this.grid.load(JSON.parse(this.dataToLoad));
    </CodePanel>

    <div class="q-mb-lg">
      <h5 class="text-white">Grid</h5>

      <!-- Panel -->
      <q-btn-group flat>
        <q-btn
          @click="add()"
          no-caps
          color="black"
          glossy
          class="text-white"
          label="Add"
        />
        <q-btn
          @click="load()"
          no-caps
          color="black"
          glossy
          class="text-white"
          label="Load"
        />
      </q-btn-group>

      <div class="grid-stack text-white"></div>
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
      dataToLoad: "",
      showDialog: true,
      isExpanded: false
    };
  },
  mounted() {
    this.grid = GridStack.init();

    // const serializedData = [
    //   { x: 0, y: 0, w: 2, h: 2, content: "item 1" },
    //   { x: 2, y: 3, w: 3, content: "item 2" },
    //   { x: 1, y: 3, content: "item 3" },
    // ];

    // this.grid.load(serializedData);
  },
  methods: {
    add() {
      this.grid.addWidget({ w: 3, content: "hello" });
    },
    load() {

      // Validate
      if(this.dataToLoad == '') {
        this.$q.notify('Data cannot be empty!')
        return
      }

      this.grid.load(JSON.parse(this.dataToLoad));
      this.isExpanded = false
    }
  },
};
</script>

<style>
.expandable-container {
  height: 20px;
  transition: all .3s ease;
}

.expandable-container.expand {
  height: 500px;
}
</style>