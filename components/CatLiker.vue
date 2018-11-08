<template>
	<div>
		<p>How many 🐱s do you have?</p>
		<hr>
		<div>
			<p class="answer"><em>{{ answer }}</em></p>
			<button type="button" @click="cats++">More cats</button>
			<button type="button" @click="cats--">Less cats</button>
			<button type="button" @click="reset">Reset</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Badge',
	data() {
		return {
			cats: 0,
		};
	},
	methods: {
		reset() {
			this.cats = 0;
		},
	},
	computed: {
		answer() {
			if (this.cats === 1) {
				return 'I have 1 cat.';
			}

			if (this.cats < 0) {
				return 'I have negative cats!';
			}

			return `I have ${this.cats} cats.`;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
