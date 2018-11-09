<template>
	<div>
		<ol class="c-TodoStoreFront">
			<li v-for="(item, index) in todos" :key="item"
				@click="removeItem(index)">
				{{ item }}
			</li>
			<li v-show="todos.length === 0" class="no-items">
				<em>No items. Add some below.</em>
			</li>
		</ol>

		<input type="text" v-model="content">
		<button type="button" @click="addItem">Add</button>
	</div>
</template>

<script>
import store from './store';

export default {
	name: 'TodoStoreFront',
	store,
	data() {
		return {
			content: '',
		};
	},
	methods: {
		removeItem(index) {
			this.$store.dispatch('removeTodo', index);
		},
		addItem() {
			this.$store.dispatch('addTodo', this.content);
			this.content = '';
		},
	},
	computed: {
		todos() {
			return this.$store.getters.getTodos;
		},
	},
};
</script>

<style lang="scss" scoped>
* {
	color: red;
}
</style>
