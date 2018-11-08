import Vue from 'vue';
import VueResource from 'vue-resource';
import ComponentParty from './ComponentParty.vue';

Vue.use(VueResource);

// eslint-disable-next-line
new Vue({
	el: '.app-mount',
	components: {
		componentParty: ComponentParty,
	},
	render: h => h(ComponentParty),
});
