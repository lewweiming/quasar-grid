
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'code-hints', component: () => import('pages/CodeHints.vue') },
      { path: 'gridstack-static', component: () => import('pages/GridStackStatic.vue') },
      { path: 'gridstack-drag', component: () => import('pages/GridStackDrag.vue') },
      { path: 'gridstack-add', component: () => import('pages/GridStackAdd.vue') },
      { path: 'gridstack-delete', component: () => import('pages/GridStackDelete.vue') },
      { path: 'gridstack-save', component: () => import('pages/GridStackSave.vue') },
      { path: 'gridstack-load', component: () => import('pages/GridStackLoad.vue') },
      { path: 'gridstack-advanced', component: () => import('pages/GridStackAdvanced.vue') },
      { path: 'gridstack-image', component: () => import('pages/GridStackImage.vue') },
      { path: 'gridstack-video', component: () => import('pages/GridStackVideo.vue') },
      { path: 'gridstack-components', component: () => import('pages/GridStackComponents.vue') },
      { path: 'gridstack-indicators', component: () => import('pages/GridStackIndicators.vue') },
      { path: 'gridstack-carousel', component: () => import('pages/GridStackCarousel.vue') },
      { path: 'gridstack-metro', component: () => import('pages/GridStackMetro.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
