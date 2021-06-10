<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <!-- Sticky -->
    <code-panel>      
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
    </code-panel>

    <div class="q-mb-lg">
      <h5 class="text-white">Grid</h5>
      <div class="grid-stack text-white"></div>
    </div>

    <div
      class="newWidget grid-stack-item ui-draggable"
      gs-x="1"
      gs-y="0"
      gs-w="2"
      gs-h="1"
      style="max-width: 400px;"
    >
      <div
        class="grid-stack-item-content"
        style="padding: 5px"
        draggable="true"
      >
        <div>
          <span>Drag me in the dashboard!</span>
        </div>
      </div>
    </div>

    <div
      id="trash"
      class="bg-red-4 q-pa-md text-center ui-droppable"
      style="max-width: 400px;"
    >
      <div>
        <span>Drop here to remove!</span>
      </div>
    </div>
  </q-page>
</template>

<script>
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
import CodePanel from "src/components/CodePanel.vue";

export default {
  components: { CodePanel },
  data() {
    return {};
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