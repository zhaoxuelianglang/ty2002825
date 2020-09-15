import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu:false,
  
  },
  mutations: {
    setMenu(state,status){
    state.showMenu = status  
    }
    
  },
  actions: {
  },
  modules: {
  }
})
