import { mount } from '@vue/test-utils';
import TerribleCalculator from '../components/TerribleCalculator';

describe('TerribleCalculator Component', () => {
	it('mounts correctly', () => {
		const component = mount(TerribleCalculator);
		const html = component.html();

		expect(html).toBeDefined();
	});

	it('calls the getRandomNumber method when the Randomize button is clicked', () => {
		const component = mount(TerribleCalculator);
		const btn = component.find('button');

		component.setMethods({ getARandomNumber: jest.fn() });

		btn.trigger('click');

		expect(component.vm.getARandomNumber).toBeCalledTimes(2);
	});
});
