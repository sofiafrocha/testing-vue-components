export default {
	// eslint-disable-next-line
	['GET http(s)\\://random.dog/woof.json'] () {
		const body = {
			url: 'https://random.dog/this-is-not-really-a-picture.jpg',
		};
		return {
			body,
			status: 200,
		};
	},
	// eslint-disable-next-line
	['GET http(s)\\://random.dogo/woof.json'] () {
		const body = {
			message: 'ups, there was an error',
		};
		return {
			body,
			status: 400,
		};
	},
};
