import Vue from 'vue';
import ComponentParty from './ComponentParty.vue';

// eslint-disable-next-line
new Vue({
	el: '.app-mount',
	components: {
		componentParty: ComponentParty,
	},
	render: h => h(ComponentParty),
});
