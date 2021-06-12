<template>
  <q-list separator class="bg-grey-10 text-grey-2 full-height">
      <q-expansion-item
        expand-separator
        label="Explore Gridstack"
        class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pa-none">
            <q-list separator class="bg-grey-10 text-grey-2">
            <q-item :to="i.route" v-for="i in gridStackItems" clickable>
              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
              <q-item-section>
                {{ i.label }}
              </q-item-section>
            </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        label="Explore Flexbox Grids"
        class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pa-none">
            <q-list separator class="bg-grey-10 text-grey-2">
            <q-item :to="i.route" v-for="i in flexboxItems" clickable>
              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
              <q-item-section>
                {{ i.label }}
              </q-item-section>
            </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>   

      <q-expansion-item
        expand-separator
        label="Explore CSS Grids"
        class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pa-none">
            <q-list separator class="bg-grey-10 text-grey-2">
            <q-item :to="i.route" v-for="i in cssItems" clickable>
              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
              <q-item-section>
                {{ i.label }}
              </q-item-section>
            </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>   
    

  </q-list>
</template>

<script>
const gridStackItems = [
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

const flexboxItems = [
  {
    label: "Basic",
    route: 'flexbox-basic'
  },
  {
    label: "Advance",
    route: 'flexbox-advance'
  }
]

const cssItems = [
  {
    label: "Basic",
    route: 'css-basic'
  },
  {
    label: "Advance",
    route: 'css-advance'
  }
]

export default {
  data() {
    return {
      gridStackItems,
      flexboxItems,
      cssItems
    };
  },
};
</script>