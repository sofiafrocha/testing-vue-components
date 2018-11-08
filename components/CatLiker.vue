<template>
	<div>
		<p>How many cats do you have?</p>
		<hr>
		<div>
			<p class="answer">{{ answer }}</p>
			<button type="button" @click="cats++">More cats</button>
			<button type="button" @click="cats--">Less cats</button>
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
