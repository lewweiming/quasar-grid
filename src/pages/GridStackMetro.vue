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
- Static layout grid Metro style
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

export default {
  data() {
    return {};
  },
  mounted() {
    var grid = GridStack.init({
      staticGrid: true
    });

    const serializedData = [
  {
    "x": 0,
    "y": 0,
    "w": 2,
    "h": 1,
    "content": "Tile 1"
  },
  {
    "w": 1,
    "content": "Tile 2",
    "x": 2,
    "y": 0,
    "h": 1
  },
  {
    "w": 1,
    "content": "Tile 3",
    "x": 3,
    "y": 0,
    "h": 1
  },
  {
    "w": 2,
    "content": "Tile 4",
    "x": 4,
    "y": 0,
    "h": 1
  },
  {
    "x": 0,
    "y": 1,
    "w": 1,
    "content": "Tile 5",
    "h": 1
  },
  {
    "x": 1,
    "y": 1,
    "content": "Tile 6",
    "w": 1,
    "h": 1
  },
  {
    "w": 2,
    "content": "Tile 7",
    "x": 2,
    "y": 1,
    "h": 1
  },
  {
    "w": 2,
    "content": "Tile 8",
    "x": 4,
    "y": 1,
    "h": 1
  },
  {
    "w": 1,
    "content": "Tile 9",
    "x": 0,
    "y": 2,
    "h": 1
  },
  {
    "w": 1,
    "content": "Tile 10",
    "x": 1,
    "y": 2,
    "h": 1
  },
  {
    "w": 2,
    "content": "Tile 11",
    "x": 2,
    "y": 2,
    "h": 1
  },
  {
    "w": 1,
    "content": "Tile 12",
    "x": 4,
    "y": 2,
    "h": 1
  },
  {
    "w": 1,
    "content": "Tile 13",
    "x": 5,
    "y": 2,
    "h": 1
  }
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