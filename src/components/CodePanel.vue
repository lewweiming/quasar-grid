<template>
<q-page-sticky position="right" :offset="[0, 0]">
      <q-card dark flat style="max-width: 500px;">
        <q-bar class="bg-blue text-black">
          <div class="text-bold cursor-pointer non-selectable">Code</div>

          <q-space />
          <q-btn dense flat icon="code" />
        </q-bar>

        <q-card-section class="q-pa-none">
          <q-scroll-area style="height: 500px; min-width: 500px;">
          <div v-highlight>
            <pre class="language-javascript">
<!-- Optional <code style="white-space: pre-wrap;"> for wrapped lines -->
<code>
<slot>
</slot>
</code>
</pre>
          </div>
          </q-scroll-area>
        </q-card-section>
      </q-card>
    </q-page-sticky>
</template>

<script>
export default {

  data() {
    return {
    }
  }

}
</script>