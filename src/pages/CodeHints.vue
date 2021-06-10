<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
  <div class="q-mb-lg">
        <h5 class="text-white">Integration with Quasar</h5>
        <vue-code-highlight>
// in router.index.js
import VueCodeHighlight from 'vue-code-highlight';
Vue.use(VueCodeHighlight) //registers the v-highlight directive
import 'vue-code-highlight/themes/duotone-sea.css';
        </vue-code-highlight>

  </div>

  <div class="q-mb-lg">
        <h5 class="text-white">Usage</h5>
        <vue-code-highlight>
// on any page or component
&#x3C;div v-highlight&#x3E;
    &#x3C;pre class=&#x22;language-javascript&#x22;&#x3E;
        &#x3C;code&#x3E;
            Code content
        &#x3C;/code&#x3E;
    &#x3C;/pre&#x3E;
&#x3C;/div&#x3E;
        </vue-code-highlight>

  </div>  

  <div class="q-mb-lg">
        <h5 class="text-white">CodePanel Usage</h5>
        <vue-code-highlight>
// Don't forget to import CodePanel first!
&#x3C;CodePanel&#x3E;
  &#x3C;template&#x3E; // Template tags are optional
    Code content
  &#x3C;/template&#x3E;
&#x3C;/CodePanel&#x3E;
        </vue-code-highlight>

  </div>
</q-page>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import 'vue-code-highlight/themes/duotone-sea.css';
export default {
components:{
  VueCodeHighlight
},
  data() {
    return {

    }
  },
  mounted() {

  }

}
</script>