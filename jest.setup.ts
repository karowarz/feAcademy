import '@testing-library/jest-dom';

//jest.config.js
module.exports = {
	roots: ['<rootDir>/src'],
	testMatch: [
		'**/__tests__/**/*.+(ts|tsx|js)',
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	transform: {
		// '^.+\\.(ts|tsx)$': 'ts-jest',
		// '^.+\\.(t|j)sx?$': 'ts-jest',
		'^.+\\.ts?$': 'ts-jest',
		"^.+\\.(js|jsx)$": "babel-jest"
	},

	coveragePathIgnorePatterns: [
		'/node_modules/'
	],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	}
};