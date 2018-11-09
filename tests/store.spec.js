import store from '../components/store';

describe('The Store', () => {
	const blankState = JSON.parse(JSON.stringify(store.state));

	beforeEach(() => {
		// reset the store state before each test
		store.replaceState(JSON.parse(JSON.stringify(blankState)));
	});

	it('has a default state', () => {
		expect(store.state).toEqual({
			todos: ['hello there'],
		});
	});

	it('returns the list of todos', () => {
		expect(store.getters.getTodos).toEqual(['hello there']);
	});

	it('adds a todo to the list', () => {
		expect(store.state.todos).toEqual(['hello there']);
		store.dispatch('addTodo', 'added by a test');
		expect(store.state.todos).toEqual(['hello there', 'added by a test']);
	});

	it('removes a todo to the list', () => {
		expect(store.state.todos).toEqual(['hello there']);
		store.dispatch('removeTodo', (0));
		expect(store.state.todos).toEqual([]);
	});
});
