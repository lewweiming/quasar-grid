<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <!-- Sticky -->
    <code-panel>      
- Works well for q-circular-progress
- Does not resize when scaled
- One way to overcome this is to resize the component before drag and drop operation
    </code-panel>

    <div class="q-mb-lg">
      <h5 class="text-white">Grid</h5>
      <div class="grid-stack text-white"></div>
    </div>


    <h6 class="text-white">Widgets</h6>

    <div class="row items-center q-gutter-md">

    <!-- Widget 1 -->
    <indicator-component />

    </div>

<!-- Trash Bin -->
<q-page-sticky position="bottom" :offset="[0, 0]">
    <div
      id="trash"
      class="bg-grey-9 text-white q-pa-md text-center ui-droppable"
      style="min-width: 400px;"
    >
      <div>
        <q-icon size="xl" name="delete" />
      </div>
    </div>
</q-page-sticky>
  </q-page>
</template>

<script>
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
import CodePanel from "src/components/CodePanel.vue";
import IndicatorComponent from 'src/components/IndicatorComponent.vue';

export default {
  components: { CodePanel, IndicatorComponent },
  data() {
    return {
    };
  },
  mounted() {
    var grid = GridStack.init({
      acceptWidgets: true,
      dragIn: ".newWidget", // class that can be dragged from outside
      dragInOptions: {
        revert: "invalid",
        scroll: false,
        appendTo: "body",
        helper: "clone",
      }, // clone or can be your function
      removable: '#trash', // drag-out delete class
    });

    const serializedData = [
      { x: 0, y: 0, w: 2, h: 2, content: "item 1" },
      { x: 2, y: 3, w: 3, content: "item 2" },
      { x: 1, y: 3, content: "item 3" },
    ];

    grid.load(serializedData);
  },
};
</script>