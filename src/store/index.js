import Vue from 'nativescript-vue';
import Vuex from 'vuex';

// import counter from './modules/counter';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state: {
    estados: ''
  },
  mutations: {
    asignarEstados(state, payload) {
      state.estados = payload;
    }
  }
});

Vue.prototype.$store = store;

module.exports = store;