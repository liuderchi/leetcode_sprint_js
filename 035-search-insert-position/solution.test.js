const { default: searchInsertPosition } = require('./solution');

test('type of searchInsertPosition is function', () => {
  expect(typeof searchInsertPosition).toBe('function');
});

test('basic examples for searchInsertPosition()', () => {
  expect(searchInsertPosition([1, 3, 5, 6], 5)).toEqual(2);
  expect(searchInsertPosition([1, 3, 5, 6], 2)).toEqual(1);
  expect(searchInsertPosition([1, 3, 5, 6], 7)).toEqual(4);
  expect(searchInsertPosition([1, 3, 5, 6], 0)).toEqual(0);
});
