import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserProfile from '@/components/UserProfile'
import UserPost from '@/components/UserPost'
import NotFound from '@/components/NotFound'

Vue.use(Router);

const router = new Router({
  mode: 'history',//改成history让支持histroy的浏览器使用histroy模式，不支持的会强制使用hash模式
  routes: [{
    path: '/hello/:username',
    component: Hello,
    props: true,
    children: [{
      path: '',
      component: UserProfile,
      props: true
    }, {
      path: 'profile',
      component: UserProfile,
      props: true,
      beforeEnter: (to, from, next) => {
        console.log('router.beforeEnter---to:', to.path, 'from:', from.path)
        next();
      }
    }, {
      path: 'post',
      component: UserPost,
      props: true
    }]
  }, {
    path: '*',
    component: NotFound
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
