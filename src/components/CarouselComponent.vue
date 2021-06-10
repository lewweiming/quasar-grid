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
        <div style="width: 151px; height: 151px;" class="relative-position">

        <q-img
          class="fade element"
          height="100%"
          src="https://images.pexels.com/photos/1662163/pexels-photo-1662163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <q-img
          class="fade element"
          height="100%"
          src="https://images.pexels.com/photos/1834398/pexels-photo-1834398.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <q-img
          class="fade element"
          height="100%"
          src="https://images.pexels.com/photos/3208298/pexels-photo-3208298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
                 
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


<style scoped>
.fade {
  animation: fade 12s linear 0s infinite;
}

.element {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.element:nth-child(2) {
  z-index: 2;
  animation-delay: 4s;
}

.element:nth-child(3) {
  z-index: 1;
  animation-delay: 8s;
}

@keyframes fade {
  25% {
    opacity: 1;
  }
  33.33% {
    opacity: 0;
  }
  91.66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>