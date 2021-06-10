<template>
<div
      class="newWidget grid-stack-item ui-draggable inline-block"
      gs-x="1"
      gs-y="0"
      gs-w="2"
      gs-h="2"
    >
      <div
        class="grid-stack-item-content"
        style="width: 151px; height: 151px;"
        draggable="true"
      >
        <div>
                    <q-circular-progress
      show-value
      font-size="20px"
      :value="75"
      size="120px"
      :thickness="0.25"
      color="white"
      track-color="teal-2"
      class="q-ma-md"
    >
      <div class="text-white">75%</div>
    </q-circular-progress>
        </div>
      </div>
    </div>
</template>

<script>
export default {

  data() {
    return {

    }
  }

}
</script>