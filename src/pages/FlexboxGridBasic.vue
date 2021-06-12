<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">

<CodePanel>  
&#x3C;div class=&#x22;row q-col-gutter-md&#x22; style=&#x22;max-width: 500px; height: 300px;&#x22;&#x3E;
  &#x3C;div class=&#x22;col-6&#x22;&#x3E;
    &#x3C;div class=&#x22;bg-primary full-height&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;col-6&#x22;&#x3E;
    &#x3C;div class=&#x22;bg-primary full-height&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</CodePanel>

  <div class="q-mb-lg">
        <h5 class="text-white">Basic Flexbox Grid</h5>
        <!-- Content -->
        <div class="row q-col-gutter-md" style="max-width: 500px; height: 300px;">
          <div class="col-6">
            <div class="bg-primary full-height"></div>
          </div>
          <div class="col-6">
            <div class="bg-primary full-height"></div>
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