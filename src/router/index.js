import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserProfile from '@/components/UserProfile'
import UserPost from '@/components/UserPost'

Vue.use(Router);

export default new Router({
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
      props: true
    }, {
      path: 'post',
      component: UserPost,
      props: true
    }]
  }]
})
