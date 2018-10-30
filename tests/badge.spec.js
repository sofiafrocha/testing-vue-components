import { mount } from '@vue/test-utils';
import Badge from './components/Badge';

describe('Badge Component', () => {
	it('mounts correctly', () => {
		const component = mount(Badge);

		expect(component.html()).toBeDefined();
	});
});
