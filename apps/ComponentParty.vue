<template>
<div class="a-ComponentParty">
	<h1>Getting started with testing Vue Components</h1>

	<br>

	<h2>Component 1: The Basic Badge</h2>
	<h3 class="component">
		Your Notifications <badge :value="8" :has-new="true"></badge>
	</h3>

	<br>

	<h2>Component 2: Computed Stuff</h2>
	<h3 class="component">
		<cat-liker></cat-liker>
	</h3>
</div>
</template>

<script>
import Badge from '../components/Badge';
import CatLiker from '../components/CatLiker';

export default {
	name: 'ComponentParty',
	components: {
		badge: Badge,
		catLiker: CatLiker,
	},
};
</script>

<style lang="scss" scoped>
.a-ComponentParty {
	font-size: 16px;
	padding: 1rem;
	font-family: -apple-system, sans-serif;

	h2 {
		color: #e64a19;
	}

	.component {
		padding: 1rem;
		border: 1px solid #e64a19;
	}
}
</style>
