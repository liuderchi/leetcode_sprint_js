const { default: climbingStairs } = require('./solution');

test('type of climbingStairs is function', () => {
  expect(typeof climbingStairs).toBe('function');
});

test('basic examples for climbingStairs()', () => {
  expect(climbingStairs(0)).toEqual(1);
  expect(climbingStairs(1)).toEqual(1);
  expect(climbingStairs(2)).toEqual(2);
  expect(climbingStairs(5)).toEqual(8);
  expect(climbingStairs(10)).toEqual(89);
  expect(climbingStairs(30)).toEqual(1346269);
  expect(climbingStairs(50)).toEqual(20365011074);
});
