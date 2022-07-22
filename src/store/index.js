import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    posts:[],
  },
  getters:{
    usuarios(state){
      return state.usuarios;
    },
    posts(state){
      return state.posts;
    }
  },
  mutations: {
    setUsuarios(state, value){
      state.usuarios = value;
    },
    setPosts(state, value){
      state.posts = value;
    }
  },
  actions: {
    fetchUsuarios({commit}){
      axios.get("https://jsonplaceholder.typicode.com/users") .then((response)=>{
        commit('setUsuarios', response.data)
    })
    },
    fetchPosts({commit}, parametros={}){
      console.log(parametros.selected.id);
      axios.get(`https://jsonplaceholder.typicode.com/users/${parametros.selected.id}/posts`, {params: parametros}) .then((response)=>{
        commit('setPosts', response.data)
    })
    }
  }
})
