import Vue from 'vue'

export default ({ store }) => {
  Vue.prototype.$test = () => {
    store.commit('counterIncrement')
    console.log(store.getters.getCounter);
  }
}
