import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state() {
		return {
			todos: [
				'hello there',
			],
		};
	},
	getters: {
		getTodos(state) {
			return state.todos;
		},
	},
	mutations: {
		pushTodo(state, newTodo) {
			state.todos.push(newTodo);
		},
		deleteTodo(state, indexToRemove) {
			state.todos.splice(indexToRemove, 1);
		},
	},
	actions: {
		addTodo(context, content) {
			context.commit('pushTodo', content);
		},
		removeTodo(context, index) {
			context.commit('deleteTodo', index);
		},
	},
});

export default store;
