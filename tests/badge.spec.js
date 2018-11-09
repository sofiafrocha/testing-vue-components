import { mount } from '@vue/test-utils';
import Badge from '../components/Badge';

describe('Badge Component', () => {
	it('mounts correctly', () => {
		const component = mount(Badge, {
			propsData: {
				value: 3,
			},
		});
		const html = component.html();

		// console.log('html', html);

		expect(html).toBeDefined();
	});

	it('shows the right value', () => {
		const component = mount(Badge, {
			propsData: {
				value: 3,
			},
		});
		expect(component.html()).toContain('>3</div>');
	});

	it('has a special class when "has-new" is passed', () => {
		const component = mount(Badge, {
			propsData: {
				value: 3,
				hasNew: true,
			},
		});
		expect(component.html()).toContain('class="c-Badge has-new"');
	});
});
