<template>
	<div>
		<p>{{ message }}</p>
	</div>
</template>

<script>
export default {
	name: 'QueryShower',
	data() {
		return {};
	},
	methods: {
		getQueryValue(variable) {
			const query = window.location.search.substring(1);
			const vars = query.split('&');

			for (let i = 0; i < vars.length; i += 1) {
				const pair = vars[i].split('=');

				if (pair[0] === variable) {
					return pair[1];
				}
			}
			return '';
		},
	},
	computed: {
		isAdmin() {
			return window.isAdmin;
		},
		message() {
			if (this.isAdmin) {
				return `You are an admin, and your query is ${this.getQueryValue('name')}`;
			}

			return `You are a normal user, and your query is ${this.getQueryValue('name')}`;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
