<!--
- One issue is that for the grid to be properly generated to HTML, it must know the total number of columns to be used in grid-cols-x when defining the grid.
- This info is not available
-->

<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">

 <div class="text-white">
      <q-icon color="primary" size="md" name="warning" />
      This feature is experimental and may not always work correctly
    </div>

    <!-- Dialog -->
    <q-dialog v-model="showDialog" seamless position="bottom" class="z-top">
      <q-card class="relative-position bg-grey-10" style="width: 500px">
        <q-bar class="bg-blue">
          <div class="text-bold cursor-pointer non-selectable">
            <q-icon name="code" />
            Generated Grid HTML
          </div>

          <q-space />

          <q-btn @click="copy" dense flat icon="copy_all">
            <q-tooltip>Copy data</q-tooltip>
          </q-btn>
          <q-btn
            @click="isExpanded = !isExpanded"
            dense
            flat
            :class="{ 'rotate-180': !isExpanded }"
            icon="expand_circle_down"
          />
        </q-bar>

        <q-card-section class="q-pa-none">
          <q-scroll-area
            :class="{ expand: isExpanded }"
            class="expandable-container"
          >
            <pre class="language-html">
<code class="text-primary">
{{ content }}
</code>
</pre>
          </q-scroll-area>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="q-mb-lg">
      <h5 class="text-white">Gridstack JSON to HTML</h5>

<div class="q-my-lg">
  <div class="row q-gutter-md">
<q-select style="width: 300px;" dark color="primary" label="Set grid column" v-model="selectedColOption" :options="options" hint="This must be manually set" />
<q-checkbox
  dark
	v-model="selectGridFlowCol"
  class="text-primary"
	color="primary"
	label="Enable Grid Flow Col"
/>
</div>
</div>

      <!-- Content -->
      <div class="row">
        <div class="col-6">
          <q-input
            debounce="500"
            v-model="inputJson"
            autofocus
            rows="30"
            label-color="primary"
            input-class="text-secondary"
            label="Input Gridstack Json Data"
            outlined
            type="textarea"
          />
        </div>
        <div class="col-6">
          <div v-html="content"></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CodePanel from "components/CodePanel.vue";
import { copyToClipboard } from 'quasar'

const options = [
  'auto',
  'none',
  1,2,3,4,5,6,7,8,9,10,11,12
]
export default {
  components: {
    CodePanel,
  },
  watch: {
    selectGridFlowCol(val) {
      if(this.parsedJson) {
        this.buildHtml();
      }
    },
    selectedColOption(val) {
      if(this.parsedJson) {
        this.buildHtml();
      }
    },
    inputJson(val) {
      if (val) {
        try {
          this.parsedJson = JSON.parse(val);
          this.buildHtml();
        } catch (e) {
          this.$q.notify({
            message: `Error parsing JSON data`,
          });
        }
      }
    },
  },
  data() {
    return {
      options,
      selectedColOption: 'auto',
      selectGridFlowCol: false,
      inputJson: "",
      parsedJson: null,
      content: "",
      isExpanded: false,
      showDialog: true
    };
  },
  methods: {
    copy() {

      copyToClipboard(this.content, null, 2)
      .then(() => {
      this.$q.notify('Copied to clipboard')
      })
      .catch(() => {
      // fail
      })
    },
    /*
    grid grid-rows-2 // grid rows linked to y
    grid-gap and grid-flow-col are static

    grid-row-span-3 // This is linked to "h" per grid item
    grid-col-span-2 // this is linked to "w" per grid item
    */
    buildHtml() {
      let maxY = Math.max.apply(
        Math,
        this.parsedJson.map(function (o) {
          return o.y;
        })
      );

      let gridHtmlElArr = [];

      this.parsedJson.forEach((o) => {
        let gridW = "";
        if (o.w > 0) {
          gridW = `grid-col-span-${o.w}`;
        }

        let gridH = "";
        if (o.h > 0) {
          gridH = `grid-row-span-${o.h}`;
        }

        gridHtmlElArr.push(`
        <div class="${gridW} ${gridH}">
            <div class="text-white bg-teal-3 full-height flex items-center justify-center">
            ${o.content}
            </div>
        </div>
        `);
      });

      let gridHtmlElArrStr = gridHtmlElArr.join("\n");

      let gridParentClassArr = [
'grid',
`grid-rows-${maxY + 1}`,
`grid-cols-${this.selectedColOption}`,
'grid-gap-4'
      ]

      if(this.selectGridFlowCol) {
        gridParentClassArr.push('grid-flow-col')
      }

let gridParentClassStr = gridParentClassArr.join(' ')


// grid-flow-col can be used in place of grd-rows-x
      this.content = `
<div class="${gridParentClassStr}" style="height: 500px;">
  ${gridHtmlElArrStr}
</div>
`;

      this.isExpanded = true
    },
  },
};
</script>


<style scoped>
.expandable-container {
  height: 20px;
  transition: all .3s ease;
}

.expandable-container.expand {
  height: 500px;
}
</style>