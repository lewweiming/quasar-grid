<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">

<!-- Sticky -->
    <q-page-sticky position="right" :offset="[0, 0]">
      <q-card square dark flat>
        <q-bar class="bg-blue text-grey-9">
          <div class="text-bold cursor-pointer non-selectable">
            Code
          </div>

          <q-space />
          <q-btn dense flat icon="code" />
        </q-bar>

        <q-card-section class="q-pa-none">
          <div v-highlight>
<pre class="language-javascript">
<code>
// To enable drag and drop mode, import following
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
</code>
</pre>
          </div>
        </q-card-section>
      </q-card>
    </q-page-sticky>


    <div class="q-mb-lg">
      <h5 class="text-white">Grid</h5>
      <div class="grid-stack text-white"></div>
    </div>
  </q-page>
</template>

<script>
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";

export default {
  data() {
    return {};
  },
  mounted() {
    var grid = GridStack.init();

    const serializedData = [
      { x: 0, y: 0, w: 2, h: 2, content: "item 1" },
      { x: 2, y: 3, w: 3, content: "item 2" },
      { x: 1, y: 3, content: "item 3" },
    ];

    grid.load(serializedData);
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