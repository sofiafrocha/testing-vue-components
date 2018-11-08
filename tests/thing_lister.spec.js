import { mount } from '@vue/test-utils';
import ThingLister from '../components/ThingLister';

describe('ThingLister Component', () => {
	it('mounts correctly', () => {
		const component = mount(ThingLister, {
			propsData: {
				value: 3,
			},
		});
		const html = component.html();

		expect(html).toBeDefined();
	});

	it('adds the input content to the list when you click', () => {
		const component = mount(ThingLister, {
			data() {
				return {
					currentText: 'darth vader',
				};
			},
		});
		expect(component.vm.list).toEqual([]);

		const btn = component.find('button');
		btn.trigger('click');

		expect(component.vm.list).toEqual(['darth vader']);
	});

	it('emits an event when you add a thing', () => {
		const component = mount(ThingLister, {
			data() {
				return {
					currentText: 'yoda',
				};
			},
		});
		const btn = component.find('button');

		expect(component.emitted()['changed-fake']).toBeFalsy();

		btn.trigger('click');

		expect(component.emitted()['changed-fake']).toBeTruthy();
	});
});
