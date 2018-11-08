<template>
<div class="a-ComponentParty">
	<h1>🎉 Getting started with testing Vue Components 🎉</h1>

	<br>

	<h2>1: The Basic Badge</h2>
	<h3 class="component">
		Your Notifications <badge :value="8" :has-new="true"></badge>
	</h3>

	<br>

	<h2>2: Computed Stuff and Methods 🤖</h2>
	<h3 class="component">
		<cat-liker></cat-liker>
	</h3>

	<br>

	<h2>3: Fake <span class="strikethrough">News</span>  {{ fake }} 📢</h2>
	<h3 class="component">
		<thing-lister @changed-fake="updateFake"></thing-lister>
	</h3>

	<br>

	<h2>4: Stalking methods 👀</h2>
	<h3 class="component">
		<terrible-calculator></terrible-calculator>
	</h3>

	<br>

	<h2>5: Doing things before you do them 🤔</h2>
	<h3 class="component">
		<query-shower></query-shower>
	</h3>

	<br>

	<h2>6: Stores 🏬</h2>
	<h3 class="component">
	</h3>

	<br>

	<h2>7: APIs? Ain't nobody got time for that 💁</h2>
	<h3 class="component">
		<animal-lover></animal-lover>
	</h3>
</div>
</template>

<script>
import Badge from '../components/Badge';
import CatLiker from '../components/CatLiker';
import ThingLister from '../components/ThingLister';
import TerribleCalculator from '../components/TerribleCalculator';
import QueryShower from '../components/QueryShower';
import AnimalLover from '../components/AnimalLover';

export default {
	name: 'ComponentParty',
	components: {
		badge: Badge,
		catLiker: CatLiker,
		thingLister: ThingLister,
		terribleCalculator: TerribleCalculator,
		queryShower: QueryShower,
		animalLover: AnimalLover,
	},
	data() {
		return {
			fake: 'events',
		};
	},
	methods: {
		updateFake(newFake) {
			this.fake = newFake;
		},
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
		border: 1px dotted #e64a19;
		border-radius: 3px;
	}
}

.strikethrough {
	text-decoration: line-through;
	text-decoration-style: double;
	opacity: 0.5;
}
</style>
