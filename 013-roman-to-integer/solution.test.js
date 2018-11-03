import romanToInt from './solution';

test('type of romanToInt is function', () => {
  expect(typeof romanToInt).toBe('function');
});

test('basic examples for romanToInt()', () => {
  expect(romanToInt('')).toBe(0);
  expect(romanToInt('LV')).toBe(55);
});
