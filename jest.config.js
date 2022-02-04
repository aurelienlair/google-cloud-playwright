module.exports = {
  verbose: true,
  preset: 'jest-playwright-preset',
  testTimeout: 90000,
  testMatch: ['**/tests/*.spec.js'],
  testRunner: 'jest-jasmine2',
};
