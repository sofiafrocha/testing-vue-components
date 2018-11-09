import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TodoStorefront from '../components/TodoStorefront';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoStorefront Component', () => {
	let actions;
	let getters;

	let store;

	beforeEach(() => {
		actions = {
			addTodo: jest.fn(),
			removeTodo: jest.fn(),
		};
		getters = {
			getTodos: () => {
				return [
					'hello world',
				];
			},
		};
		store = new Vuex.Store({
			state: {},
			actions,
			getters,
		});
	});

	it('mounts correctly', () => {
		const component = mount(TodoStorefront, {
			localVue,
			store,
		});
		const html = component.html();

		expect(html).toBeDefined();
	});

	it('dispatches an action when you click the add button', () => {
		const component = mount(TodoStorefront, {
			localVue,
			store,
		});

		const btn = component.find('button');
		btn.trigger('click');

		expect(actions.addTodo.mock.calls.length).toBe(1);
	});

	it('dispatches an action when you click to remove a todo', () => {
		const component = mount(TodoStorefront, {
			localVue,
			store,
		});

		const item = component.find('li:first-child');
		item.trigger('click');

		expect(actions.removeTodo.mock.calls.length).toBe(1);
	});
});
