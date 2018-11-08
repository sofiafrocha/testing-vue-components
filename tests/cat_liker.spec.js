import { mount } from '@vue/test-utils';
import CatLiker from '../components/CatLiker';

describe('CatLiker Component', () => {
	it('mounts correctly', () => {
		const component = mount(CatLiker);
		const html = component.html();

		expect(html).toBeDefined();
	});

	it('answers something different if there are negative cats', () => {
		const component = mount(CatLiker);

		component.setData({
			cats: -1,
		});

		expect(component.vm.answer).toBe('I have negative cats!');
		expect(component.html()).toContain('I have negative cats!');
	});

	it('answers the singular (cat) or plural (cats) depending on the number', () => {
		const component = mount(CatLiker, {
			data() {
				return {
					cats: 3,
				};
			},
		});
		expect(component.vm.answer).toBe('I have 3 cats.');
		expect(component.html()).toContain('I have 3 cats.');

		component.setData({ cats: 1 });

		expect(component.vm.answer).toBe('I have 1 cat.');
		expect(component.html()).toContain('I have 1 cat.');
	});

	it('calling reset() reset the number of cats to zero', () => {
		const component = mount(CatLiker);

		component.setData({
			cats: 23,
		});

		expect(component.vm.cats).toBe(23);

		component.vm.reset();

		expect(component.vm.cats).toBe(0);
	});
});
