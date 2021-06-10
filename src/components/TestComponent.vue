<template>
<div
      class="newWidget grid-stack-item ui-draggable inline-block"
      gs-x="1"
      gs-y="0"
      gs-w="3"
      gs-h="1"
    >
      <div
        class="grid-stack-item-content"
        style="width: 236px; height: 65px;"
        draggable="true"
      >
        <div>
          {{ label }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        label: String
    },
  data() {
    return {

    }
  }

}
</script>