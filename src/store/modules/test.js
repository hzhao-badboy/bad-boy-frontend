export default {
  namespaced: true,

  state: {
    count: 0,
    todos: []
  },

  getters: {
    getCount: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },

  mutations: {
    increment(state) {
      state.count++;
    }
  }

}
