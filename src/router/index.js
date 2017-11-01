import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import UserProfile from '@/components/UserProfile'
// import UserPost from '@/components/UserPost'
// import NotFound from '@/components/NotFound'

import PageMsite from '@/pages/msite/msite'
import PageDiscover from '@/pages/discover/discover'
import PageOrder from '@/pages/order/order'
import PageMine from '@/pages/mine/mine'

Vue.use(Router);

const router = new Router({
  mode: 'history', //改成history让支持histroy的浏览器使用histroy模式，不支持的会强制使用hash模式
  routes: [{
    path: '',
    component: PageMsite
  }, {
    path: '/msite',
    component: PageMsite
  }, {
    path: '/discover',
    component: PageDiscover
  }, {
    path: '/order',
    component: PageOrder
  }, {
    path: '/mine',
    component: PageMine
  }]
})

router.beforeEach((to, from, next) => {
  console.log('router.beforeEach---to:', to.path, 'from:', from.path)
  next();
});

router.beforeResolve((to, from, next) => {
  console.log('router.beforeResolve---to:', to.path, 'from:', from.path)
  next();
});

router.afterEach((to, from) => {
  console.log('router.afterEach---to:', to.path, 'from:', from.path)
});

export default router
