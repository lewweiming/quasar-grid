<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <!-- Dialog -->
    <q-dialog v-model="showDialog" seamless position="bottom" class="z-top">
      <q-card class="relative-position bg-grey-10" style="width: 350px">
        <q-bar class="bg-blue">
          <div class="text-bold cursor-pointer non-selectable">
            <q-icon name="code" />
            Saved Data
          </div>

          <q-space />
          
          <q-btn @click="copy" dense flat icon="copy_all">
            <q-tooltip>Copy data</q-tooltip>
          </q-btn>
          <q-btn @click="isExpanded = !isExpanded" dense flat :class="{'rotate-180':!isExpanded}" icon="expand_circle_down" />
        </q-bar>

        <q-card-section class="q-pa-none">
          <q-scroll-area :class="{'expand':isExpanded}" class="expandable-container">
<pre class="language-javascript">
<code class="text-primary">
{{ savedData }}
</code>
</pre>
          </q-scroll-area>
          
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Sticky -->
    <CodePanel> empty </CodePanel>

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
          @click="save()"
          no-caps
          color="black"
          glossy
          class="text-white"
          label="Save"
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
import { copyToClipboard } from 'quasar'

export default {
  components: {
    CodePanel,
  },
  data() {
    return {
      grid: null,
      savedData: "",
      showDialog: true,
      isExpanded: false
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
    save() {
      
      this.savedData = this.grid.save();
      this.isExpanded = true
    },
    copy() {

      copyToClipboard(JSON.stringify(this.savedData, null, 2))
      .then(() => {
      this.$q.notify('Copied to clipboard')
      })
      .catch(() => {
      // fail
      })
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