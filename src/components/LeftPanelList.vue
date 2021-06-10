<template>
  <q-list separator class="bg-grey-10 text-grey-2 full-height">
    <q-item-label header class="text-primary"> Explore Gridstack </q-item-label>
    <q-item :to="i.route" v-for="i in items" clickable>
      <q-item-section avatar>
        <q-icon name="chevron_right" />
      </q-item-section>
      <q-item-section>
        {{ i.label }}
      </q-item-section>
    </q-item>

  </q-list>
</template>

<script>
const items = [
  {
    label: "Code Hints",
    route: 'code-hints'
  },
  {
    label: "Gridstack Static",
    route: 'gridstack-static'
  },
  {
    label: "Gridstack Drag",
    route: 'gridstack-drag'
  },
  {
    label: "Gridstack Add",
    route: 'gridstack-add'
  },
  {
    label: "Gridstack Delete",
    route: 'gridstack-delete'
  },
  {
    label: "Gridstack Save",
    route: 'gridstack-save'
  },
  {
    label: "Gridstack Load",
    route: 'gridstack-load'
  },
  {
    label: "Gridstack Advanced",
    route: 'gridstack-advanced'
  },
  {
    label: "Gridstack Image",
    route: 'gridstack-image'
  },
  {
    label: "Gridstack Video",
    route: 'gridstack-video'
  },
  {
    label: "Gridstack Components",
    route: 'gridstack-components'
  },
  {
    label: "Gridstack Indicators",
    route: 'gridstack-indicators'
  },
  {
    label: "Gridstack Carousel",
    route: 'gridstack-carousel'
  },
  {
    label: "Gridstack Metro",
    route: 'gridstack-metro'
  },
]

export default {
  data() {
    return {
      items
    };
  },
};
</script>