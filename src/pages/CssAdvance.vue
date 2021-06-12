<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <div class="text-white">
      <q-icon color="primary" size="md" name="info" />
      When grid-col-flow is used, the order of the grid items matter
    </div>

    <CodePanel>
&#x3C;div
  class=&#x22;grid grid-rows-2 grid-flow-col grid-gap-4&#x22;
  style=&#x22;max-width: 500px; height: 500px&#x22;
&#x3E;
  &#x3C;div class=&#x22;grid-col-span-2 grid-row-span-2&#x22;&#x3E;
    &#x3C;div
      class=&#x22;
        text-white
        bg-teal-3
        full-height
        flex
        items-center
        justify-center
      &#x22;
    &#x3E;
      1
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;

  &#x3C;div class=&#x22;grid-col-span-1 grid-row-span-1&#x22;&#x3E;
    &#x3C;div
      class=&#x22;
        text-white
        bg-teal-3
        full-height
        flex
        items-center
        justify-center
      &#x22;
    &#x3E;
      2
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;

  &#x3C;div class=&#x22;grid-col-span-1 grid-row-span-1&#x22;&#x3E;
    &#x3C;div
      class=&#x22;
        text-white
        bg-teal-3
        full-height
        flex
        items-center
        justify-center
      &#x22;
    &#x3E;
      3
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;

  &#x3C;div class=&#x22;grid-col-span-3 grid-row-span-1&#x22;&#x3E;
    &#x3C;div
      class=&#x22;
        text-white
        bg-teal-3
        full-height
        flex
        items-center
        justify-center
      &#x22;
    &#x3E;
      4
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;

  &#x3C;div class=&#x22;grid-col-span-3 grid-row-span-1&#x22;&#x3E;
    &#x3C;div
      class=&#x22;
        text-white
        bg-teal-3
        full-height
        flex
        items-center
        justify-center
      &#x22;
    &#x3E;
      5
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;      
    </CodePanel>

    <div class="q-mb-lg">
      <h5 class="text-white">Advance</h5>
      <!-- Content -->
      <div
        class="grid grid-rows-2 grid-flow-col grid-gap-4"
        style="max-width: 500px; height: 500px"
      >
        <div class="grid-col-span-2 grid-row-span-2">
          <div
            class="
              text-white
              bg-teal-3
              full-height
              flex
              items-center
              justify-center
            "
          >
            1
          </div>
        </div>

        <div class="grid-col-span-1 grid-row-span-1">
          <div
            class="
              text-white
              bg-teal-3
              full-height
              flex
              items-center
              justify-center
            "
          >
            2
          </div>
        </div>

        <div class="grid-col-span-1 grid-row-span-1">
          <div
            class="
              text-white
              bg-teal-3
              full-height
              flex
              items-center
              justify-center
            "
          >
            3
          </div>
        </div>

        <div class="grid-col-span-3 grid-row-span-1">
          <div
            class="
              text-white
              bg-teal-3
              full-height
              flex
              items-center
              justify-center
            "
          >
            4
          </div>
        </div>

        <div class="grid-col-span-3 grid-row-span-1">
          <div
            class="
              text-white
              bg-teal-3
              full-height
              flex
              items-center
              justify-center
            "
          >
            5
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CodePanel from "components/CodePanel.vue";
export default {
  components: {
    CodePanel,
  },
  data() {
    return {};
  },
};
</script>