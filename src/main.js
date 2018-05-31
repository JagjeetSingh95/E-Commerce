// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
}); // This is used for Chaning the title when page changed.

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
