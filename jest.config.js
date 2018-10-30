module.exports = {
	verbose: false,
	rootDir: './',
	moduleFileExtensions: ['vue', 'js', 'jsx'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>src/$1',
	},
	roots: [
		'<rootDir>tests',
	],
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.*\\.(vue)$': 'vue-jest',
	},
	transformIgnorePatterns: [
		// this lets us test vue components that import things
		// from the node_modules
		'node_modules/(?!@unbabel/ui)',
	],
	coverageDirectory: '../../coverage',
	collectCoverageFrom: [
		'**/*.{js,jsx,vue}',
		'!**/tests/**',
	],
	coveragePathIgnorePatterns: [
		'ComponentParty.vue',
	],
	testPathIgnorePatterns: [
		'/node_modules/',
	],
	/*
	coverageThreshold: {
		global: {
			lines: 70,
			branches: 50,
			functions: 80,
			statements: 70,
		},
	},
	*/
};
