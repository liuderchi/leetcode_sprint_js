const { default: intToRoman } = require('./solution');

test('basic examples for intToRoman()', () => {
  expect(intToRoman(0)).toBe('');
  expect(intToRoman(55)).toBe('LV');
});

test('type of intToRoman is function', () => {
  expect(typeof intToRoman).toBe('function');
});
