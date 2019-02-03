import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	title: 'Detail Setting',
  	previousRoute: '',
  	userList: [
      {'userName': 'Ashan', 'id': 1, 'lastName': 'perera' },
      {'userName': 'Madawa', 'id': 2, 'lastName': 'chandarathne' },
      {'userName': 'Gayan', 'id': 3, 'lastName': 'charith' },
    ],
    equipmentList: [
      {'name': 'Computer', 'count': 5 },
      {'name': 'Chairs', 'count': 5 },
      {'name': 'Desk', 'count': 5 },
    ]
  },
  mutations: {
  	ADD_USER: (state, user) => {
      state.userList.push(user)
    },
    REMOVE_USER: (state, user) => {
      state.userList.splice(user, 1)
    },
    CHANGE_PREVIOUS_ROUTE: (state, route) => {
      state.previousRoute = route;
    }
  },
  actions: {
  	removeUser: (context, user) => { 
      context.commit("REMOVE_USER", user)
    },
    addUser: (context, user) => {    
      context.commit("ADD_USER", user)
    },
    changePreviousRoute: (context, route) => { 
      context.commit("CHANGE_PREVIOUS_ROUTE", route)
    }
  }
})
