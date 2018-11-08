<template>
	<div>
		{{ getQueryValue('here') }}
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
};
</script>

<style lang="scss" scoped>
</style>
