<template>
  <div v-intersection-viewport="options">
    <div ref="anim" />
  </div>
</template>

<script>
export default {
  name: 'lottieComponent',
  head() {
    return {
      script: [
        {
          hid: 'lottie',
          src: '/library/lottie.min.js',
          defer: true,
          callback: (lottie) => { this.isLottieLoaded = true; },
        }
      ]
    }
  },
  props: {
    dataUrl: {
      type: String,
      default: '/assets/lotties/test.json',
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    speed: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      isLottieLoaded: false,
      renderer: 'svg',
      lottie: null,
      options: {
        on: this.play,
        off: this.stop,
      }
    }
  },
  watch: {
    isLottieLoaded() {
      if (this.isLottieLoaded) {
        this.init();
      }
    },
  },
  methods: {
    init() {
      this.lottie = lottie.loadAnimation({
        container: this.$refs.anim, // the dom element that will contain the animation
        renderer: this.renderer,
        loop: this.loop,
        autoplay: this.autoPlay,
        path: this.dataUrl // the path to the animation json
      });
    },
    stop() {
      this.lottie?.stop();
    },
    play() {
      this.lottie?.play();
    },
    loopComplete() {
      this.$emit('loopComplete')
    },
    complete() {
      this.$emit('complete')
    }
  }
}
</script>

<style scoped>

</style>
