
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    notices: [{name: 'Places-web'},{name: 'Places-api'},{name: 'Places-web'},{name: 'Places-api'},{name: 'Places-web'}]
  },
})

export default store