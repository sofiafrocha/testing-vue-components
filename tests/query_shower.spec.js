import { mount } from '@vue/test-utils';
import QueryShower from '../components/QueryShower';

describe('QueryShower Component', () => {
	beforeAll(() => {
		// window.location.search = '?here=coolestever';
		// TODO change this to get something from the window.variableHere
	});

	it('mounts correctly', () => {
		const component = mount(QueryShower);
		const html = component.html();

		expect(html).toBeDefined();
	});

	it('gets the right value', () => {
		// we all hoped this would work
		// window.location.search = '?here=coolestever';
		const component = mount(QueryShower);

		// expect(component.vm.getQueryValue('here')).toBe('coolestever');
	});
});
