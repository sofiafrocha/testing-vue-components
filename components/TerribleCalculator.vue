<template>
	<div>
		<input type="number" name="number_one" v-model="one">
		+
		<input type="number" name="number_two" v-model="two">
		=
		<span>{{ total }}</span>
		<button type="button" @click="updateNumbers">Randomize!</button>
	</div>
</template>

<script>
export default {
	name: 'TerribleCalculator',
	data() {
		return {
			one: 1,
			two: 1,
		};
	},
	methods: {
		updateNumbers() {
			this.one = this.getARandomNumber();
			this.two = this.getARandomNumber();
		},
		getARandomNumber() {
			return Math.floor(Math.random() * Math.floor(10));
		},
	},
	computed: {
		total() {
			return this.one + this.two;
		},
	},
};
</script>

<style lang="scss" scoped>
input {
	font-size: 1rem;
	width: 50px;
	height: 40px;
	text-align: center;
}
button {
	margin-left: 1rem;
}
</style>
