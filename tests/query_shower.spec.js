import { mount } from '@vue/test-utils';
import QueryShower from '../components/QueryShower';

describe('QueryShower Component', () => {
	beforeAll(() => {
		// this will not work
		// window.location.search = '?here=coolestever';
		window.history.pushState({}, 'Testing', '/?name=leia');
		window.isAdmin = true;
	});

	it('mounts correctly', () => {
		const component = mount(QueryShower);
		const html = component.html();

		expect(html).toBeDefined();
	});

	it('gets the right value', () => {
		// window.location.search = '?here=coolestever';
		const component = mount(QueryShower);

		expect(component.vm.getQueryValue('name')).toBe('leia');
	});

	it('shows the right message if they are an admin', () => {
		const component = mount(QueryShower);

		expect(component.vm.message).toBe('You are an admin, and your query is leia');
	});

	it('shows the right message if they are a normal user', () => {
		window.isAdmin = false;
		const component = mount(QueryShower);

		expect(component.vm.message).toBe('You are a normal user, and your query is leia');
	});
});
