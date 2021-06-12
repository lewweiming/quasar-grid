<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">

    <div class="text-white">
      <q-icon color="primary" size="md" name="info" />
      This example uses custom classes stored in app.sass (Quasar Grid Tailwind Classes)
    </div>

<CodePanel>
// Uses Quasar Grid Tailwind Classes, see https://forum.quasar-framework.org/topic/6470/adding-css-grid-classes-to-quasar
&#x3C;div class=&#x22;grid grid-rows-3 grid-flow-col grid-gap-4&#x22; style=&#x22;height: 500px;&#x22;&#x3E;
  &#x3C;div class=&#x22;grid-row-span-3&#x22;&#x3E;
    &#x3C;div class=&#x22;text-white bg-teal-3 full-height flex items-center justify-center&#x22;&#x3E;
    1
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;grid-col-span-2&#x22;&#x3E;
    &#x3C;div class=&#x22;text-white bg-teal-4 full-height flex items-center justify-center&#x22;&#x3E;
    2
    &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;grid-row-span-2 grid-col-span-2&#x22;&#x3E;
    &#x3C;div class=&#x22;text-white bg-teal-5 full-height flex items-center justify-center&#x22;&#x3E;
    3
    &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</CodePanel>

  <div class="q-mb-lg">
        <h5 class="text-white">Basic</h5>
        <!-- Content -->
        <div class="grid grid-rows-3 grid-flow-col grid-gap-4" style="max-width: 500px; height: 500px;">
          <div class="grid-row-span-3">
            <div class="text-white bg-teal-3 full-height flex items-center justify-center">
            1
            </div>
          </div>
          <div class="grid-col-span-2">
            <div class="text-white bg-teal-4 full-height flex items-center justify-center">
            2
            </div>
            </div>
          <div class="grid-row-span-2 grid-col-span-2">
            <div class="text-white bg-teal-5 full-height flex items-center justify-center">
            3
            </div>
            </div>
        </div>
  </div>
</q-page>
</template>

<script>
import CodePanel from 'components/CodePanel.vue'
export default {
  components: {
    CodePanel
  },
  data() {
    return {

    }
  }

}
</script>