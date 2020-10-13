import axios from 'axios';

const state = {
    todos: []
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos({ commit }){
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
         commit('setTodos', res.data)
    },
    async AudioDestinationNode({ commit }, title) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false});

        commit('newTodo', res.data);
    }
};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
    state,
    getters,
    actions,
    mutations
};