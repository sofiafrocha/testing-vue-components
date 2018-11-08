import saySomeoneLooksNice from '../utils/complimenter';

describe('The Complimenter Module', () => {
	// a test
	it('says someone looks nice today', () => {
		// we expect the result of this function to be that
		expect(saySomeoneLooksNice('Luke')).toBe('Luke, you look nice today!');
	});
});
