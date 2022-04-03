import Vue from 'vue';

Vue.directive('intersectionViewport', {
  bind(el, binding, vnode) {
    el.interSectionObserver = new IntersectionObserver((entries, observer) => {
      const { on, off } = binding.value;
      entries[0].isIntersecting ? on() : off();
    }, {
      root: null,
      rootMargin: '10px',
      threshold: 0.0,
    });
    el.interSectionObserver.observe(el);
  },
  unbind(el, binding, vnode) {
    console.log('unbind', el, binding, vnode)
    el.interSectionObserver.disconnect();
  }
})
