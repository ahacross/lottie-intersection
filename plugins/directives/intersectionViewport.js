import Vue from 'vue';

Vue.directive('intersectionViewport', {
  bind(el, binding, vnode) {
    console.log('bind', el, binding, vnode)

  },
  inserted (el, binding, vnode) {
    console.log('inserted ', el, binding, vnode)

  },
  unbind(el, binding, vnode) {
    console.log('unbind', el, binding, vnode)
  }
})
