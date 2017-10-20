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
    children: [{
      path: '',
      component: UserProfile
    }, {
      path: 'profile',
      component: UserProfile
    }, {
      path: 'post',
      component: UserPost
    }]
  }]
})
