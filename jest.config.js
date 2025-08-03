/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.test.ts'],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!(p-retry|is-network-error|retry)/)'],
  moduleFileExtensions: ['ts', 'js', 'json'],
};

module.exports = config;
