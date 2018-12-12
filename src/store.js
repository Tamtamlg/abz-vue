import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: 'https://frontend-test-assignment-api.abz.agency/api/v1',
    endRequest: true,
    loading: false,
    showMenu: false,
    positions: [],
    users: [],
    isUsersPage: true,
    activeUser: {},
    message: ''
  },
  mutations: {
    request(state, payload) {
      state.endRequest = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
    setPositions(state, payload) {
      state.positions = payload;
    },
    setUsers(state, payload) {
      state.users = [...state.users, ...payload.users];
      if (payload.page === payload.total_pages) {
        state.isUsersPage = false;
      }
    },
    updateUsers(state, payload) {
      state.users = [...payload.users];
    },
    setActiveUser(state, payload) {
      state.activeUser = payload;
    },
    setMessage(state, payload) {
      state.message = payload;
      setTimeout(() => {
        state.message = '';
      }, 5000);
    }
  },
  actions: {
    setLoading({commit}, payload) {
      commit('setLoading', payload)
    },

    async getPositions({commit, state}) {
      commit('setLoading', true)
      try {
        commit('request', false)
        
        await axios.get(state.api + '/positions')
          .then(response => {
            if (response.data.success) {
              commit('setPositions', response.data.positions);
            }
          })
        commit('setLoading', false)
        commit('request', true)
      } catch (error) {
        commit('setLoading', false)
        console.log(error)
      }
    },

    async getUsers({commit, state}, payload) {
      commit('setLoading', true)
      try {
        commit('request', false)
        
        await axios.get(state.api + `/users?page=${payload.page}&count=${payload.count}`)
          .then(response => {
            if (response.data.success) {
              commit('setUsers', response.data);
            }
          })
        commit('setLoading', false)
        commit('request', true)
      } catch (error) {
        commit('setLoading', false)
        console.log(error)
      }
    },

    async updateUsers({commit, state}, payload) {
      commit('setLoading', true)
      try {
        commit('request', false)
        
        await axios.get(state.api + `/users?page=${payload.page}&count=${payload.count}`)
          .then(response => {
            if (response.data.success) {
              commit('updateUsers', response.data);
            }
          })
        commit('setLoading', false)
        commit('request', true)
      } catch (error) {
        commit('setLoading', false)
        console.log(error)
      }
    },

    async getActiveUser({commit, state}) {
      commit('setLoading', true)
      try {
        commit('request', false)
        
        await axios.get(state.api + `/users/1`)
          .then(response => {
            if (response.data.success) {
              commit('setActiveUser', response.data.user);
            }
          })
        commit('setLoading', false)
        commit('request', true)
      } catch (error) {
        commit('setLoading', false)
        console.log(error)
      }
    },
    
    async createNewUser({commit, dispatch, state}, payload) {
      commit('setLoading', true)
      try {
        commit('request', false)
        // т.к. авторизации в проекте нет, а для регистрации нового пользователя нужен токен, получим его перед отправкой формы
        await axios.get(state.api + `/token`)
          .then(response => {
            if (response.data.success) {
              let token = response.data.token;
              axios.post( state.api + '/users', payload, {
                headers: {
                  'Token': token,
                  'Content-Type': 'multipart/form-data'
                }
              }).then(response => {
                if (response.data.message) {
                  commit('setMessage', response.data.message)
                }
                dispatch('updateUsers', {page: 1, count: 6});
              }).catch((error) => {
                console.log(error);
              });
            }
          }).catch((error) => {
            console.log('error', error);
            if (error.data.message) {
              commit('setMessage', error.data.message)
            }
          });
        commit('setLoading', false)
        commit('request', true)
      } catch (error) {
        commit('setLoading', false)
        console.log(error)
      }
    },

  }
})
