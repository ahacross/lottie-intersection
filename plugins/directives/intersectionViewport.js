import Vue from 'vue';

let interSectionObserver;

Vue.directive('intersectionViewport', {
  inserted(el, binding, vnode) {
    interSectionObserver = new IntersectionObserver((entries, observer) => {
      const { on, off } = binding.value;
      entries[0].isIntersecting ? on() : off();
    }, {
      root: null,
      rootMargin: '10px',
      threshold: 0.0,
    });

    interSectionObserver.observe(el);
  },
  unbind(el, binding, vnode) {
    console.log('unbind', el, binding, vnode)
    interSectionObserver.disconnect();
  }
})
