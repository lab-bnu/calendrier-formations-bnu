import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/components/HelloWorld.vue'
import NotFound from '@/components/HelloWorld.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: AccesDistantVue
      component: Home
    },
    // path for tags
    {
      path: '/tag/:tag',
      name: 'tag',
      component: Home,
      // pass list of tags as a prop
      //props: (route) => ({ tags: (route.params.tag).split(',') })
      // pass (a single) tag as a prop
      props: (route) => ({ tags: route.params.tag })
    },

    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    },

  ],
})

// native behavior of scrolling to an anchor is adding the status active to the element. To trigger this behavior, we need to add the attribute id to the element we want to scroll to.
// to add ::active to the element, we can use the following code:
// <a href="#my-anchor" id="my-anchor">My Anchor</a>


export default router
