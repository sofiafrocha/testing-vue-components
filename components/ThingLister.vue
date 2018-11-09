<template>
	<div>
		<input type="text" name="thing" v-model="currentText">
		<button @click="addThing" type="button">Add</button>

		<p v-show="list.length">Stuff we've already faked:</p>
		<ol>
			<li v-for="item in list" :key="item">{{ item }}</li>
		</ol>
	</div>
</template>

<script>
export default {
	name: 'ThingLister',
	data() {
		return {
			currentText: '',
			list: [],
		};
	},
	methods: {
		addThing() {
			this.list.push(this.currentText);
			this.$emit('changed-fake', this.currentText);
			this.currentText = '';
		},
	},
};
</script>

<style lang="scss" scoped>
ol {
	margin: 0;
	list-style: circle;

	li {
		padding-left: 0;
	}
}

p {
	opacity: 0.5;
	font-size: 0.75rem;
}
</style>
