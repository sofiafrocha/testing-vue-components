import { mount, createLocalVue } from '@vue/test-utils';
import VueResource from 'vue-resource';
import VueResourceMock from 'vue-resource-mock';
import AnimalLover from '../components/AnimalLover';
import MockData from './mock_data.js';

const localVue = createLocalVue();
localVue.use(VueResource);

localVue.use(VueResourceMock, MockData);

describe('AnimalLover Component', () => {
	it('mounts correctly', () => {
		const component = mount(AnimalLover, {
			localVue,
		});
		const html = component.html();

		expect(html).toBeDefined();
	});

	it('shows a picture if the API responds', () => {
		const component = mount(AnimalLover, {
			localVue,
		});

		expect(component.vm.failed).toBeNull();

		component.vm.getPicture().then(() => {
			expect(component.vm.failed).toBeFalsy();
			// console.log('!!!!!', component.vm.url);
		}).catch((err) => {
			console.log('ups.', err);
		});
	});

	it('shows a warning if the API does not respond', () => {
		const component = mount(AnimalLover, {
			localVue,
		});

		component.setData({ endpoint: 'https://random.dogo/woof.json' });

		expect(component.vm.failed).toBeNull();

		component.vm.getPicture().then(() => {}).catch(() => {
			expect(component.vm.failed).toBeTruthy();
		});
	});
});
